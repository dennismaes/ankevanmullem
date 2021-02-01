import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProfileContainer = styled.header`
    position: relative;
    padding: 0;
    margin: 0;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
`

const ProfileImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &::before, &::after{
    
    content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
    background:linear-gradient(
      25deg,
      rgba(50, 150, 50, 0.7) 12%,
      rgba(100, 150, 50, 0.5) 24%,
      transparent 60%,
      transparent 100%
    )
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

  return (
    <ProfileContainer>
      <ProfileImg
        imgStyle={{ objectPosition: "top center" }}
        objectPosition="top center"
        loading="eager"
        fadeIn="false"
        fluid={bgImage.childImageSharp.fluid}
      />
      <Content>
        <h1>Hey, ik ben Anke Van Mullem!</h1>
        <p>Health Consultant</p>
        <p>Preventieadviseur</p>
      </Content>
    </ProfileContainer>
  )
}


export default ProfileSection