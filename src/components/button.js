import React from "react"
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { SiLinkedin, SiWhatsapp, SiGmail, SiFacebook } from 'react-icons/si'
import { BsFillBagFill, BsFillCaretLeftFill, BsFillPersonLinesFill, BsChatDotsFill, BsTranslate } from 'react-icons/bs'
import { BiDna, BiDirections } from 'react-icons/bi'

const mixin = css`
    display: inline-block;
    padding: 3px 16px 3px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2em;
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
export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    z-index: 1;
    ${Button}, ${ButtonLink} {
        margin-top: 4px;
    }
`

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    
    &:hover ${DropdownContent} {
        display: block;
    }
    &:hover ${Button} {
        background: ${props => props.theme.color.primaryLight};
    }
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
    <Button href="https://linkedin.com/in/ankevanmullem96/" target="_blank" rel="noreferrer">
        <LinkedIn />LinkedIn
    </Button>
)

const Whatsapp = styled(SiWhatsapp)`
  ${si}
`
export const ButtonWhatsapp = () => (
    <Button href="https://api.whatsapp.com/send?phone=32485941511" target="_blank" rel="noreferrer">
        <Whatsapp />Whatsapp
    </Button>
)

export const Mail = styled(SiGmail)`
  ${si}
`
export const ButtonMail = () => (
    <Button href="mailto:info@ankevanmullem.be?body=Dag%20Anke%0D%0A%0D%0A" target="_blank" rel="noreferrer">
        <Mail />info@ankevanmullem.be
    </Button>
)

export const Aboutme = styled(BsFillPersonLinesFill)`
  ${si}
`

export const Bag = styled(BsFillBagFill)`
  ${si}
`

export const Back = styled(BsFillCaretLeftFill)`
  ${si}
`

export const Contact = styled(BsChatDotsFill)`
  ${si}
`

export const Praktisch = styled(BiDirections)`
  ${si}
`

const Facebook = styled(SiFacebook)`
  ${si}
`
export const ButtonFacebook = () => (
    <Button href="https://www.facebook.com/PathToBodyAndHealth/" target="_blank" rel="noreferrer">
        <Facebook />Facebook
    </Button>
)

const Translate = styled(BsTranslate)`
  ${si}
`

const ButtonLinkFloat = styled(ButtonLink)`
    display: float;
    position: relative;
    float:right;
    top: 20px;
    right: 20px;
    z-index: 10;
`

export const ButtonLang = ({to, children}) => (
    <ButtonLinkFloat to={to}>
        <Translate />{children}
    </ButtonLinkFloat>
)
