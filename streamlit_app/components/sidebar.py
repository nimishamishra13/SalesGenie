import streamlit as st

def show_sidebar():

    with st.sidebar:

        st.markdown("# **SalesGenie**")
        st.caption("AI Sales Assistant")

        st.divider()

        page = st.radio(
            "Navigation",   # <-- Empty string badulu label ivvali
            [
                "📊 Overview",
                "👥 Leads",
                "⚙️ Settings",
                "🚪 Logout"
            ],
            label_visibility="collapsed"
        )

    return page