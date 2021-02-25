import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section, Sticky } from "../components/intro"
import { Timeline, TimlineEntry } from "../components/timeline"
import { ButtonHome, ButtonLinkedin } from "../components/button"

const Aboutme = () => {
  return (
    <Layout>
      <Section id="intro">
        <p>In het dagelijkse leven werk ik rond welzijn op het werk als veiligheidsconsultant, beter bekend als preventieadviseur. Maar op deze site vind je alles over mijn werk als zelfstandige in bijberoep: uw persoonlijke gezondheidscoach.</p>
      </Section>
      <Sticky>
        <ButtonHome />
        <ButtonLinkedin />
      </Sticky>
      <Section id="intro">
        <h2>Over Anke</h2>
        <p>Ik ben geboren en getogen in Oost-Vlaanderen. Na enkele jaren in West-Vlaanderen te hebben gestudeerd, meer exact Oostende en Brugge, 
          ben ik enkele jaren naar Denemarken getrokken om onder andere een master in Kopenhagen te studeren. Na dit 6-jaren avontuur ben ik op dit moment weer terug te vinden in Oost-Vlaanderen.</p>
        <p>In het dagelijkse leven werk ik sinds maart 2021 rond welzijn op het werk als veiligheidsconsultant, ook wel gekend als preventieadviseur. 
          Hiernaast kan je mij vinden als (hoofd)animator op voornamelijk buitenlandse jeugdkampen. En naast dit alles, kan ik ook jouw persoonlijke gezondheidscoach zijn.</p>
        <p>Als persoon ben ik te vinden voor openheid, dit zowel in communicatie alsook energetisch. In mijn familie gaat het gezegde “Anke heeft een Willeke”, dus je kan mij ook omschrijven als een tikkeltje eigenzinnig. 
          Wat je kan verwachten van mij: ik ben sociaal iemand en recht door zee. Ik zal steeds oprecht en eerlijk zijn naar jou en jouw proces en dit op een respectvolle manier. 
          Ook ben ik een gevoelsmatig persoon en kan hierdoor vaak door de woorden kijken naar de betekenis die er achterligt. Verder hou ik ervan om mensen te coachen en dus te inspireren, zeker als dit via een doelgerichte aanpak kan gebeuren.</p>
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
            <dt><h3>Opleiding tot Healthie (gezondheidspromotor)</h3><b>Oktober 2016</b></dt>
            <dd>Healthies trekken naar scholen in hun eigen regio om er vormingen rond seksualiteit te geven. Afhankelijk van de regio is er de mogelijkheid om nog andere vormingspakketten te geven.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Project <i>Say NO</i> in Spanje</h3><b>Mei 2017</b></dt>
            <dd>Een internationale training rond gender gerelateerd geweld in samenwerking met 14 landen. Het leerdoel was om de kennis over gender gerelateerd geweld te vergroten, de competenties in het werken met jongeren te verbeteren, het bewustzijn van niet-formeel onderwijs in gender gerelateerd geweld bevorderen, en het uitwisselen van goede praktijken tussen jeugdwerkers.
                  </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Bachelor Toegepaste Gezondheidswetenschappen</h3><b>Juni 2017</b></dt>
            <dd>Deze bachelor geeft mij het specialisatie attest van preventieadviseur niveau II. 
              Daarnaast richt deze opleiding zich op gezondheidsbevordering en preventie. Een gezondheidscoach begeleidt individuele mensen of groepen naar een gezondere levensstijl. Of ontwikkelt, implementeert en evalueert programma's voor gezondheidsbevordering binnen organisaties of bedrijven. <a href="https://www.howest.be/nl/opleidingen/bachelor/toegepaste-gezondheidswetenschappen?gclid=CjwKCAiAsaOBBhA4EiwAo0_AnM_Suv5L7wuqVxli8puEYOeh4jNJQp0vipjwToL_Ux_OE_KK222-QRoCZbEQAvD_BwE" target="_blank">Meer info.</a></dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Sexual Healing & De-armouring retreat via The Gaia Method</h3><b>Oktober 2020</b></dt>
            <dd>Zowel les als praktische training in lichaamswerk. <a href="https://www.the-gaia-method.com/sexual-healing-dearmouring" target="_blank">Meer info.</a></dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Master of Arts in Cognition and Communication</h3><b>Oktober 2020</b></dt>
            <dd>Deze opleiding beantwoord de vraag: Hoe kunnen we cognitieve processen begrijpen die verband houden met de mediaconsumptie in de moderne samenleving? 
              De focus ligt op de psychologische en sociale processen die van invloed zijn op communicatie in audiovisuele media en face-to-face. Verder bestudeert het de interacties die plaatsvinden tussen mensen of tussen mensen en technologie. <a href="https://studies.ku.dk/masters/cognition-and-communication/profile-and-career/" target="_blank">Meer info.</a></dd>
          </TimlineEntry>
        </Timeline>
      </Section>

    </Layout>
  )
}

export default Aboutme