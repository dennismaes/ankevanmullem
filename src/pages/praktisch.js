import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section, Sticky } from "../components/intro"
import { Timeline, TimlineEntry } from "../components/timeline"
import { ButtonHome, ButtonLinkedin } from "../components/button"


const Praktisch = () => {
    return (
    <Layout>
      <Sticky>
        <ButtonHome />
      </Sticky>
      <Section bgGrey id="gezondheidscoach">
        <h2>Waar en wanneer?</h2>
        <Wrapper cols={2}>
        <div>
            <h3>Live coaching</h3>
            <p>Mogelijk tot live coaching te Sint-Niklaas <i>Kettermuitstraat 23, 9100 Sint-Niklaas</i></p>
        </div>
        <div>
            <h3>Coaching aan huis</h3>
            <p>Bij coaching aan huis is het aangeraden om een rustige ruimte te voorzien waar wij ongestoord onze sessie kunnen houden, 
                of een rustige wandelroute in de buurt waarbij we buiten een sessie kunnen uitvoeren.</p>
                <i>Voor coaching aan huis buiten Sint-Niklaas wordt het tarief gerekend plus 5 euro en een kilometervergoeding van € 0,35/km (herzien op april 2021).</i>
        </div>
        <div>
            <h3>Online coaching</h3>
            <p>Het is ook mogelijk een coaching online te volgen. In tijden van Covid-19 heeft dit de voorkeur om iedereen zijn gezondheid te waarborgen. 
                Bij online coaching is het aangeraden om ook een rustige ruimte te voorzien waar jij ongestoord de sessie kan houden.</p>
        </div>
        <div>
            <h3>Wanneer?</h3>
            <p>Er is mogelijkheid om coaching te ontvangen in de weekdagen zowel in de namiddag alsook in de avond. 
              Verder is het ook mogelijk op afspraak in het weekend.</p>
        </div>
        </Wrapper>
      </Section>

      <Section id="aboutme">
        <h2>Kostprijs?</h2>
        <p>Tabel met prijzen</p>
        <p>Ben je overtuigd? Maak dan een afspraak via info@ankevanmullem.be</p>
        <p>
        Toch nog niet helemaal zeker en heb je graag nog wat vrijblijvende informatie? 
        Stel mij al jouw vragen en/of bedenkingen via het <a href="https://ankevanmullem.be/contact/#contact" target="_blank">contactformulier</a> of via info@ankevanmullem.be. 
        Op aanvraag kunnen wij ook een onlinegesprek inplannen om elkaar wat beter aan te voelen en te kijken hoe ik jou kan helpen. 
        Dan kan ik je gerichter vertellen over de mogelijkheden en een voorstel doen over hoe we kunnen samenwerken. 
        </p>
      </Section>
    </Layout>
    )
}

export default Praktisch