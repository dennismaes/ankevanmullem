import React from "react"
import Layout from "../components/layout"
import { Section, Sticky, Wrapper } from "../components/intro";
import { Timeline, TimelineEntry } from "../components/timeline";
import { ButtonLink, Back, Contact } from "../components/button";
import { StaticImage } from "gatsby-plugin-image";

const Aboutme = ({location}) => {
  return (
    <Layout locale="nl" location={location} leftHiddenMobile>
      <Section>
      <h2>Over Anke</h2>
      </Section>
    
      <Sticky>
        <ButtonLink to="/"><Back />Home</ButtonLink>
        <ButtonLink to="/contact"><Contact />Neem contact op</ButtonLink>
      </Sticky>
      <Section bgGrey id="aboutme">
        <Wrapper cols={2}>
          <div>
            <p>
              Ik ben geboren en getogen in Oost-Vlaanderen. Na drie jaar in
              West-Vlaanderen te hebben gestudeerd, meer exact Oostende en
              Brugge, ben ik drie jaar naar Denemarken getrokken om onder
              andere mijn master in Cognitie en communicatie te studeren in Kopenhagen. 
              Na dit, in totaal, 6-jaren avontuur ben ik op dit moment weer terug te vinden in
              Oost-Vlaanderen.
            </p>
            <p>
              In het dagelijkse leven werk ik sinds maart 2021 rond welzijn op
              het werk als preventieadviseur. 
              Hiernaast kan je mij vinden als (hoofd)animator
              op voornamelijk buitenlandse jeugdkampen of op de klimmuur of massief.<br/>
              Naast dit alles, kan ik ook jouw persoonlijke coach zijn! Als
              gezondheidscoach ben ik erkend bij de Vlaamse Vereniging
              GezondheidsCoaches (VVGC) onder het erkenningsnummer 19-01-02-004. 
              Momenteel ben ik nog volop bezig met het behalen van mijn certificatie tot Seks, Liefde, en Relatiecoach onder{" "}
          <a href="https://laylamartin.com/" target="_blank" rel="noreferrer">
            Layla Martin
          </a>.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC9846_kopie.jpg"
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
          Als persoon ben ik te vinden voor openheid, dit zowel in communicatie
          alsook energetisch. In mijn familie gaat het gezegde “Anke heeft een
          Willeke”, dus je kan mij ook omschrijven als een tikkeltje
          eigenzinnig. Wat je kan verwachten van mij: ik ben een sociaal iemand
          en recht door zee. Ik zal steeds oprecht en eerlijk zijn naar jou en
          jouw proces, en dit op een respectvolle manier. Ook ben ik een
          gevoelsmatig persoon en kan hierdoor vaak door de woorden kijken naar
          de betekenis die er achterligt. Verder hou ik ervan om mensen te
          coachen en dus te inspireren, zeker als dit via een doelgerichte
          aanpak kan gebeuren.
        </p>
      </Section>
      <Section id="timeline">
        <h2>Mijn professioneel traject</h2>
        <p>(Klik op de gebeurtenis voor meer informatie.)</p>
        <Timeline>
          <TimelineEntry title="Sex Love and Relationship Coach (student)" date="Heden">
            <p>Dit is een 1-jarig programma (650 uur) aan Layla Martin's VITA™ Institute.</p>
            <p>De kernwaarden van VITA™ Coaching zijn gebaseerd op het geloof dat seksualiteit heilig, mooi, krachtig en natuurlijk is; 
              pure liefde is de primaire kracht die ons in stand houdt, en betekenisvolle relaties zijn noodzakelijk voor een vreugdevol leven.
              De VITA™ Methode is een transformatieproces om seksualiteit te helen en wakker te maken. 
              Gesteund door moderne wetenschap en bekrachtigd door oude wijsheid, gebruiken we holistische hulpmiddelen zoals ademwerk, plezierbeoefening, 
              traumaheling, meditatie, energiewerk, klanken en beweging die zelfs de diepste problemen kunnen oplossen.</p>
              <p>De VITA™-methode neemt de meest effectieve leringen van de moderne neurobiologie, holistische genezing en moderne coaching, 
              en mengt deze met oude wijsheid en leringen. VITA™ staat voor: "De Vitale en Geïntegreerde Tantrische Benadering."</p>
          </TimelineEntry>
          <TimelineEntry title="Doekenwerk via Juli Pohan" date="September 2022">
            <p>Om Juli haar woorden te gebruiken: "Werken met een doek is een zachte, voedende en kalmerende techniek."
              Van het licahaam strekken tot schudden, 'bio-hacken' van het zenuswstelsel en het tot leven brengen van het lijf, maar ook vooral overgave en ontspanning. 
              Voor mij staat het echt voor in je lichaam komen en uit het hoofd. Een zeer interessante training! 
              Kan niet wachten om dit ook in mijn bodywork te gaan gebruiken.
            </p>
          </TimelineEntry>
          <TimelineEntry title="Webinar Nooit meer naar de dokter" date="November 2021">
            Dr. Servaas Bingé behandelde tips & tricks voor onze gezondheid; wat zijn fabeltjes en wat maakt je écht sterker? 
            In dit webinar vertaalde Servaas de laatste wetenschappelijke inzichten naar praktisch advies waarmee ik aan de slag kan. 
            Deze online bijeenkomst heeft meer inzicht gegeven in hoe de weerstand kan versterkt worden aan de hand van voeding, stressreductie, slaap en beweging.
          </TimelineEntry>
          <TimelineEntry title="Dagworkshop Hormoonyoga" date="Oktober 2021">
            Binnen deze dagworkshop ben ik een set houdingen aangeleerd die Dinah Rodrigues ontwikkeld heeft onder de naam hormoonyoga. 
            Het stimuleert de hormoonklieren waardoor de hormoonbalans in je lichaam wordt hersteld en je hormoonproductie op peil wordt gehouden. 
            Verder heb ik informatie gekregen over de essentiële rol van hormonen, hoe ze samenwerken, hoe voeding kan bijdragen tot een gezonde hormoonhuishouding, enzoverder.
          </TimelineEntry>
          <TimelineEntry title="Zen-Sual retreat via Compass to Connection en House of Healing" date="Augustus 2021">
          Zen, expressie, sensualiteit, integriteit, stilte, beweging, nabijheid, grenzen stellen en verlangen uiten stond centraal op  dit retraite. Mijn intentie die week was om lichamelijke en/of emotionele bagage los te laten om zo dieper te connecteren met mezelf, het universum en met anderen.
          Verschillende oefeningen en coaching kwamen aanbod zoals het Wheel of Consent, emotioneel lichaamswerk, actieve meditatie en verschillende andere therapeutische werkvormen.
          </TimelineEntry>
          <TimelineEntry title="Algemene zelfontwikkeling via Compass to Connection" date="2021">
          <p>Het jaar 2021 stond en staat in het teken van zelfontwikkeling voor mij. Van februari tot oktober ben ik gestart met een individueel traject bij Compass to Connection.
          Als coach en bodyworker is het voor mij belangrijk om zelf in beweging te blijven en te blijven groeien door bijvoorbeeld met eigen trauma en pijnstukken te werken. 
          Ik ben van het geloof dat enkel wanneer ik hierzelf doorga, ik andere mensen kan helpen in hun proces.</p>
          <p>Ook heb ik deelgenomen aan een Cocao Temple Ceremony en ben ik een deel geweest van een Naakte Vrouwenencirkel. 
          Beide stonden in het teken van het openen van de zintuigen. De eerste in het teken van sensule geneugten, en de laatste in het teken van zelfliefde en acceptatie.</p>
          <p>Dit alles draagt bij tot mijn professionele ervaring.</p>
          </TimelineEntry>
          <TimelineEntry title="Partner met Emma.health (nu Leadlife)" date="Maart 2021">
            <p>Via de Emma.health academy heb ik een uitgebreid opleidingsprogramma gekregen rond hun DNA-resultaten en hoe ik deze gericht kan inzetten in mijn coachingsessies.
            Een DNA-analyse is een aanrader indien je graag de sterktes en mogelijke noden van jouw lichaam en groei wil ontdekken.</p>
            <p>Update mrt/'22: Ondertussen bestaat Emma.health niet langer en ben ik niet langer een partner. Graag verwijs ik jullie door naar de huidige website van <a href="https://www.leadlife.com/" target="_blank" rel="noreferrer">Leadlife</a>. </p>
          </TimelineEntry>
          <TimelineEntry title="Master of Arts in Cognition and Communication" date="Oktober 2020">
            Deze opleiding beantwoord de vraag: Hoe kunnen we cognitieve processen begrijpen die verband houden met de mediaconsumptie in de moderne samenleving? 
            De focus ligt op de psychologische en sociale processen die van invloed zijn op communicatie in audiovisuele media en face-to-face. Verder bestudeert het de interacties die plaatsvinden tussen mensen of tussen mensen en technologie.<br/>
            <a href="https://studies.ku.dk/masters/cognition-and-communication/profile-and-career/" target="_blank" rel="noreferrer">Meer info</a>.
          </TimelineEntry>
          <TimelineEntry title="Sexual Healing & De-armouring retreat via The Gaia Method" date="Oktober 2020">
            Dit retraite heeft mij uitgerust met theorie, kennis en hands-on oefeningen om onderdrukte emotionele en energetische trauma's, spanningen, blokkades en pijn uit het vrouwelijke en mannelijke lichaam los te laten. Dit op een gezonde, liefdevolle en veilige manier.<br/>
            <a href="https://www.the-gaia-method.com/sexual-healing-dearmouring" target="_blank" rel="noreferrer"> Meer info.</a>
          </TimelineEntry>
          <TimelineEntry title="Erkenning bij VVGC" date="Juli 2019">
            Binnen de Vlaamse Verening GezondheidsCoaches (VVGC) ben ik erkend als professionele gezondheidscoach onder het erkenningsnummer 19-01-02-004. 
            Om binnen VVGC erkend te worden moet je aan verschillende voorwaarden voldoen: een holistische kijk hebben op de mens en zijn gezondheid, preventie hoog in het vaandel dragen, en coaching aanbieden binnen de 4 pijlers; Voeding, Beweging, Slaap en ontspanning, en als laatste Sociale relaties. 
          </TimelineEntry>
          <TimelineEntry title="Bachelor Toegepaste Gezondheidswetenschappen" date="Juni 2017">
            Deze bachelor geeft mij het specialisatie attest van preventieadviseur niveau II.<br/>
            Daarnaast richt deze opleiding zich op gezondheidsbevordering en preventie. Een gezondheidscoach begeleidt individuele mensen of groepen naar een gezondere levensstijl. Of ontwikkelt, implementeert en evalueert programma's voor gezondheidsbevordering binnen organisaties of bedrijven.
            <a href="https://www.howest.be/nl/opleidingen/bachelor/toegepaste-gezondheidswetenschappen?gclid=CjwKCAiAsaOBBhA4EiwAo0_AnM_Suv5L7wuqVxli8puEYOeh4jNJQp0vipjwToL_Ux_OE_KK222-QRoCZbEQAvD_BwE" target="_blank" rel="noreferrer">Meer info</a>.
          </TimelineEntry>
          <TimelineEntry title="Project Say NO in Spanje" date="Mei 2017">
            Een internationale training rond gender gerelateerd geweld in samenwerking met 14 landen. Het leerdoel was om de kennis over gender gerelateerd geweld te vergroten, de competenties in het werken met jongeren te verbeteren, het bewustzijn van niet-formeel onderwijs in gender gerelateerd geweld bevorderen, en het uitwisselen van goede praktijken tussen jeugdwerkers.
          </TimelineEntry>
          <TimelineEntry title="GezondheidsTeamChallende" date="Voorjaar 2017">
            <p>Maakt deel uit van één van mijn Bachelor stages. Tijdens deze stage heb ik een project uitgewerkt op maat. Dit liep van midden april tot midden juli 2017.</p>
            <p>Aan de hand van een bevraging was er een laagdrempelig project ontwikkeld waarbij gezondheid en teamspirit centraal staan. 
              Het was de bedoeling samen met de collega’s iedere week de ‘challenge of the week’ te voltooien. 
              Stil staan bij dagelijkse gewoonten en deze eventueel aanpassen naar een gezonder alternatief was de opzet. 
              Het ging om laagdrempelige opdrachtjes die doorheen de dag konden worden uitgevoerd. 
              Het doel: sedentair gedrag en lichamelijke klachten tegen gaan.</p>
          </TimelineEntry>
          <TimelineEntry title="Opleiding tot Healthie (gezondheidspromotor)" date="Oktober 2016">
            Healthies trekken naar scholen in hun eigen regio om er vormingen rond seksualiteit te geven. Afhankelijk van de regio is er de mogelijkheid om nog andere vormingspakketten te geven.
          </TimelineEntry>
          <TimelineEntry title="Summer School in Health Promotion in Polen" date="Juni 2016">
            Hier stond het onderwerp gezondheidsbevordering in verschillende levensfasen centraal: van de vroege kinderjaren tot gezond ouder worden.
          </TimelineEntry>
        </Timeline>
      </Section>
    </Layout>
  )
}

export default Aboutme
