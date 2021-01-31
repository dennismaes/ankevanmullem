import React from "react"
import Layout from "../components/layout"
import { Section, Wrapper } from "../components/intro"
import Card from "../components/card"
import ContactForm from "../components/contact"

const Index2 = ({ data }) => {
    return (
        <Layout>
            <Section>
                <h2>Wat meer info over mij.</h2>
                <Wrapper>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus. Mauris in quam ac libero tincidunt bibendum rutrum non leo. Morbi tincidunt tortor ut urna pretium, sit amet lacinia nisi semper. Suspendisse gravida nulla id rhoncus dapibus. Donec pulvinar enim nec nisl rhoncus vulputate. Aliquam dignissim condimentum justo ut ultrices. Pellentesque quis mauris tincidunt, malesuada libero a, fermentum arcu.</p>
                </Wrapper>
            </Section>
            <Section bgGrey>
                <h2>Ervaring</h2>
                <Wrapper cols={2}>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus..</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                </Wrapper>
            </Section>
            <Section>
                <h2>Portfolio</h2>
                <Wrapper cols={2}>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image1}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image2}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image3}/>
                    <Card to="/page" title="Titel" subtitle="ondertitle" imgdata={data.image4}/>
                </Wrapper>
            </Section>
            <Section bgGrey>
                <h2>Oplijsting</h2>
                <Wrapper cols={1}>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus..</p>
                </div>
                <div>
                    <h3>Wat meer info over mij.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna maximus, rutrum urna in, accumsan metus.</p>
                </div>
                </Wrapper>
            </Section>
            <ContactForm></ContactForm>
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