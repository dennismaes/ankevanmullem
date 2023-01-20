import React from "react";
import Layout from "../components/layout";
import { Section, Sticky } from "../components/intro";
import Helmet from "react-helmet";
import { ButtonLink, Back } from "../components/button";


const Shop = ({ location }) => {
  return (
    <Layout locale="en" noTranslate location={location} leftHiddenMobile>
      <Helmet>
        <link href="https://cdn.reflowhq.com/v2/toolkit.min.css" rel="stylesheet"></link>
        <script src="https://cdn.reflowhq.com/v2/toolkit.min.js" data-reflow-store="2049342236"></script>
      </Helmet>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Home
        </ButtonLink>
        {/* <ButtonLink to="/cart">
          Shopping cart
        </ButtonLink> */}
      </Sticky>
    
      <Section id="cart">
        <div data-reflow-type="shopping-cart"></div>
      </Section>

      <Section id="shop">
        <div data-reflow-type="product" data-reflow-product="584342990"></div> 
        <div data-reflow-type="product" data-reflow-product="1718209490"></div>
      </Section>
    
      <Section id="empty">
        <p>Is deze pagina leeg? Ververs ze dan dan even, of duw op F5. Het beste is om deze pagina via een computer te bekijken.<br/>
        Is this page empty? Then refresh it, or press F5. It is best to view this page from a computer.</p>
      </Section>
      
    </Layout>
  );
};

export default Shop;
