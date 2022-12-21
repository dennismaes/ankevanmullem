import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import { Sticky, Section, Wrapper } from "../../components/intro";
import {
  ButtonFacebook,
  Button,
  ButtonLink,
  Aboutme,
  Contact,
  Dropdown,
  DropdownContent
} from "../../components/button";
import Card from "../../components/card";

const IndexEn = ({ location }) => {
  return (
    <Layout locale="en" location={location}>
      <Section id="top">
        <h2>Welcome to Path to Body and Health</h2>
        <p>
          In daily life, I work in the field of well-being at work as a safety
          consultant. But on this website you will find everything about my work
          as a self-employed person: your personal Intimacy and Health Coach!
          I specialise in a holistic view of health, and in the topics of 
          Sex, Love, and Relationships through the VITA™ Method. 
          This for individuals longing for that spark in their relation or life by creating a deep connection with themselves!
        </p>
      </Section>
      <Sticky>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/en/coaching/health">Health Coaching</ButtonLink>
            <ButtonLink to="/en/coaching/sexloverelation">
              Sex, Love, and Relationship Coaching
            </ButtonLink>
            <ButtonLink to="/en/coaching/bodywork">Bodywork</ButtonLink>
          </DropdownContent>
        </Dropdown>
        <ButtonLink to="/en/aboutme/">
          <Aboutme />
          More about me
        </ButtonLink>
        <ButtonLink to="/en/contact/">
          <Contact />
          Contact me
        </ButtonLink>
        <ButtonFacebook />
      </Sticky>


      <Section>
        <Wrapper cols={3}>
          <Card
            to="/en/coaching/health"
            title="Health coaching"
            subtitle="Holistic view on health"
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
            to="/en/coaching/sexloverelation"
            title="Intimacy Coaching"
            subtitle="Specialized in Sex, Love, Relations.<br/>
            No taboos, everything is possible!"
          >
            <StaticImage
              src="../../images/SLR01.jpg"
              width={600}
              quality={60}
              alt="Health"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </Card>
          <Card
            to="/en/coaching/bodywork"
            title="Bodywork"
            subtitle="Energy and De-armouring"
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

export default IndexEn;

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      gatsbyImageData(width: 640, height: 480, layout: CONSTRAINED)
    }
  }
`;
