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
        <p>Bodywork is currently only offered as an extension and addition to my other coaching sessions.
        Would you like to have more information? Ask me all your questions via the{" "}
          <Link to="/en/contact">contact form</Link> or via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>.
        </p>
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
              Intimacy Coaching
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
              a form of manipulative therapy, breathing, or energy. 
              I have several types of bodywork that I like to use, 
              namely a process that helps release blockages, patterns, traumas and beliefs that disconnect you from yourself, 
              and a technique that allows you to really land in your body. 
              In other words, bodywork for me is about connecting with yourself (on a deeper level).
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
            <h3>Working with a Sarong</h3>
            <p>This is a technique where we will work with the body using a Sarong. 
              The goal is to land in our body. To use Juli Pohan's words, 
              "Working with a Sarong is a gentle, nourishing and soothing technique." 
              From stretching the body to shaking, "bio-hacking" the nervous system 
              and bringing the body to life, but also, above all, surrender and relaxation. 
              For me, it represents getting out of your head, and really land in your body. 
              One of the techniques that can be used in this is inspired by the Closing the Bones ritual; 
              enormously healing for closing a chapter, for example, emotionally and/or energetically.
            </p>
          </div>

        </Wrapper>
      </Section>

      <Section id="pricing">
        <h2>Practical info</h2>
        <Wrapper cols={2}>
          <div>
          <p>
          Bodywork is currently only offered as an extension and addition to my other coaching sessions.
          Would you like to have more information? Ask me all your questions and/or share your reservations via the{" "}
          <Link to="/en/contact">contact form</Link> or via{" "}
          <a
            href="mailto:info@ankevanmullem.be"
            target="_blank"
            rel="noreferrer"
          >
            info@ankevanmullem.be
          </a>
          .<br/> 
          On request we can also schedule an online meeting to get a better
          feel for each other and see how I can help you. Then I can tell you
          more specifically about the possibilities and make a proposal on how
          we can work together.
        </p>
          </div>
          <div>
            <StaticImage
              src="../../../images/_DSC0151.jpg"
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
    </Layout>
  );
};

export default Bodywork;
