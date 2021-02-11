import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { Sticky, Section, Wrapper } from "../components/intro"
import { ButtonLinkedin, ButtonAboutme, ButtonContact } from "../components/button"
import Card from "../components/card"
import ContactForm from "../components/contact"

const Index = ({ data }) => {
  return (
    <Layout>
      <Section id="top">
        <h2>Welkom op <Link to="/">ankevanmullem.be</Link></h2>
        <p>In het dagelijkse leven werk ik rond welzijn op het werk als veiligheidsconsultant, beter bekend als preventieadviseur. Maar op deze site vind je alles over mijn werk als zelfstandige in bijberoep: uw persoonlijke gezondheidscoach.</p>
      </Section>
      <Sticky>
        <ButtonAboutme />
        <ButtonContact />
      </Sticky>
      <Section bgGrey id="gezondheidscoach">
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

      <Section id="portfolio">
        <h2>Portfolio</h2>
        <Wrapper cols={2}>
          <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image1} />
          <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image2} />
          <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image3} />
          <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image4} />
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default Index


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