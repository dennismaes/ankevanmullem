import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const ProfileImg = styled(BackgroundImage)`
    padding        : 0;
    margin         : 0;
    height         : 100vh;
    vertical-align : middle;
    position       : relative;
    &::before, &::after{
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
`

const Content = styled.div`
    position : absolute;
    bottom   : 0;
    left     : 0;
    right    : 0;
    width    : 100%;
    margin   : 0 auto;
    padding  : 10%;
    @media (max-width : 600px) {
        z-index: 2;
    }

    h1 {
        font-size   : 2.25rem;
        color       : white;
        line-height : 1;
        margin      : 0 0 5px;
        font-weight : 700;
    }

    p {
        font-size   : 1.1rem;
        color       : white;
        margin      : 0;  
        font-weight : 300;
    }
`

const ProfileSection = ({ children }) => {
  const { bgImage } = useStaticQuery(
    graphql`
        query {
          bgImage: file(relativePath: { eq: "anke.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 960) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
  )

  // Set ImageData.
  const imageStack = [
    bgImage.childImageSharp.fluid,
    `linear-gradient(
            25deg,
            rgba(50, 150, 50, 0.7) 10%,
            rgba(100, 150, 50, 0.5) 30%,
            transparent 60%,
            transparent 100%
        )`
  ].reverse()

  return (
    <ProfileImg
      Tag="header"
      fluid={imageStack}
      style={{
        // Make defaults are overwrite-able 
        backgroundSize: '',
        backgroundPosition: '',
        backgroundRepeat: '',
      }}
    >
      <Content>
        <h1>Hey, ik ben Anke Van Mullem!</h1>
        <p>Health Consultant</p>
        <p>Preventieadviseur</p>
      </Content>
    </ProfileImg>
  )
}


export default ProfileSection