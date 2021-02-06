import React from "react"
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    padding: 40px 50px;
    background: white;
    width: 100%;
    text-align: center; 
    color: ${props => props.theme.color.mediumGrey};
`

const Footer = () => (
    <StyledFooter>
        <p>
        Design &amp; development by <a href="https://www.linkedin.com/in/dennis-maes/" rel="_blank">Dennis Maes</a>
        &nbsp; &copy; {new Date().getFullYear().toString()}{" "}
        </p>

    </StyledFooter>
)

export default Footer