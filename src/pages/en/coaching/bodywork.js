import React from "react";
import { Link } from "gatsby";
import Layout from "../../../components/layout";
import { Section, Sticky, Wrapper } from "../../../components/intro";
import {
  Button,
  ButtonLink,
  Back,
  Contact,
  Dropdown,
  DropdownContent
} from "../../../components/button";
import { Table } from "../../../components/table";
import { StaticImage } from "gatsby-plugin-image";

const Bodywork = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Bodywork</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/en">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/en/coaching/health">Health Coaching</ButtonLink>
            <ButtonLink to="/en/coaching/sexloverelation">
              Sex, Love, and Relationship Coaching
            </ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
        <h2>Bodywork</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Bodywork: what is it?</h3>
            <p>
              “Bodywork” in alternative medicine is any therapeutic or personal
              development technique that involves working with the human body in
              a form of manipulative therapy, breathing, or energy. The kind of
              bodywork I use is a process that helps to release blockages,
              patters, traumas and beliefs that disconnect from yourself. In
              other words, bodywork for me is about connecting with yourself (on
              a deeper level).
            </p>
          </div>
          <div>
            <h3>Energy</h3>
            <p>
              Energy are vibrations and frequencies, which we can control and/or
              influence. Working with body energy is going to activate the
              blocked energy in the body, through which the unconscious memory
              of the body can open up. This means that the body can start
              reacting a moving involuntarily as a result of activating the
              cellular memory. You may also experience emotions and memories
              coming to the surface. The aim of energetic work can be summarised
              as letting go of embracing these physical reactions.
            </p>
          </div>
          <div>
            <h3>De-armouring</h3>
            <p>
              This is a way of releasing blockages, trapped energy, emotions and
              tension from the body – also called armour. It is a tension and/or
              pain that the body holds when something has been experienced that
              activated the nervous system in a way that was not processed. One
              of the methods I use is soft-touch de-armouring. The intention is
              to bring loving attention to areas of tension, numbness and
              disconnection with ourselves and/or our bodies. It is important
              that we do not break through the armour of the body with violence,
              but rather invite the body to open itself. This can also include
              sexual de-armouring; this is very effective for people with sexual
              trauma, disorders or lack of sensitivity.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC0151.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="lazy"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
        </Wrapper>
      </Section>

      <Section id="pricing">
        <h2>Practical info</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Where and how?</h3>
            <p>
              It is only possible to receive live coaching in{" "}
              <i>Sint-Niklaas, Belgium</i>. This can also be done at home on
              request. It is important to provide a quiet space where we can
              hold our session undisturbed. An extra cost will be charged for
              this, namely 5 euros plus a kilometer allowance of € 0.42/km
              (revised on Jul/'22).
            </p>
          </div>
          <div>
            <h3>When?</h3>
            <p>
              Always by appointment. In general there is the possibility to
              weekdays in the evening; on Fridays this is also possible
              throughout the day. On request sessions are available in the
              weekend.
            </p>
          </div>
          <div>
            <h3>Cost?</h3>
            <p>
              A session lasts about 90 minutes. For a course of 6 sessions
              sessions you pay only 666 euros at the moment. Exceptionally one
              test session can be arranged after making an appointment. For
              private individuals, all prices include VAT.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC0110.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
        </Wrapper>

        <p>
          Are you conviced? Make an appointment via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>
        </p>
        <p>
          Not quite sure yet and would you like more non-binding information?
          Ask me all your questions and/or share your reservations via the{" "}
          <Link to="/en/contact">contact form</Link> or via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>
          . On request we can also schedule an online meeting to get a better
          feel for each other and see how I can help you. Then I can tell you
          more specifically about the possibilities and make a proposal on how
          we can work together.
        </p>
      </Section>
    </Layout>
  );
};

export default Bodywork;
