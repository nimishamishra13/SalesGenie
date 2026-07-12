from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

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
    new_lead = Lead(
        name=data.get("name"),
        email=data.get("email"),
        company=data.get("company"),
        status=data.get("status"),
        notes=data.get("notes"),
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    return {
        "message": "Lead created successfully",
        "lead": new_lead,
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

    lead.name = data.get("name", lead.name)
    lead.email = data.get("email", lead.email)
    lead.company = data.get("company", lead.company)
    lead.status = data.get("status", lead.status)
    lead.notes = data.get("notes", lead.notes)

    db.commit()
    db.refresh(lead)

    return {
        "message": "Lead updated successfully",
        "lead": lead,
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