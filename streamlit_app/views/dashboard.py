import streamlit as st
import requests

from components.header import show_header
from components.stat_cards import show_stat_cards
from components.welcome import show_welcome
from components.recent_activity import show_recent_activity


def get_leads():
    try:
        response = requests.get("http://127.0.0.1:8000/leads/")
        response.raise_for_status()
        return response.json()
    except Exception:
        return []


def show_dashboard():

    leads = get_leads()

    total_leads = len(leads)
    hot_leads = len([lead for lead in leads if lead.get("status") == "Hot"])
    warm_leads = len([lead for lead in leads if lead.get("status") == "Warm"])
    avg_score = (
        round(sum(lead.get("score", 0) for lead in leads) / total_leads)
        if total_leads > 0
        else 0
    )

    show_header()

    show_stat_cards(
        total_leads=total_leads,
        hot_leads=hot_leads,
        warm_leads=warm_leads,
        avg_score=avg_score,
    )

    left, right = st.columns([2, 1])

    with left:
        show_welcome()

    with right:
        show_recent_activity()