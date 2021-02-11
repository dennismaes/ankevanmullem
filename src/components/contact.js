import React, { useState } from "react"
import axios from "axios"
import styled from 'styled-components'

import { ButtonButton } from './button'

const StyledForm = styled.form`
   width: 100%;
   margin: 45px auto;
   p {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme.color.black};
        padding: 5px;
        margin-left: 20px;
        display: inline-block;
   }
`

const Form  = ({ children }) => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/f/xaylkoep",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
      return (
        <StyledForm autoComplete="on" onSubmit={handleOnSubmit} >
            {children}
            <ButtonButton type="submit" >Versturen</ButtonButton>
            {serverState.status && (serverState.status.ok
                ? <p>Bedankt voor uw bericht! Ik neem spoedig met u contact op. </p>
                : <p>Er ging iets mis. Controleer uw e-mailadres en probeer opnieuw.</p>
            )}
        </StyledForm>
    )
}

const FormGroup = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 15px;
    width: 100%;
    
    textarea {resize: vertical;}

    input, textarea {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 3px solid ${props => props.theme.color.lightGrey};
        outline: 0;
        font-size: 1.1rem;
        color: ${props => props.theme.color.black};
        padding: 8px 0 0px;
        background: transparent;
        transition: border-color 0.2s;
      
        &::placeholder {
            color: ${props => props.theme.color.mediumGrey};
            font-size: 1rem;
            cursor: text;
            top: 20px;
            font-weight: 400;
            text-transform: none;
        }
      
        &:placeholder-shown ~ label {
            color:transparent;
        }

        &:required,&:invalid { 
            box-shadow:none; 
        }
      }
      
      label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 0.9rem;
        font-weight: 700;
        color: ${props => props.theme.color.mediumGrey};
        text-transform: uppercase;
      }

      input:focus, textarea:focus {
        ~ label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            color: ${props => props.theme.color.mediumGrey};
        }
        &::placeholder {
            color: transparent;
        }
        border-width: 3px;
        border-image: linear-gradient(to right, ${props => props.theme.color.primary},${props => props.theme.color.white});
        border-image-slice: 1;
      }

      input:invalid:not(:placeholder-shown):not(:focus) {
        border-image: linear-gradient(to right, red, ${props => props.theme.color.white});
        border-image-slice: 1;
      }
`

const Button = styled.button`
    margin-top: 20px;
    padding: 14px 30px 11px;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0px;
    border: 0;
    outline: 0;
    color: ${props => props.theme.color.primary};
    background: ${props => props.theme.color.lightGrey};
    
    &:hover {
        background: ${props => props.theme.color.primaryLight};
        cursor: pointer;
    }
`

const ContactForm = () => {
    return (
        <Form>
            <FormGroup>
                <input
                    type="text"
                    name="name"
                    placeholder="Wie bent u?"
                    required
                />
                <label htmlFor="name">Uw naam</label>
            </FormGroup>
            <FormGroup>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Wat is uw e-mailadres?" 
                    required/>
                <label htmlFor="email">Your Email</label>
            </FormGroup>
            <FormGroup>
                <input 
                    type="tel"
                    name="phone"
                    placeholder="Wat is uw telefoonnummer? (optioneel)"
                />
                <label htmlFor="phone">Telefoonnummer (optioneel)</label>
            </FormGroup>
            <FormGroup>
                <textarea 
                    type="text"
                    name="message"
                    placeholder="Wat is uw vraag?" 
                    required
                />
                <label htmlFor="email">Uw vraag</label>
            </FormGroup>
        </Form>
    )
}

export default ContactForm