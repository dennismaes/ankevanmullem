import React from "react";

import Layout from "../components/layout";
import { Sticky, Section } from "../components/intro";
import { ButtonLink, Back, ButtonMail } from "../components/button";
import ContactForm from "../components/contact";

const Contact = ({ location }) => {
  return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section id="contact">
        <h2>Contact</h2>
        <p>
          Wil je meer weten? Laat hier je bericht achter, en ik beantwoord uw
          vraag zo snel mogelijk.
        </p>
      </Section>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Home
        </ButtonLink>
        <ButtonMail />
      </Sticky>
      <Section>
        Of laat hieronder je bericht achter
        <ContactForm locale="nl" />
      </Section>
    </Layout>
  );
};

export default Contact;
