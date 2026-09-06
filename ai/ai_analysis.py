import os
import json

from dotenv import load_dotenv
from openai import OpenAI

from ai.prompts import LEAD_ANALYSIS_PROMPT
from ai.tech_stack import detect_tech_stack


load_dotenv(override=True)


GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise RuntimeError(
        "GROQ_API_KEY is not configured in the .env file."
    )


MODEL = os.getenv(
    "GROQ_MODEL",
    "openai/gpt-oss-20b"
)


client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
)


def analyze_lead(lead):

    prompt = LEAD_ANALYSIS_PROMPT.format(
        lead=lead
    )

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    content = response.choices[0].message.content

    try:
        return json.loads(content)

    except json.JSONDecodeError as e:
        raise ValueError(
            f"AI returned invalid JSON: {content}"
        ) from e


def build_lead_analysis(lead):

    combined_text = f"""
    {lead['website']}
    {lead['notes']}
    """

    tech_stack = detect_tech_stack(combined_text)

    report = analyze_lead(f"""
    Company: {lead['company']}
    Industry: {lead['industry']}
    Location: {lead['location']}
    Website: {lead['website']}

    Detected Technology Stack:
    {", ".join(tech_stack) if tech_stack else "Not detected"}

    Contact:
    {lead['contact']}

    Designation:
    {lead['designation']}

    Notes:
    {lead['notes']}
    """)

    report["tech_stack"] = tech_stack

    return report
def summarize_lead(lead):

    prompt = f"""
Create a concise and accurate executive summary for the following sales lead.

Lead:
{lead}

Requirements:
- Mention the company and relevant business context.
- Mention important strengths or opportunities.
- Mention important risks or missing information.
- Do not invent facts.
- Keep the summary between 2 and 4 sentences.
- Return only the summary text.
"""

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    content = response.choices[0].message.content

    if not content or not content.strip():
        raise ValueError("AI returned an empty summary")

    return content.strip()

