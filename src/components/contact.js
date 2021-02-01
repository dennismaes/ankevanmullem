import React from "react"
import styled from 'styled-components'

import { Section } from "./intro"

const Form = ({ children }) => {
    // TODO Formium
    return (
        <form id="contactform" post="#">
            { children}
        </form>
    )
}

const StyledForm = styled(Form)`
   width: 100%;
`

const Input = styled.input`
    height: 50px;
    padding: 0 20px;
    font-size: 13px;
    line-height: 50px;
    color: ${props => props.theme.color.black};
    background: ${props => props.theme.color.primaryLight};
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
`

const Label = styled.label`
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
`

const Button = styled.button`
    padding        : 14px 30px 11px;
    margin-bottom  : 0;
    font-size      : 14px;
    font-weight    : 500;
    border-radius  : 5px;
    border         : 0;
`

const ContactForm = () => {

    return (
        <Section>
            <h2>Contact</h2>
            <p>Laat hier je bericht achter</p>
            <StyledForm>
                <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                        type="text"
                        name="name"
                        autocomplete="name"
                    />
                </div>

                <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input type="email" name="email" autocomplete="email"/>
                </div>
                <br/>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </StyledForm>
        </Section>

    )
}

export default ContactForm