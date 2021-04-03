import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section, Sticky } from "../components/intro"
import { Timeline, TimlineEntry } from "../components/timeline"
import { ButtonHome, ButtonLinkedin } from "../components/button"

const Praktisch = () => {
    return (
    <Layout>
      <Section id="intro">
        <p>In het dagelijkse leven werk ik rond welzijn op het werk als veiligheidsconsultant, beter bekend als preventieadviseur. Maar op deze site vind je alles over mijn werk als zelfstandige in bijberoep: uw persoonlijke gezondheidscoach.</p>
      </Section>
      <Sticky>
        <ButtonHome />
        <ButtonLinkedin />
      </Sticky>
    </Layout>
    )
}

export default Praktisch