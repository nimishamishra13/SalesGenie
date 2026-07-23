from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from modules.module2_intelligence import analyze_and_score_lead
from database.connection import SessionLocal
from database.models import Lead

router = APIRouter(prefix="/leads", tags=["Leads"])


# ------------------------
# DATABASE DEPENDENCY
# ------------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ------------------------
# CREATE LEAD
# ------------------------
@router.post("/")
def create_lead(data: dict, db: Session = Depends(get_db)):
    ai_result = analyze_and_score_lead(data)
    status = ai_result["status"]
    analysis = ai_result["analysis"]
    score = ai_result["score"]

    if score >= 90:
        status = "Hot"
    elif score >= 75:
        status = "Warm"
    else:
        status = "Cold"

    new_lead = Lead(
        company=data.get("company"),
        contact=data.get("contact"),
        designation=data.get("designation"),
        email=data.get("email"),
        phone=data.get("phone"),
        website=data.get("website"),
        location=data.get("location"),
        industry=data.get("industry"),
        score=score,
        status=status,
        notes=data.get("notes"),
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    return {
        "message": "Lead created successfully",
        "lead": new_lead,
        "ai_analysis": ai_result
    }

# ------------------------
# GET ALL LEADS
# ------------------------
@router.get("/")
def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).all()


# ------------------------
# GET SINGLE LEAD
# ------------------------
@router.get("/{lead_id}")
def get_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    return lead


# ------------------------
# UPDATE LEAD
# ------------------------
@router.put("/{lead_id}")
def update_lead(lead_id: int, data: dict, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    lead.company = data.get("company", lead.company)
    lead.contact = data.get("contact", lead.contact)
    lead.designation = data.get("designation", lead.designation)
    lead.email = data.get("email", lead.email)
    lead.phone = data.get("phone", lead.phone)
    lead.website = data.get("website", lead.website)
    lead.location = data.get("location", lead.location)
    lead.industry = data.get("industry", lead.industry)
    lead.score = data.get("score", lead.score)
    lead.status = data.get("status", lead.status)
    lead.notes = data.get("notes", lead.notes)
    ai = analyze_and_score_lead({
        "company": lead.company,
        "contact": lead.contact,
        "designation": lead.designation,
        "email": lead.email,
        "phone": lead.phone,
        "website": lead.website,
        "location": lead.location,
        "industry": lead.industry,
        "notes": lead.notes,
    })

    lead.score = ai["score"]
    lead.status = ai["status"]
    db.commit()
    db.refresh(lead)

    return {
        "message": "Lead updated successfully",
        "lead": lead,
    }
@router.post("/reanalyze")
def reanalyze_all_leads(db: Session = Depends(get_db)):

    leads = db.query(Lead).all()

    for lead in leads:

        ai = analyze_and_score_lead({
            "company": lead.company,
            "contact": lead.contact,
            "designation": lead.designation,
            "email": lead.email,
            "phone": lead.phone,
            "website": lead.website,
            "location": lead.location,
            "industry": lead.industry,
            "notes": lead.notes,
        })

        lead.score = ai["score"]
        lead.status = ai["status"]

    db.commit()

    return {
        "message": f"{len(leads)} leads re-analyzed successfully."
    }

# ------------------------
# DELETE LEAD
# ------------------------
@router.delete("/{lead_id}")
def delete_lead(lead_id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == lead_id).first()

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    db.delete(lead)
    db.commit()

    return {"message": "Lead deleted successfully"}
