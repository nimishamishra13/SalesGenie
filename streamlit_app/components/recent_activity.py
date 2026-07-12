import streamlit as st

def show_recent_activity():

    st.subheader("Recent Activity")

    st.write("✅ Lead Created")
    st.caption("Microsoft • 10 mins ago")

    st.write("✏️ Lead Updated")
    st.caption("Google • 45 mins ago")

    st.write("🔄 Status Changed")
    st.caption("Amazon • 2 hours ago")

    st.write("🗑️ Lead Deleted")
    st.caption("IBM • Yesterday")