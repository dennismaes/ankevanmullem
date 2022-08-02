import React from "react";
import { Link } from "gatsby";
import Layout from "../../../components/layout";
import { Section, Sticky, Wrapper } from "../../../components/intro";
import {
  Button,
  ButtonLink,
  Back,
  Contact,
  Dropdown,
  DropdownContent
} from "../../../components/button";
import { Table } from "../../../components/table";
import { StaticImage } from "gatsby-plugin-image";

const SexLoveRelationEN = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Sex, Love, Relationship coaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/en">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/en/coaching/health">Health</ButtonLink>
            <ButtonLink to="/en/coaching/bodywork">Body Work</ButtonLink>
            <ButtonLink to="/en/coaching/sexloverelation">
              Sex, Love, Relationship
            </ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>

      <Section bgGrey id="info">
        <h2>Sex, Love, and Relationship Coaching</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Coming soon!</h3>
            <p></p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC0151.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
        </Wrapper>
      </Section>

      <Section bgGrey id="pricing"></Section>
    </Layout>
  );
};

export default SexLoveRelationEN;
