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
        <h2>Seks, Liefde, en Relatiecoaching</h2>
        <p>
          Onder{" "}
          <a href="https://laylamartin.com/" rel="_blank" rel="noreferrer">
            Layla Martin
          </a>{" "}
          volg ik momenteel mijn certificatie tot Seks, Liefde, en Relatiecoach.
          Zij is de oprichtster van VITA™, dit staat voor: "De Vitale en
          Geïntegreerde Tantrische Benadering.” Deze training bestaat uit 650
          uur... En in haar eigen woorden is het de meest geavanceerde en
          diepgaande coachingcertificering die beschikbaar is voor seks, liefde
          en relaties ter wereld.
        </p>
      </Section>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/coaching/health">Gezondheidscoaching</ButtonLink>
            <ButtonLink to="/coaching/bodywork">Lichaamswerk</ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
        <h2>Seks, Liefde, en Relatiecoaching</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Verlang jij ...?</h3>
            <p>
              Verlang jij naar een legendarisch liefdesleven dat een empowerend
              gevoel teweegbrengt? Seks waarvan je dacht dat het nooit mogelijk
              was, lees ‘mind blowing’? Een duurzame relatie waar passie en
              romantiek centraal staan? Snak je naar algemene zelfontwikkeling
              waarbij jij jouw seksualiteit in eigen handen neemt? Of wil je
              graag meer geluk, passie, verbinding en intimiteit in jouw leven
              en relaties? Dan ben je hier op de juiste plaats.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/SLR01.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
          <div>
            <h3>Effectieve tools</h3>
            <p>
              Dankzij de VITA™ Methode ben ik in staat jou te begeleiden met
              effectieve tools die tot een diepe transformatie leiden. Via deze
              specifieke technieken ondersteun ik jou in het omvormen van
              lichaam, geest en emoties om zowel trauma, beperkende
              overtuigingen en seksuele blokkades te bevrijden. Denk hierbij ook
              aan wonden van de kindertijd, gebroken harten, bepaalde angsten,
              onbewuste patronen, enzovoort. Via deze methode kunnen we seksuele
              gezondheid, erotische verlangens, eigenliefde, gepassioneerde
              relaties, en zoveel meer herstellen of updaten.
            </p>
          </div>
          <div>
            <h3>Opwindende onderwerpen</h3>
            <p>
              In totaal zijn er 10 sessies die één geheel vormen. Voorbeelden
              zijn: Het in kaart brengen van je specifieke verlangens. Het
              transformeren van beperkende overtuigingen en onbewuste
              weerstanden. Omarmen van het innerlijke kind door te onderzoeken
              hoe het je liefdes-, seks-, en relatiepatronen beïnvloedt. Het
              vinden van emotioneel empowerment door een vernieuwde connectie
              met emoties aan te gaan. Gezonde relaties door het begrijpen van
              projecties. En zoveel meer!
            </p>
          </div>
        </Wrapper>
        <h2>
          Ben jij klaar voor een bevrijdend seks en liefdesleven, en duurzame
          relaties die groei met zich meebrengen? Wacht niet en{" "}
          <Link to="/contact">contacteer mij</Link> met al jouw vragen en
          verlangens!
        </h2>
      </Section>

      <Section id="pricing">
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
              src="../images/SLR02.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
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

export default SexLoveRelation;
