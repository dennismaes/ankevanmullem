import React from "react"

import Layout from "../components/layout"
import { Sticky, Section } from "../components/intro"
import { ButtonHome, ButtonWhatsapp, ButtonMail } from "../components/button"
import ContactForm from "../components/contact"

const Contact = () => {
  return (
    <Layout>
      <Section id="contact">
        <h2>Contact</h2>
        <p>Wil je meer weten? Laat hier je bericht achter, en ik beantwoord uw vraag zo snel mogelijk.</p>
      </Section>
      <Sticky>
        <ButtonHome />
        <ButtonWhatsapp />
        <ButtonMail />
      </Sticky>
      <Section>
        Of laat hieronder je bericht achter
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default Contact