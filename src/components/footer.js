import React from "react"
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    padding: 40px 50px;
    width: 100%;
    flex-shrink: 0;
    text-align: center; 
    font-size: 0.9rem;
    color: ${props => props.theme.color.mediumGrey};
    background: ${props => props.theme.color.lightGrey};
`

const Footer = () => (
    <StyledFooter>
        
        Design &amp; development by <a href="https://www.linkedin.com/in/dennis-maes/" rel="_blank">Dennis Maes</a>
        &nbsp; &copy; {new Date().getFullYear().toString()}{" "}
        

    </StyledFooter>
)

export default Footer