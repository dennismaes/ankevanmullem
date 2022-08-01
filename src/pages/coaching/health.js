import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Section, Sticky, Wrapper } from "../../components/intro"
import { Button, ButtonLink, Back, Contact, Dropdown, DropdownContent } from "../../components/button"
import { Table } from "../../components/table"
import { StaticImage } from "gatsby-plugin-image";

const Gezondheid = ({location}) => {
    return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Gezondheidscoaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/"><Back />Home</ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/coaching/health">Gezondheid</ButtonLink>
            <ButtonLink to="/coaching/bodywork">Lichaamswerk</ButtonLink>
            <ButtonLink to="/coaching/sexloverelation">Seks, Liefde, Relatie</ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
      </Section>
      <Section bgGrey id="pricing">
      </Section>

    </Layout>
    )
}

export default Gezondheid