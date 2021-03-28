import React from "react"

import Layout from "../components/layout"
import { Sticky, Section } from "../components/intro"
import { ButtonHome, ButtonContact } from "../components/button"
import LoadableShopifyEmma from "../components/emma-loadable"


const EmmaHealth = () => {
    return (
        <Layout>
            <Sticky>
                <ButtonHome />
                <ButtonContact />
            </Sticky>
            <Section>
                <LoadableShopifyEmma/>
            </Section>
        </Layout>
    )
}

export default EmmaHealth