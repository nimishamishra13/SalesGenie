from ai.ai_analysis import analyze_lead


def get_status(score):
    if score >= 90:
        return "Hot"
    elif score >= 75:
        return "Warm"
    return "Cold"


def analyze_and_score_lead(data: dict):
    prompt = f"""
Company: {data.get('company')}
Industry: {data.get('industry')}
Location: {data.get('location')}
Website: {data.get('website')}

Primary Contact: {data.get('contact')}
Designation: {data.get('designation')}

Additional Notes:
{data.get('notes')}

Evaluate the lead according to the scoring criteria.
"""

    result = analyze_lead(prompt)

    return {
        "analysis": result,
        "score": result["lead_score"],
        "status": get_status(result["lead_score"])
    }