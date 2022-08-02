import React from "react";

import Layout from "../../components/layout";
import { Sticky, Section } from "../../components/intro";
import { Button, Back, ButtonLink, Mail } from "../../components/button";
import ContactForm from "../../components/contact";

const ContactEn = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="contact">
        <h2>Contact</h2>
        <p>Want to know more? Get in touch!</p>
      </Section>
      <Sticky>
        <ButtonLink to="/en/">
          <Back />
          Home
        </ButtonLink>
        <Button
          href="mailto:info@ankevanmullem.be?body=Hi%20Anke%0D%0A%0D%0A"
          target="_blank"
          rel="noreferrer"
        >
          <Mail />
          info@ankevanmullem.be
        </Button>
      </Sticky>
      <Section>
        Or leave a message below
        <ContactForm locale="en" />
      </Section>
    </Layout>
  );
};

export default ContactEn;
