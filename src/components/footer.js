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
        Web development by <a href="mailto:dennis.maes@hotmail.com">Dennis Maes</a>
        &nbsp; &copy; {new Date().getFullYear().toString()}{" "}
        </p>

    </StyledFooter>
)

export default Footer