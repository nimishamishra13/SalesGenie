import streamlit as st


def show_stat_cards(
    total_leads,
    hot_leads,
    warm_leads,
    avg_score,
):

    cold_leads = max(total_leads - hot_leads - warm_leads, 0)

    c1, c2, c3, c4 = st.columns(4)

    with c1:
        st.metric(
            label="🔵 Total Prospects",
            value=total_leads,
        )

    with c2:
        st.metric(
            label="🔥 Hot Leads",
            value=hot_leads,
        )

    with c3:
        st.metric(
            label="🟡 Warm Leads",
            value=warm_leads,
        )

    with c4:
        st.metric(
            label="📊 Avg. Lead Score",
            value=f"{avg_score}/100",
        )

    st.markdown("---")
    