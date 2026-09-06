import json
import os

from dotenv import load_dotenv
from openai import OpenAI


load_dotenv(override=True)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

MODEL = os.getenv(
    "GROQ_MODEL",
    "openai/gpt-oss-20b"
)

if not GROQ_API_KEY:
    raise RuntimeError(
        "GROQ_API_KEY is not configured in the .env file."
    )


client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
)


def analyze_transcript(transcript: str):

    prompt = f"""
Analyze the following sales conversation.

Conversation:
{transcript}

Return ONLY valid JSON with these fields:

{{
    "summary": "Brief summary of the conversation",
    "sentiment": "Positive, Neutral, or Negative",
    "buying_intent": "High, Medium, or Low",
    "next_action": "Recommended next sales action",
    "crm_notes": "Important CRM notes"
}}
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

    try:
        return json.loads(content)

    except json.JSONDecodeError as e:
        raise ValueError(
            f"AI returned invalid JSON: {content}"
        ) from e

