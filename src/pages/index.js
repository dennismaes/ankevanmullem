import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section, Wrapper } from "../components/intro"
import Card from "../components/card"
import ContactForm from "../components/contact"

import {Timeline, TimlineEntry} from "../components/timeline"

const Index2 = ({ data }) => {
    return (
        <Layout>
            <Section id="intro">
              <h2>Welkop op <a href="#">ankevanmullem.be</a></h2>
              <p>het dagelijkse leven werk ik rond welzijn op het werk als veiligheidsconsultant, beter bekend als preventieadviseur. Maar op deze site vind je alles over mijn werk als zelfstandige in bijberoep: uw persoonlijke gezondheidscoach.</p>
            </Section>
            <Section bgGrey id="gezondheidscoad">
                <h2>Gezondheidscoach</h2>
                <Wrapper cols={2}>
                <div>
                    <h3>Gezondheid: wat is het? </h3>
                    <p>Gezondheid is een ruim begrip: het omvat zowel lichamelijk,  geestelijk en maatschappelijk welzijn. Naast een gebalanceerde voeding en voldoende beweging dragen een tal van factoren bij aan uw algemene gezondheid: uw seksuele gezondheid, work-life balance, een natuurlijk slaappatroon, voldoene sociale contacten, en zoveel meer.</p>
                </div>
                <div>
                    <h3>Laagdrempelig</h3>
                    <p>De sleutel tot duurzame gedragsveranderingen zijn laagdrempelige aanpassingen.
                    Deze aanpassingen kunt u makkelijk toepassen in je dagelijks leven. In plaats van je hele levensstijl om te gooien, neem ik samen met u kleine stappen die uiteindelijk een groot verschil maken. 
                  </p>
                </div>
                <div>
                    <h3>Duurzame coaching</h3>
                    <p>Aan de hand van een holistische kijk op jouw gezondheid ga ik aan de slag om jou naar een gezondere levensstijl te coachen. Als coach help ik jou leren. Dit is niet bedoeld in de zin van onderwijzen, maar eerder leren door te inspireren en te ondersteunen. Want uiteindelijk kan iedereen gezonder leven met de juiste ondersteuning en kennis!</p>
                </div>
                <div>
                  <h3>Positief zelfinzicht</h3>
                  <p> Tijdens onze sessies is het vooral belangrijk dat jijzelf een optimaal zelfinzicht verkrijgt, losstaand van wat ik als coach of anderen in jouw omgeving ervan vinden. Met een luisterend oor en via observatie, stem ik iedere sessie af op jouw wensen. Positieve psychologie staat hier centraal. De nadruk ligt dus niet op wat je niet kan, maar op wat je wel kan en de mogelijkheden dat dit met zich meebrengt.</p>
                </div>
              </Wrapper>
            </Section>
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
            <Section id="portfolio">
                <h2>Portfolio</h2>
                <Wrapper cols={2}>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image1}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image2}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image3}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image4}/>
                </Wrapper>
            </Section>
            <Section id="contact">
              <h2>Contact</h2>
              <p>Wil je meer weten? Laat hier je bericht achter, en ik beantwoord uw vraag zo snel mogelijk.</p>
            <ContactForm/>
            </Section>
        </Layout>
    )
}

export default Index2


export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fluid(maxWidth: 640, maxHeight: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "denmark/architecture.jpg" }) {
      ...cardImage
    }

    image2: file(relativePath: { eq: "denmark/copenhagen.jpg" }) {
      ...cardImage
    }

    image3: file(relativePath: { eq: "denmark/expedition.jpg" }) {
      ...cardImage
    }
    
    image4: file(relativePath: { eq: "denmark/statue.jpg" }) {
      ...cardImage
    }
  }

`