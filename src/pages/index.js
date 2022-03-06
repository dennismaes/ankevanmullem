import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import { Sticky, Section, Wrapper } from "../components/intro"
import { ButtonDNA, ButtonAboutme, ButtonContact, ButtonPraktisch, ButtonFacebook } from "../components/button"

const Index = () => {
  return (
    <Layout>
      <Section id="top">
        <h2>Welkom bij Path to Body and Health</h2>
        <p>In het dagelijkse leven werk ik rond welzijn op het werk als veiligheidsconsulent, beter bekend als preventieadviseur. Maar op deze site vind je alles over mijn werk als zelfstandige in bijberoep: uw persoonlijke gezondheidscoach en bodyworker.</p>
      </Section>
      <Sticky>
        <ButtonContact />
        <ButtonAboutme />
        <ButtonPraktisch />
        <ButtonFacebook />
      </Sticky>
      <Section bgGrey id="gezondheidscoach">
        <h2>Gezondheidscoaching</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Gezondheid: wat is het? </h3>
            <p>Gezondheid is een ruim begrip: het omvat zowel lichamelijk, geestelijk en maatschappelijk welzijn. Naast een gebalanceerde voeding en voldoende beweging dragen een tal van factoren bij aan jouw algemene gezondheid: 
              jouw work-life balance, een natuurlijk slaappatroon, seksuele gezondheid, vervullende sociale contacten, en zoveel meer.</p>
          </div>
          <div>
            <h3>Laagdrempelig</h3>
            <p>De sleutel tot duurzame gedragsveranderingen zijn laagdrempelige aanpassingen.
            Deze aanpassingen kan je makkelijk toepassen in je dagelijks leven. In plaats van je hele levensstijl om te gooien, neem ik samen met jou kleine stappen die uiteindelijk een groot verschil maken.
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
      <Section id="lichaamswerk">
        <h2>Lichaamswerk</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Lichaamswerk: wat is het? </h3>
            <p>“Bodywork” is in de alternatieve geneeskunde elke therapeutische of persoonlijke ontwikkelingstechniek waarbij met het menselijk lichaam wordt gewerkt in een vorm van manipulatieve therapie, ademhaling of energie. 
              Het soort lichaamswerk dat ik gebruik is een proces dat helpt om blokkades, patronen, trauma’s en overtuigingen die je loskoppelen van jezelf los te laten. Met andere woorden, staat bodywork voor mij voor connecteren met jezelf (op een dieper level). </p>
          </div>
          <div>
            <h3>Energie</h3>
            <p>Energie zijn trillingen en frequenties, die we kunnen sturen en of beïnvloeden. Werken met lichaamsenergie gaat de geblokkeerde energie in het lichaam activeren, waardoor het onbewuste geheugen van het lichaam zich kan openen. Dit wil zeggen dat het lichaam onvrijwillig kan gaan reageren en bewegen als gevolg van het activeren van het celgeheugen. 
              Ook kan je emoties en herinneringen ervaren die naar bovenkomen. Het doel van energetisch werk kan samengevat worden tot het loslaten of juist het omarmen van deze lichamelijke reacties.</p>
          </div>
          <div>
            <h3>De-armouring</h3>
            <p>Dit is een manier om blokkades, vastzittende energie, emoties en spanning uit het lichaam te halen – ook wel armour  genoemd (in het Nederlands “pantser”). Het is een spanning en/of pijn die het lichaam vasthoudt wanneer iets is ervaren dat het zenuwstelsel activeerde op een manier dat niet werd verwerkt. 
              Eén van de methodes die ik toepas is “soft-touch” de-armouring (vertaald “ontwapening”). De bedoeling is liefdevolle aandacht te brengen naar gebieden van spanning, gevoelloosheid en verbroken verbinding met onszelf en/of ons lichaam. 
              Belangrijk is dat we het pantser van het lichaam niet met geweld gaan doorbreken, eerder nodigen we het lichaam uit zich te openen. Dit kan ook seksuele de-armouring inhouden; dit is zeer effectief voor mensen met seksueel trauma, stoornissen of gebrek aan gevoeligheid. </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC0151.jpg"
              width={600}
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
  )
}

export default Index


export const cardImage = graphql`fragment cardImage on File {
  childImageSharp {
    gatsbyImageData(width: 640, height: 480, layout: CONSTRAINED)
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