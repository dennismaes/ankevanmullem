import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import { Section, Sticky, Wrapper } from "../../../components/intro"
import { Button, ButtonLink, Back, Contact, Dropdown, DropdownContent  } from "../../../components/button"
import { Table } from "../../../components/table"
import { StaticImage } from "gatsby-plugin-image";

const Health = ({location}) => {
    return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Health coaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/en"><Back />Home</ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/en/coaching/health">Health</ButtonLink>
            <ButtonLink to="/en/coaching/bodywork">Body Work</ButtonLink>
            <ButtonLink to="/en/coaching/sexloverelation">Sex, Love, Relationship</ButtonLink>
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

export default Health