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

const Lichaamswerk = ({ location }) => {
  return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Lichaamswerk</h2>
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
            <ButtonLink to="/coaching/sexloverelation">
              Seks, Liefde, en Relatiecoaching
            </ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
        <h2>Lichaamswerk</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Lichaamswerk: wat is het? </h3>
            <p>
              "Bodywork" is in de alternatieve geneeskunde elke therapeutische
              of persoonlijke ontwikkelingstechniek waarbij met het menselijk
              lichaam wordt gewerkt in een vorm van manipulatieve therapie,
              ademhaling of energie. Ik heb verschillende soorten lichaamswerk dat ik graag 
              gebruik, namelijk een proces dat helpt om blokkades, patronen, trauma's en
              overtuigingen die je loskoppelen van jezelf los te laten,
              en een techniek waarbij je echt kan gaan landen in jouw lichaam. 
              Met andere woorden, bodywork staat voor mij gelijk aan connecteren met
              jezelf (op een dieper level).
            </p>
          </div>
          <div>
            <h3>Werken met energie</h3>
            <p>
              Energie zijn trillingen en frequenties, die we kunnen sturen en/of
              beïnvloeden. Werken met lichaamsenergie gaat de geblokkeerde
              energie in het lichaam activeren, waardoor het onbewuste geheugen
              van het lichaam zich kan openen. Dit wil zeggen dat het lichaam
              onvrijwillig kan gaan reageren en bewegen als gevolg van het
              activeren van het celgeheugen. Ook kan je emoties en herinneringen
              ervaren die naar bovenkomen. Het doel van energetisch werk kan
              samengevat worden tot het loslaten of juist het omarmen van deze
              lichamelijke reacties.
            </p>
          </div>
          <div>
            <h3>De-armouring</h3>
            <p>
              Dit is een manier om blokkades, vastzittende energie, emoties en
              spanning uit het lichaam te halen - ook wel armour genoemd (in het
              Nederlands “pantser”). Het is een spanning en/of pijn die het
              lichaam vasthoudt wanneer iets is ervaren dat het zenuwstelsel
              activeerde op een manier dat niet werd verwerkt. Eén van de
              methodes die ik toepas is “soft-touch” de-armouring (vertaald
              “ontwapening”). De bedoeling is liefdevolle aandacht te brengen
              naar gebieden van spanning, gevoelloosheid en verbroken verbinding
              met onszelf en/of ons lichaam. Belangrijk is dat we het pantser
              van het lichaam niet met geweld gaan doorbreken, eerder nodigen we
              het lichaam uit zich te openen. Dit kan ook seksuele de-armouring
              inhouden; dit is zeer effectief voor mensen met seksueel trauma,
              stoornissen of gebrek aan gevoeligheid.
            </p>
          </div>
          <div>
            <h3>Doekenwerk</h3>
            <p>Dit is een techniek waarbij we met behulp van een Sarong met het lichaam gaan werken. Het doel is om in ons lichaam te landen. 
              Om Juli Pohan haar woorden te gebruiken: "Werken met een doek is een zachte, voedende en kalmerende techniek."
              Van het lichaam strekken tot schudden, 'bio-hacken' van het zenuswstelsel en het tot leven brengen van het lijf, maar ook vooral overgave en ontspanning. 
              Voor mij staat het voor uit het hoofd geraken, en zo echt in je lichaam landen. 
              Eén van de technieken die hierin kan worden gebruikt is geïnspireerd op het Closing the Bones ritual;
              enorm helend voor het afsluiten van een hoofdstuk, bijvoorbeeld, emotioneel en/of energetisch. 
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
              Het is enkel mogelijk om live coaching te ontvangen te{" "}
              <i>Sint-Niklaas</i>. Op aanvraag kan dit ook aan huis. Hierbij is
              het belangrijk een rustige ruimte te voorzien waar wij ongestoord
              onze sessie kunnen houden. Hiervoor wordt wel een extra kostprijs
              aangerekend, nl. 5 euro plus een kilometervergoeding van €0,42/km
              (herzien op jul/'22).
            </p>
          </div>
          <div>
            <h3>Wanneer?</h3>
            <p>
              Ik gebruik lichaamswerk vaak als verlengde en aanvulling van mijn andere coaching sessies.
              Uitzonderlijk geef ik sessies lichaamswerk individueel. Deze sessies zijn dus steed na samenspraak en afspraak. 
              Algemeen is er mogelijkheid om coaching te ontvangen in de weekdagen in de avond; op vrijdagen kan dit ook
              doorheen de dag. Verder is het mogelijk in het weekend op aanvraag.
            </p>
          </div>
          <div>
            <StaticImage
              src="../../images/_DSC0110.jpg"
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
            <p>
              Een sessie duurt ongeveer 90 minuten. Voor een traject van 6
              sessies betaal je op dit moment slechts 666 euro. Een betalingsplan is een mogelijkheid.
              Uitzonderlijk kan er na afspraak één proefsessie afgesproken worden. Voor
              particulieren zijn alle prijzen incl. BTW.
            </p>
          </div>
          <div>
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
          .</p>
          <p>   
          Toch nog niet helemaal zeker en heb je graag nog wat vrijblijvende
          informatie? Stel mij al jouw vragen en/of bedenkingen via het{" "}
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
          </div>
          <div>
            <StaticImage
              src="../../images/_DSC0151.jpg"
              width={400}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
        </Wrapper>
        
      </Section>
    </Layout>
  );
};

export default Lichaamswerk;
