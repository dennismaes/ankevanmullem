import React from "react"
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { SiLinkedin, SiWhatsapp, SiGmail } from 'react-icons/si'
import { BsFillCaretLeftFill, BsFillPersonLinesFill, BsChatDotsFill } from 'react-icons/bs'
import { BiDna, BiDirections } from 'react-icons/bi'

const mixin = css`
    display: inline-block;
    padding: 3px 20px 3px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2em;
    border: 2px solid transparent;
    border-radius: 0px;
    color: ${props => props.theme.color.primary};
    background: ${props => props.theme.color.lightGrey};
    margin: 0;
    vertical-align: center;
    white-space: nowrap;
    &:hover {
        background: ${props => props.theme.color.primaryLight};
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 3px 10px 0 rgb(0 0 0 / 19%);
        text-decoration: none;
    }
`


export const Button = styled.a`
    ${mixin}
`

export const ButtonLink = styled(Link)`
    ${mixin} 
`

export const ButtonButton = styled.button`
    ${mixin} 
`

const si = css`
    color: ${props => props.theme.color.primary};
    position: relative;
    top: 5px;
    left: -8px;
    font-size: 20px;
`

const LinkedIn = styled(SiLinkedin)`
  ${si}
`
export const ButtonLinkedin = () => (
    <Button href="https://linkedin.com/in/ankevanmullem96/" target="_blank">
        <LinkedIn />LinkedIn
    </Button>
)

const Whatsapp = styled(SiWhatsapp)`
  ${si}
`
export const ButtonWhatsapp = () => (
    <Button href="https://api.whatsapp.com/send?phone=32485941511&text=Dag%20Anke" target="_blank">
        <Whatsapp />Stuur een bericht op Whatsapp
    </Button>
)

const Mail = styled(SiGmail)`
  ${si}
`
export const ButtonMail = () => (
    <Button href="mailto:info@ankevanmullem.be?body=Dag%20Anke%0D%0A%0D%0A" target="_blank">
        <Mail />Stuur mij een mail
    </Button>
)

const Aboutme = styled(BsFillPersonLinesFill)`
  ${si}
`
export const ButtonAboutme = () => (
    <ButtonLink to="/aboutme">
        <Aboutme />Wat meer over mij
    </ButtonLink>
)


const Back = styled(BsFillCaretLeftFill)`
  ${si}
`
export const ButtonHome = () => (
    <ButtonLink to="/"><
        Back />Home
    </ButtonLink>
)

const Contact = styled(BsChatDotsFill)`
  ${si}
`
export const ButtonContact = () => (
    <ButtonLink to="/contact">
        <Contact />Neem contact op
    </ButtonLink>
)

const DNA = styled(BiDna)`
  ${si}
`
export const ButtonDNA = () => (
    <ButtonLink to="/emma-health">
        <DNA />Emma.health
    </ButtonLink>
)

const Praktisch = styled(BiDirections)`
  ${si}
`
export const ButtonPraktisch = () => (
    <ButtonLink to="/praktisch">
        <Praktisch />Praktische info
    </ButtonLink>
)