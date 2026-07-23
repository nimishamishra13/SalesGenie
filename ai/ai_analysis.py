import os

from dotenv import load_dotenv
from openai import OpenAI
import json

from ai.prompts import LEAD_ANALYSIS_PROMPT

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

MODEL = "llama-3.3-70b-versatile"


def analyze_lead(lead):

    prompt = LEAD_ANALYSIS_PROMPT.format(
        lead=lead
    )

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role":"user",
                "content":prompt
            }
        ]
    )

    content = response.choices[0].message.content

    return json.loads(content)