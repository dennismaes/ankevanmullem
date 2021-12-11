import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image";

const ProfileContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    padding: 0;
    margin: 0;

    picture:after{
      content:'';
      position:absolute;
      left:0; top:0;
      width:100%; height:100%;
      background:linear-gradient(
        25deg,
        ${props => props.theme.color.primary+'b2'} 12%,
        ${props => props.theme.color.primary+'80'} 24%,
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
        text-align: center;
    }
    
    @media (max-width : ${props => props.theme.size.s}) {
      padding-bottom:20%
    }
`

const ProfileSection = () => (
    <ProfileContainer>
      <StaticImage
        src="../images/anke.jpg"
        quality={100}
        alt="Anke Van Mullem"
        placeholder="blurred"
        loading="eager"
        transformOptions={{fit: "cover", cropFocus: "attention"}}
        style ={{width: "100%", height: "100%"}}
      />
      <Content>
        <h1>Hey, mijn naam is<br/>Anke Van Mullem!</h1>
        <p>Gezondheidscoach &#8211; Bodyworker</p>
      </Content>
    </ProfileContainer>
)


export default ProfileSection
