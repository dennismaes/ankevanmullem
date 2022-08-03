import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 40px 50px;
  width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.mediumGrey};
  background: ${(props) => props.theme.color.lightGrey};
`;

const Footer = () => (
  <StyledFooter>
    Path to Body and Health &#8211;{" "}
    <a
      href="https://www.linkedin.com/in/ankevanmullem96/"
      rel="_blank"
      rel="noreferrer"
    >
      Anke Van Mullem
    </a>{" "}
    &#8211; Erkend gezondheidscoach{" "}
    <a href="https://www.vvgc.be/" rel="_blank" rel="noreferrer">
      VVGC
    </a>{" "}
    (19-01-02-004)
    <br></br>
    Neem <Link to="/contact">contact</Link> op (
    <a href="mailto:info@ankevanmullem.be" rel="_blank" rel="noreferrer">
      info@ankevanmullem.be
    </a>
    )<br></br>
    Design &amp; development by{" "}
    <a
      href="https://www.linkedin.com/in/dennis-maes/"
      rel="_blank"
      rel="noreferrer"
    >
      Dennis Maes
    </a>
    &nbsp; &copy; {new Date().getFullYear().toString()}{" "}
  </StyledFooter>
);

export default Footer;
