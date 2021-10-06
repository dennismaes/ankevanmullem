import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section, Sticky } from "../components/intro"
import { Timeline, TimlineEntry } from "../components/timeline"
import { ButtonHome, ButtonLinkedin } from "../components/button"

const Aboutme = () => {
  return (
    <Layout leftHiddenMobile>
      <Sticky>
        <ButtonHome />
        <ButtonLinkedin />
      </Sticky>
      <Section bgGrey id="aboutme">
        <h2>Over Anke</h2>
        <p>Ik ben geboren en getogen in Oost-Vlaanderen. Na enkele jaren in West-Vlaanderen te hebben gestudeerd, meer exact Oostende en Brugge, 
          ben ik enkele jaren naar Denemarken getrokken om onder andere een master in Kopenhagen te studeren. Na dit 6-jaren avontuur ben ik op dit moment weer terug te vinden in Oost-Vlaanderen.</p>
        <p>In het dagelijkse leven werk ik sinds maart 2021 rond welzijn op het werk als veiligheidsconsultant, ook wel gekend als preventieadviseur. 
          Hiernaast kan je mij vinden als (hoofd)animator op voornamelijk buitenlandse jeugdkampen. En naast dit alles, kan ik ook jouw persoonlijke gezondheidscoach en bodyworker zijn. Als gezondheidscoach ben ik erkend bij de Vlaamse Vereniging GezondheidsCoaches (VVGC) onder het erkenningsnummer 19-01-02-004.</p>
        <p>Als persoon ben ik te vinden voor openheid, dit zowel in communicatie alsook energetisch. In mijn familie gaat het gezegde “Anke heeft een Willeke”, dus je kan mij ook omschrijven als een tikkeltje eigenzinnig. 
          Wat je kan verwachten van mij: ik ben een sociaal iemand en recht door zee. Ik zal steeds oprecht en eerlijk zijn naar jou en jouw proces, en dit op een respectvolle manier. 
          Ook ben ik een gevoelsmatig persoon en kan hierdoor vaak door de woorden kijken naar de betekenis die er achterligt. Verder hou ik ervan om mensen te coachen en dus te inspireren, zeker als dit via een doelgerichte aanpak kan gebeuren.</p>
      </Section>
      <Section id="timeline">
        <h2>Mijn professioneel traject</h2>
        <Timeline>
          <TimlineEntry>
            <dt><h3>Summer School in <i>Health Promotion</i> in Polen</h3><b>Juni 2016</b></dt>
            <dd>
              Hier stond het onderwerp gezondheidsbevordering in verschillende levensfasen centraal: van de vroege kinderjaren tot gezond ouder worden.
                  </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Opleiding tot <i>Healthie</i> (gezondheidspromotor)</h3><b>Oktober 2016</b></dt>
            <dd>Healthies trekken naar scholen in hun eigen regio om er vormingen rond seksualiteit te geven. Afhankelijk van de regio is er de mogelijkheid om nog andere vormingspakketten te geven.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Project <i>Say NO</i> in Spanje</h3><b>Mei 2017</b></dt>
            <dd>Een internationale training rond gender gerelateerd geweld in samenwerking met 14 landen. Het leerdoel was om de kennis over gender gerelateerd geweld te vergroten, de competenties in het werken met jongeren te verbeteren, 
              het bewustzijn van niet-formeel onderwijs in gender gerelateerd geweld bevorderen, en het uitwisselen van goede praktijken tussen jeugdwerkers.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Bachelor Toegepaste Gezondheidswetenschappen</h3><b>Juni 2017</b></dt>
            <dd>Deze bachelor geeft mij het specialisatie attest van preventieadviseur niveau II. 
              Daarnaast richt deze opleiding zich op gezondheidsbevordering en preventie. Een gezondheidscoach begeleidt individuele mensen of groepen naar een gezondere levensstijl. Of ontwikkelt, implementeert en evalueert programma's voor gezondheidsbevordering binnen organisaties of bedrijven. <a href="https://www.howest.be/nl/opleidingen/bachelor/toegepaste-gezondheidswetenschappen?gclid=CjwKCAiAsaOBBhA4EiwAo0_AnM_Suv5L7wuqVxli8puEYOeh4jNJQp0vipjwToL_Ux_OE_KK222-QRoCZbEQAvD_BwE" target="_blank">Meer info</a>.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Erkenning bij VVGC</h3><b>Juli 2019</b></dt>
            <dd>Binnen de Vlaamse Verening GezondheidsCoaches (VVGC) ben ik erkend als professionele gezondheidscoach onder het erkenningsnummer 19-01-02-004. 
              Om binnen VVGC erkend te worden moet je aan verschillende voorwaarden voldoen: een holistische kijk hebben op de mens en zijn gezondheid, preventie hoog in het vaandel dragen, en coaching aanbieden binnen de 4 pijlers; Voeding, Beweging, Slaap en ontspanning, en als laatste Sociale relaties. </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3><i>Sexual Healing & De-armouring retreat</i> via The Gaia Method</h3><b>Oktober 2020</b></dt>
            <dd>Dit retraite heeft mij uitgerust met theorie, kennis en hands-on oefeningen om onderdrukte emotionele en energetische trauma's, spanningen, blokkades en pijn uit het vrouwelijke en mannelijke lichaam los te laten. Dit op een gezonde, liefdevolle en veilige manier. 
              <a href="https://www.the-gaia-method.com/sexual-healing-dearmouring" target="_blank"> Meer info.</a></dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Master of Arts in Cognition and Communication</h3><b>Oktober 2020</b></dt>
            <dd>Deze opleiding beantwoord de vraag: Hoe kunnen we cognitieve processen begrijpen die verband houden met de mediaconsumptie in de moderne samenleving? 
              De focus ligt op de psychologische en sociale processen die van invloed zijn op communicatie in audiovisuele media en face-to-face. Verder bestudeert het de interacties die plaatsvinden tussen mensen of tussen mensen en technologie. <a href="https://studies.ku.dk/masters/cognition-and-communication/profile-and-career/" target="_blank">Meer info</a>.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Partner met Emma.health</h3><b>Maart 2021</b></dt>
            <dd>Via de Emma.health academy heb ik een uitgebreid opleidingsprogramma gekregen rond hun DNA-resultaten en hoe ik deze gericht kan inzetten in mijn coachingsessies.
              Dankzij dit partnerschap kan ik ook een korting aanbieden op hun analyses. Een aanrader indien je graag de sterktes en mogelijke noden van jouw lichaam en groei wil ontdekken. <a href="https://ankevanmullem.be/emma-health/" target="_blank">Meer info</a>.</dd>
          </TimlineEntry>
          <TimlineEntry>
          <dt><h3>Algmene zelfontwikkeling via Compass to Connection</h3><b>Zomer 2021</b></dt>
          <dd><p>Niet alleen de zomer van 2021 stond in het teken van zelfontwikkeling, het gehele jaar staat hier in teken van. Sinds februari ben ik gestart met een individueel traject bij Compass to Connection.
          Als coach en bodyworker is het voor mij belangrijk om zelf in beweging te blijven en te blijven groeien door bijvoorbeeld met eigen trauma en pijnstukken te werken. Ik ben van het geloof dat enkel wanneer ik hierzelf doorga, ik andere mensen kan helpen in hun proces.</p>
          <p>Ook heb ik deelgenomen aan een <i>Cocao Temple Ceremony</i>. Dit stond gelijk aan een tantrisch tempelritueel dat ons opent voor de speelse aard van liefde en eros. Speciefiek stond het in het teken van het openen van de zintuigen en genieten van onze sensuele natuur erin, een viering van onze sensuele geneugten.</p>
          <p>Verder ben ik ook deel geweest van een <i>Naakte Vrouwenencirkel</i>. Het doel hiervan was een gemengde groep van vrouwen bij elkaar te brengen om tot een diepgaande uitwisseling te komen omtrent ons vrouwenleven en zo een gezamelijk groeiproces mee te maken.
          Kernwoorden hiervoor waren: zelf liefde en acceptatie, zelfzekerheid en empowerment (her)ondekken, heling brengen aan onze persoonlijke en collectieve pijn rond de relatie die we hebben met ons lichaam,...</p>
          <p>Dit alles draagt bij tot mijn professionele ervaring.</p>
          </dd>
          </TimlineEntry>
          <TimlineEntry>
          <dt><h3><i>Zen-Sual retreat</i> via Compass to Connection en House of Healing</h3><b>Augustus 2021</b></dt>
          <dd>Zen, expressie, sensualiteit, integriteit, stilte, beweging, nabijheid, grenzen stellen en verlangen uiten stond centraal op  dit retraite. Mijn intentie die week was om lichamelijke en/of emotionele bagage los te laten om zo dieper te connecteren met mezelf, het universum en met anderen.
          Verschillende oefeningen en coaching kwamen aanbod zoals het Wheel of Consent, emotioneel lichaamswerk, actieve meditatie en verschillende andere therapeutische werkvormen.          </dd>
          </TimlineEntry>
        </Timeline>
      </Section>

    </Layout>
  )
}

export default Aboutme
