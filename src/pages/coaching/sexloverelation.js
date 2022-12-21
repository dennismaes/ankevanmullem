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
          <a href="https://laylamartin.com/" target="_blank" rel="noreferrer">
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
            <h3>Wat verlang jij?</h3>
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
              src="../../images/SLR01.jpg"
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
              In totaal zijn er 10 sessies die één geheel vormen. De eerste sessies
              bestaat steeds uit het in kaart brengen van je specifieke verlangens.
              Hierna kunnen verschillende andere technieken worden gebruikt, voorbeelden
              zijn: Het transformeren van beperkende overtuigingen en onbewuste
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

      <Section id="program">
      <h2>Kies je eigen intimiteitsprogramma</h2>
      <p>
      Omdat mensen verschillend zijn, kan het niet anders als dat de stijl van 
      coaching ook verschillend moet zijn. Dat is de reden waarom ik twee 
      verschillende coachingsontwerpen heb gecreëerd. Omdat ik nogal wat 
      belangstelling heb gekregen rond mijn sessies en de technieken die ik 
      gebruik, wil ik je nu uitdagen door een specifieke structuur te volgen 
      met de naam "Unstoppalicious". Lees hieronder meer over hoe de twee 
      programma's verschillen en welke het beste bij jou past.
      </p>
      <Wrapper cols={2}>
        <div>
        <h3>Programma één: Sparklicious</h3>
        <p>
        Dit is het proces dat ik tot nu toe heb gebruikt. Het brengt je naar 
        de kern van je verlangen dankzij het vertrouwen in je lichaam en dus 
        je eigen intuïtie. Je lichaam weet al op een dieper niveau wat je nodig 
        hebt, zodat je kunt genezen van trauma’s of oudere wonden. Via 
        verschillende technieken uit de VITA™-Methode en mijn eigen ervaring, 
        leid ik je door een programma waarin we de onbewuste geest kunnen 
        ontvouwen en je dichter bij datgene kunnen brengen waar je het meest 
        naar verlangt.
        </p>
        <p>
        Dit proces heeft meer flexibiliteit om situaties op te vangen die je 
        nu misschien van je pad afbrengen. Het geeft meer ruimte om te werken 
        aan zowel je verlangen als aan, wat ik noem, acute uitdagingen. Er is 
        meer tijd om over de verschillende transformaties te ventileren en te 
        integreren. En bovenal wordt het programma bepaald door je eigen tempo!
        </p>
        <p>
        Geweldig voor mensen die ervaring hebben met energetisch werk, en al 
        vertrouwen hebben in hun innerlijke wijsheid. Aan de andere kant is het 
        heerlijk voor mensen die helemaal nieuw zijn met innerlijk werk en wat 
        meer tijd nodig hebben om in hun lichaam en in de verschillende 
        technieken te komen.
        </p>
        </div>
        <div>
          <h3>Programma twee: Unstoppalicious</h3>
          <p>
          In dit programma gebruik ik tien verschillende technieken uit de 
          VITA™ Methode. Een diepgaand en inzichtelijk proces met verschillende 
          benaderingen om je verlangen te bereiken. Zeer geschikt voor mensen 
          die een 'duidelijk' doel hebben binnen de thema's Seks, Liefde en/of 
          Relatie, en voor wie toe is aan algemene groei.<br/>
          De tien verschillende benaderingen zijn:
          </p>
          <p>
          Verlangens, Het creëren van een duidelijk doel<br/>
          Je verlangen manifesteren<br/>
          De familiedynamiek bevrijden<br/>
          Het innerlijke kind omarmen<br/>
          Het creëren van een bloeiende seksuele ecologie<br/>
          Krijgen wat je verlangt<br/>
          Emotionele empowerment vinden<br/>
          De kracht van intentioneel zelfplezier<br/>
          Reis naar het Zelf<br/>
          Levendige en gezonde relatie
          </p>
          <p>
          Dit proces is geweldig voor mensen die alles willen doen. Het heeft 
          minder flexibiliteit, maar in ruil daarvoor heeft het een duidelijk 
          programma, zodat je weet wat je elke sessie kan verwachten. Het 
          garandeert je verschillende technieken om je naar je doel te brengen, 
          en duidelijke taken tussen de sessies door voor degenen die dat willen.
          </p>
        </div>
      </Wrapper>
      </Section>

      <Section bgGrey id="review">
      <h2>Hoe hebben anderen hun transformatie ervaren?</h2>
          <h3>N.D.</h3>
            <p>
            Gecoacht worden door Anke was echt een plezier. 
            Ze creëerde altijd zo natuurlijk een veilige container voor me 
            waarin ik alle ruimte had om mijn gevoelens, mijn omstandigheden en mezelf te onderzoeken, 
            zodat ik tot de kern van mijn waarheid kon komen. 
            En toch was er altijd tijd om te lachen en me te wenden tot lichtheid.
            Waar ik het meest dankbaar voor ben is dat ze me altijd accepteerde voor wie ik ben, 
            wat ik het meest helende element in elke coaching vind. 
            Hierdoor kon ik delen van mezelf die ik vroeger afwees of over het hoofd zag in mezelf opnieuw integreren.
            Ik voel mijn eigen kracht en de verbinding met mijn diepste zelf weer in mij.<br/>
            <i>Deze getuigenis is een vertaling. De originele testimonium kan je terug vinden op mijn Engelse pagina.</i>
            </p>
      </Section>

      <Section id="pricing">
        <h2>Praktische info</h2>
        <Wrapper cols={2}>
          <div>
          <h3>Waar en hoe?</h3>
            <p>
              Een sessie duurt algemeen tussen de 60 en 90 minuten. 
              Deze sessies zijn origineel opgebouwd om online te volgen via Zoom in jouw eigen thuisomgeving.
              Belangrijk bij online coaching is dat je een rustige ruimte voorziet waar
              jij ongestoord de sessie kan houden.
              Het is echter ook mogelijk om live coaching te ontvangen te <i>Sint-Niklaas</i>.
            </p>
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
              De prijs wordt afgesteld op jouw financiële mogelijkheden en bespreek ik dus graag in een vrijblijvend informatief gesprek. 
              Een betalingsplan is ook een mogelijkheid. 
              Sinds ik nog volop in de voltooing van mijn certificatie zit, liggen mijn prijzen momenteel lager. Grijp dus nu jouw kans!<br/>
              Heb je graag meer informatie? Schrijf mij dan zeker een bericht via{" "}
              <a
                href="https://www.facebook.com/PathToBodyAndHealth/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              , het <Link to="/en/contact">contactformulier</Link> of via{" "}
              <a
                href="mailto:info@ankevanmullem.be"
                target="_blank"
                rel="noreferrer"
              >
                info@ankevanmullem.be
              </a>
              .
            </p>
          </div>
          <div>
            <StaticImage
              src="../../images/SLR02.jpg"
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
          Ben je toch nog niet helemaal zeker of dit iets voor jou is 
          en heb je graag nog wat vrijblijvende informatie? 
          Stel mij al jouw vragen en/of bedenkingen via het{" "}
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
