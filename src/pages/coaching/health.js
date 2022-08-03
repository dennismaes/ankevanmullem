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

const Gezondheid = ({ location }) => {
  return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Gezondheidscoaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/coaching/sexloverelation">
              Seks, Liefde, en Relatiecoaching
            </ButtonLink>
            <ButtonLink to="/coaching/bodywork">Lichaamswerk</ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
        <h2>Gezondheidscoaching</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Gezondheid: wat is het? </h3>
            <p>
              Gezondheid is een ruim begrip: het omvat zowel lichamelijk,
              geestelijk en maatschappelijk welzijn. Naast een gebalanceerde
              voeding en voldoende beweging dragen een tal van factoren bij aan
              jouw algemene gezondheid: jouw work-life balance, een natuurlijk
              slaappatroon, seksuele gezondheid, vervullende sociale contacten,
              en zoveel meer.
            </p>
          </div>
          <div>
            <h3>Laagdrempelig</h3>
            <p>
              De sleutel tot duurzame gedragsveranderingen zijn laagdrempelige
              aanpassingen. Deze aanpassingen kan je makkelijk toepassen in je
              dagelijks leven. In plaats van je hele levensstijl om te gooien,
              neem ik samen met jou kleine stappen die uiteindelijk een groot
              verschil maken.
            </p>
          </div>
          <div>
            <h3>Duurzame coaching</h3>
            <p>
              Aan de hand van een holistische kijk op jouw gezondheid ga ik aan
              de slag om jou naar een gezondere levensstijl te coachen. Als
              coach help ik jou leren. Dit is niet bedoeld in de zin van
              onderwijzen, maar eerder leren door te inspireren en te
              ondersteunen. Want uiteindelijk kan iedereen gezonder leven met de
              juiste ondersteuning en kennis!
            </p>
          </div>
          <div>
            <h3>Positief zelfinzicht</h3>
            <p>
              {" "}
              Tijdens onze sessies is het vooral belangrijk dat jijzelf een
              optimaal zelfinzicht verkrijgt, losstaand van wat ik als coach of
              anderen in jouw omgeving ervan vinden. Met een luisterend oor en
              via observatie, stem ik iedere sessie af op jouw wensen. Positieve
              psychologie staat hier centraal. De nadruk ligt dus niet op wat je
              niet kan, maar op wat je wel kan en de mogelijkheden dat dit met
              zich meebrengt.
            </p>
          </div>
        </Wrapper>
      </Section>

      <Section id="pricing">
        <h2>Praktische info</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Waar en hoe?</h3>
            <p>
              Het meest voorkomende is live coaching te <i>Sint-Niklaas</i>. Ook
              is het mogelijk een coaching online te volgen via Zoom. Bij online
              coaching is het aangeraden om een rustige ruimte te voorzien waar
              jij ongestoord de sessie kan houden.
            </p>
          </div>
          <div>
            <StaticImage
              src="../../images/Gcoaching.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
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
            <h3>Kostprijs?</h3>
            <p>
              Een sessie duurt algemeen 60 minuten. Voor één sessie betaal je 45
              euro. Voor een traject van 3 sessies betaal je 130 euro
              <i>(bespaar 5 euro)</i>; op een traject van 6 sessies betaal je
              slechts 250 euro <i>(bespaar 20 euro)</i>. Ook bied ik
              vervolgsessies aan van 30 minuten voor 25 euro. Voor particulieren
              zijn alle prijzen incl. BTW.
            </p>
          </div>
        </Wrapper>

        <p>
          Ben je overtuigd? Maak dan een afspraak via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>
          .
        </p>
        <p>
          Toch nog niet helemaal zeker en heb je graag nog wat vrijblijvende
          informatie? Stel mij al jouw vragen en/of bedenkingen via het via het{" "}
          <Link to="/contact">contactformulier</Link> of via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>
          . Op aanvraag kunnen wij ook een online gesprek inplannen om elkaar
          wat beter aan te voelen en te kijken hoe ik jou kan helpen. Dan kan ik
          je gerichter vertellen over de mogelijkheden en een voorstel doen over
          hoe we kunnen samenwerken.
        </p>
      </Section>
    </Layout>
  );
};

export default Gezondheid;
