import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Sticky, Section } from "../components/intro"
import { ButtonHome, ButtonContact } from "../components/button"
import LoadableShopifyEmma from "../components/emma-loadable"


const EmmaHealth = () => {
    return (
        <Layout leftHiddenMobile>
            <Sticky>
                <ButtonHome />
                <ButtonContact />
            </Sticky>
            <Section bgGrey id="aboutme">
                <h2>Every plant has their own requirements in order to grow... And so do people</h2>
                <p>Als je de beste versie van jezelf wilt worden, moet je eerst je DNA kennen voordat je je levensstijl te goed kan veranderen. 
                    Ben jij geïnteresseerd om meer inzicht te krijgen in de blauwdruk van je lichaam? </p>
                <p>Via een innovatief partnerschap met Emma.health kan ik jou een DNA-analyse aanbieden met 2% korting. 
                    Het blijft een investering, maar je krijgt er wel heel wat voor terug: 5 DNA-rapporten, een intake van jouw huidige levensstijl, een gesprek met een arts, alsook met een healthcoach.
                    Sterker nog, boek je deze DNA-analyse in combinatie met enkele gerichte coachingsessies op maat bij mij, dan kan ik jou nog van een extra korting voorzien. 
                    Bekijk zeker even de tarieven via <Link to="/praktisch">deze link</Link>. Indien je interesse hebt in een combinatie (DNA-analyse + coaching) stuur mij zeker even een bericht zodat ik jou kan verzekeren van deze korting.</p>
                <p>Emma.health geeft geen diagnoses maar dient als een kompas om een optimale gezondheid te bekomen, specifiek op jouw lichaam geschreven. 
                    Het geeft jou meer specifiek inzicht om een leuker, langer en gezonder leven te leiden.
                    Meer weten? Neem een kijkje op hun website: <a href="https://emma.health/" target="_blank" rel="noreferrer">Emma.health</a>, 
                    of neem (vrijblijvend) contact met mij op voor extra informatie en/of om mijn ervaring te horen.</p>
            </Section>
            <Section>
                <LoadableShopifyEmma/>
            </Section>
        </Layout>
    )
}

export default EmmaHealth