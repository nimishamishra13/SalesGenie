import streamlit as st

from components.header import show_header
from components.stat_cards import show_stat_cards
from components.welcome import show_welcome
from components.recent_activity import show_recent_activity


def show_dashboard():

    show_header()

    show_stat_cards()

    left, right = st.columns([2, 1])

    with left:
        show_welcome()

    with right:
        show_recent_activity()