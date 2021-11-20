import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";

const CardInfo = styled.div`
    position: absolute;
    bottom: 0;
    padding: 30px 15px 5px;
    width: 100%;
    background: -webkit-linear-gradient( top,transparent 0%,rgba(0,0,0,0.5) 100% );
    z-index: 1; //fix
    h3 {
        font-size: 1.2rem;
        line-height: 1;
        margin: 0;
        color: white;
    }
    small {
        color: white;
    }
`

const CardContainer = styled(Link)`
    display: block;
    position: relative;
    &:hover ${CardInfo} {
        background:
            -webkit-linear-gradient(
            top,
            transparent 0%,
            ${props => props.theme.color.primary+'BB'} 100%
        );
    }
`



const Card = ({ to, title, subtitle, imgdata }) => (
    <CardContainer to={to}>
        <CardInfo>
            <h3>{title}</h3>
            <small>{subtitle}</small>
        </CardInfo>
        <GatsbyImage image={imgdata.childImageSharp.gatsbyImageData} />
    </CardContainer>
)

export default Card