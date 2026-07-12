import streamlit as st

def show_stat_cards():

    c1, c2, c3, c4 = st.columns(4)

    with c1:
        st.metric("🔵 Total Prospects", "156")

    with c2:
        st.metric("🟢 New Leads", "42")

    with c3:
        st.metric("🟡 Qualified Leads", "38")

    with c4:
        st.metric("🟣 Closed Leads", "17")

    st.markdown("---")