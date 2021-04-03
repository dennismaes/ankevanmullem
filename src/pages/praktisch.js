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
      </Sticky>
      <Section bgGrey id="aboutme">
        <h2>Waar?</h2>
          <p>Mogelijkheid tot live coaching te Sint-Niklaas of coaching aan huis.
          Bij coaching aan huis is het aangeraden om een rustige ruimte te voorzien waar wij ongestoord onze sessie kunnen houden, of een rustige wandelroute waarbij buiten onze sessie kunnen houden.
          Voor coaching aan huis buiten Sint-Niklaas wordt het tarief gerekend plus een kilometervergoeding van € 0,35/km (herzien op april 2021).</p>
          <p>Verder is er ook online coaching mogelijk. In tijden van Covid-19 heeft dit de voorkeur.</p>
        <h2>Kostprijs?</h2>
        <p>
        </p>
      </Section>
    </Layout>
    )
}

export default Praktisch