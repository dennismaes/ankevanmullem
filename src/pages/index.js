import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Sticky, Section, Wrapper } from "../components/intro";
import {
  Button,
  ButtonLink,
  Aboutme,
  Contact,
  ButtonFacebook,
  Dropdown,
  DropdownContent
} from "../components/button";
import Card from "../components/card";

const Index = ({ location }) => {
  return (
    <Layout locale="nl" location={location}>
      <Section id="top">
        <h2>Welkom bij Path to Body and Health</h2>
        <p>
          In het dagelijkse leven werk ik rond welzijn op het werk als
          veiligheidsconsulent, beter bekend als preventieadviseur. Maar op deze
          site vind je alles over mijn werk als zelfstandige in bijberoep: jouw
          persoonlijke Intimiteits- en Gezondheidscoach. Ik ben gespecialiseerd in 
          een holistische kijk op gezondheid, en in de thema's Seks, Liefde, en Relaties 
          via de VITA™ Methode. Dit voor individuen die verlangen naar die vonk in hun relatie 
          of leven door een diepe verbinding met zichzelf te creëren. 
        </p>
      </Section>
      <Sticky>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/coaching/health">Gezondheidscoaching</ButtonLink>
            <ButtonLink to="/coaching/sexloverelation">
              Seks, Liefde, en Relatiecoaching
            </ButtonLink>
            <ButtonLink to="/coaching/bodywork">Lichaamswerk</ButtonLink>
          </DropdownContent>
        </Dropdown>
        <ButtonLink to="/aboutme">
          <Aboutme />
          Wat meer over mij
        </ButtonLink>
        <ButtonLink to="/contact">
          <Contact />
          Neem contact op
        </ButtonLink>
        <ButtonFacebook />
      </Sticky>
      <Section>
        <Wrapper cols={3}>
          <Card
            to="/coaching/health"
            title="Gezondheidscoaching"
            subtitle="Holistische kijk op gezondheid"
          >
            <StaticImage
              src="../../images/Gcoaching.jpg"
              width={600}
              quality={60}
              alt="Health"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </Card>
          <Card
            to="/coaching/sexloverelation"
            title="Intimiteitscoaching"
            subtitle="Gespecialiceerd in Seks, Liefde, en Relaties.
            Geen taboes, alles is mogelijk!"
          >
            <StaticImage
              src="../../images/SLR01.jpg"
              width={600}
              quality={60}
              alt="Sex, Love, and Relationship"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </Card>
          <Card
            to="/coaching/bodywork"
            title="Bodywork"
            subtitle="Energie en de-armouring"
          >
            <StaticImage
              src="../../images/_DSC0110-2.jpg"
              width={600}
              quality={60}
              alt="Health"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </Card>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default Index;

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      gatsbyImageData(width: 640, height: 480, layout: CONSTRAINED)
    }
  }
`;
