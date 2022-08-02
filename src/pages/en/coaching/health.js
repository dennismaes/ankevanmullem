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
import { StaticImage } from "gatsby-plugin-image";

const Health = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Health Coaching</h2>
      </Section>
      <Sticky>
        <ButtonLink to="/en">
          <Back />
          Home
        </ButtonLink>
        <Dropdown>
          <Button>Coachings</Button>
          <DropdownContent>
            <ButtonLink to="/en/coaching/sexloverelation">
              Sex, Love, and Relationship Coaching
            </ButtonLink>
            <ButtonLink to="/en/coaching/bodywork">Bodywork</ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>
      <Section bgGrey id="info">
        <h2>Health Coaching</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Health: what is it?</h3>
            <p>
              Health is a broad concept: it includes physical, mental and social
              well-being. Besides a balanced diet and sufficient exercise, many
              factors contribute to your general health: your work-life balance,
              a natural sleep pattern, sexual health, fulfilling social
              contacts, and so much more.
            </p>
          </div>
          <div>
            <h3>Accecible</h3>
            <p>
              The key to lasting behavioural change is low-threshold
              adjustments. These adjustments can easily be applied in your daily
              life. Instead of changing your entire lifestyle, I take small
              steps with you that ultimately make a big difference.
            </p>
          </div>
          <div>
            <h3>Sustainable coaching</h3>
            <p>
              Based on a holistic view of your health, I will work to coach you
              towards a healthier lifestyle. As a coach, I help you learn. This
              is not meant in the sense of teaching, but rather learning by
              inspiring and supporting. Because ultimately everyone can live
              healthier with the right support and knowledge!
            </p>
          </div>
          <div>
            <h3>Positive self-perception</h3>
            <p>
              During our sessions it is especially important that you gain an
              optimal self-insight, independent of what I as a coach or others
              around you think. With a listening ear and through observation, I
              tune each session to your wishes. Positive psychology is central
              here. The emphasis is therefore not on what you cannot do, but on
              what you can do and the possibilities that this brings.
            </p>
          </div>
        </Wrapper>
      </Section>
      <Section id="pricing">
        <h2>Practical info</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Where and how?</h3>
            <p>
              The most common is live coaching in <i>Sint-Niklaas, Belgium</i>.
              It is also possible to follow a coaching online via Zoom. For
              online coaching it is recommended to provide a quiet room where
              you can have the session undisturbed.
            </p>
          </div>
          <div>
            <StaticImage
              src="../../images/Gcoaching.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>{" "}
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
              A session generally lasts 60 minutes. For one session you pay 45
              euros. For 3 sessions you pay 130 euro <i>(save 5 euro)</i>; for 6
              sessions you pay only 250 euro <i>(save 20 euro)</i>. I also offer
              follow-up sessions of 30 minutes for 25 euros. For private
              individuals, all prices include VAT.
            </p>
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
          .
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

export default Health;
