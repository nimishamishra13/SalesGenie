import streamlit as st

def show_leads():

    st.title("Leads & Prospects")

    st.write("TEST 1")

    st.button("+ Add Prospect")

    st.write("TEST 2")

    st.text_input("Search Company")

    st.write("TEST 3")

    st.table({
        "Company": ["Microsoft", "Amazon"],
        "Contact": ["John", "Sarah"]
    })

    st.write("TEST 4")