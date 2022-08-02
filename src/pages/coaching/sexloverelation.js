import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { Section, Sticky, Wrapper } from "../../components/intro";
import {
  Button,
  ButtonLink,
  Back,
  Contact,
  Dropdown,
  DropdownContent
} from "../../components/button";
import { Table } from "../../components/table";
import { StaticImage } from "gatsby-plugin-image";

const SexLoveRelation = ({ location }) => {
  return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Sex, liefde en relatiecoaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/coaching/health">Gezondheid</ButtonLink>
            <ButtonLink to="/coaching/bodywork">Lichaamswerk</ButtonLink>
            <ButtonLink to="/coaching/sexloverelation">
              Seks, Liefde, Relatie
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

      <Section bgGrey id="pricing">
        <h2>Praktische info</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Waar en hoe?</h3>
            <p>Coming soon!</p>
          </div>
          <div>
            <h3>Wanneer?</h3>
            <p>
              Steeds na afspraak. Algemeen is er mogelijkheid om coaching te
              ontvangen in de weekdagen in de avond; op vrijdagen kan dit ook
              doorheen de dag. Verder is het mogelijk in het weekend op
              aanvraag.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC0110.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
          <div>
            <h3>Kostprijs?</h3>
            <p>Coming soon! Voor particulieren zijn alle prijzen incl. BTW.</p>
          </div>
        </Wrapper>

        <p>
          Ben je overtuigd? Maak dan een afspraak via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            info@ankevanmullem.be
          </a>
        </p>
        <p>
          Toch nog niet helemaal zeker en heb je graag nog wat vrijblijvende
          informatie? Stel mij al jouw vragen en/of bedenkingen via het via het
          contactformulier. Op aanvraag kunnen wij ook een online gesprek
          inplannen om elkaar wat beter aan te voelen en te kijken hoe ik jou
          kan helpen. Dan kan ik je gerichter vertellen over de mogelijkheden en
          een voorstel doen over hoe we kunnen samenwerken.
        </p>
      </Section>
    </Layout>
  );
};

export default SexLoveRelation;
