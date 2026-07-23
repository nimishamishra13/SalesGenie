import streamlit as st

from components.sidebar import show_sidebar
from views.dashboard import show_dashboard
from views.leads import show_leads

st.set_page_config(
    page_title="SalesGenie",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

with open("style.css") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

page = show_sidebar()

st.write(page)   # <-- temporary debugging

if page == "📊 Overview":
    show_dashboard()

elif page == "👥 Leads":
    show_leads()