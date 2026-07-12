from fastapi import APIRouter
from pydantic import BaseModel

# Create router
router = APIRouter(prefix="/intelligence", tags=["Company Intelligence"])


# =========================
# Company Intelligence API
# =========================
@router.get("/analyze/{company_name}")
def analyze_company(company_name: str):
    return {
        "company": company_name,
        "insight": f"{company_name} is a growing company with strong market presence.",
        "recommendation": "Good potential lead"
    }


# =========================
# Lead Scoring 
# =========================
class LeadScoreRequest(BaseModel):
    company: str
    status: str


# =========================
# Lead Scoring API
# =========================
@router.post("/score")
def lead_scoring(data: LeadScoreRequest):
    score = 0

    # Simple scoring logic
    if data.status.lower() == "new":
        score = 50
    elif data.status.lower() == "contacted":
        score = 70
    elif data.status.lower() == "qualified":
        score = 90
    elif data.status.lower() == "lost":
        score = 10
    else:
        score = 30

    return {
        "company": data.company,
        "status": data.status,
        "lead_score": score,
        "remark": "Higher score means better conversion chance"
    }