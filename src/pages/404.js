import * as React from "react"

import Layout from "../components/layout";
import { Sticky, Section } from "../components/intro";
import { ButtonLink, Back } from "../components/button";

const NotFoundPage = ({ location }) => {
  return (
    <Layout locale="en" noTranslate location={location}>
      <Section id="top">
        <h2>Page not found</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/">
          <Back />
          Bring me back home
        </ButtonLink>
      </Sticky>
    </Layout>
  );
};

export default NotFoundPage
