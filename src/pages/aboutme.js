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
      <Section id="timeline">
        <h2>Mijn professioneel traject</h2>
        <Timeline>
          <TimlineEntry>
            <dt>Summer School in Health Promotion - Polen - Juni 2016</dt>
            <dd>
              Hier stond het onderwerp gezondheidsbevordering in verschillende levensfasen centraal: van de vroege kinderjaren tot gezond ouder worden.
                  </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt>Summer School in Health Promotion - Polen - Oktober 2015</dt>
            <dd>Healthies trekken naar scholen in hun eigen regio om er vormingen rond seksualiteit te geven. Afhankelijk van de regio is er de mogelijkheid om nog andere vormingspakketten te geven.</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt>Project <i>Say NO</i> in Spanje </dt>
            <dd>Een internationale training rond gender gerelateerd geweld in samenwerking met 14 landen. Het leerdoel was om de kennis over gender gerelateerd geweld te vergroten, de competenties in het werken met jongeren te verbeteren, het bewustzijn van niet-formeel onderwijs in gender gerelateerd geweld bevorderen, en het uitwisselen van goede praktijken tussen jeugdwerkers.
                  </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt>Bachelor Toegepaste Gezondheidswetenschappen - Juni 2017</dt>
            <dd>
              Beetje uitleg over de Noordzeeparel Oostende en Brugge + link naar opleiding?
              Dit heeft mij ook de beschermde titel Gezondheidscoach en preventieadviseur niveau II gegeven.
                  </dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt>Sexual Healing & De-armouring retreat via The Gaia Method - Oktober 2020</dt>
            <dd>Zowel les als praktische training in lichaamswerk. Ook een link?</dd>
          </TimlineEntry>
          <TimlineEntry>
            <dt><h3>Master of Arts in Cognition and Communication</h3><b>2017-2020</b></dt>
            <dd>Beetje info over denemarken? Link naar de website? </dd>
          </TimlineEntry>
        </Timeline>
      </Section>

    </Layout>
  )
}

export default Aboutme