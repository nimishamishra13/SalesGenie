from sqlalchemy import Column, Integer, String
from database.connection import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    company = Column(String)
    status = Column(String)  
    notes = Column(String)