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

const SexLoveRelationEN = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Sex, Love, and Relationship Coaching</h2>
        <p>
          Under{" "}
          <a href="https://laylamartin.com/" rel="_blank" rel="noreferrer">
            Layla Martin
          </a>{" "}
          I am currently pursuing my Sex, Love, and Relationship Coach
          certification. She is the founder of the VITA™ Method, which stands
          for: “The Vital and Integrated Tantric Approach.” This training excist
          of 650 hours... And in her own words it's the most advanced and
          in-depth coaching certification available for sex, love, and
          relationships in the world.
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
            <ButtonLink to="/en/coaching/bodywork">Bodywork</ButtonLink>
          </DropdownContent>
        </Dropdown>
      </Sticky>

      <Section bgGrey id="info">
        <h2>Sex, Love, and Relationship Coaching</h2>

        <Wrapper cols={2}>
          <div>
            <h3>Do you long for...?</h3>
            <p>
              Do you long for a legendary love life that is empowering? Sex you
              thought was never possible, read 'mind blowing'? A lasting
              relationship where passion and romance are central? Do you yearn
              for general self-development where you take your sexuality into
              your own hands? Or do you desire more happiness, passion,
              connection and intimacy in your life and relationships? Then you
              have come to the right place.
            </p>
          </div>
          <div>
            <StaticImage
              src="../../images/SLR01.jpg"
              width={600}
              quality={60}
              alt="Anke Van Mullem"
              placeholder="blurred"
              loading="eager"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
            />
          </div>
          <div>
            <h3>Effective tools</h3>
            <p>
              Thanks to the VITA™ Method, I am able to guide you with effective
              tools that lead to a deep transformation. Through these specific
              techniques, I support you in transforming your body, mind and
              emotions to release trauma, limiting beliefs and sexual blockages.
              Think of childhood wounds, broken hearts, certain fears,
              unconscious patterns, and so on. Through this method, we can
              restore or update sexual health, erotic desires, self-love,
              passionate relationships, and so much more.
            </p>
          </div>
          <div>
            <h3>Exciting subjects</h3>
            <p>
              In total, there are 10 sessions that form a whole. Mapping your
              specific desire. Transforming limiting belief systems and
              unconscious objections. Liberating the family dynamic by
              understanding the family legacy and ancestral issues. Embracing
              the inner child by looking into how it affects your patterns.
              Getting what you desire by creating real worthiness and
              deservingness. Finding emotional empowerment by rewiring your
              relationship to emotions. Healthy and fabulous relationships by
              understanding projections. And so much more!
            </p>
          </div>
        </Wrapper>
        <h2>
          Are you ready for a liberating sex and love life, and/or lasting
          relationships that bring growth? Don't wait and{" "}
          <Link to="/en/contact">contact me</Link> with all your questions and
          desires!
        </h2>
      </Section>

      <Section id="pricing">
        <h2>Practical info</h2>
        <Wrapper cols={2}>
          <div>
            <h3>Where, when, and how?</h3>
            <p>Coming soon!</p>
            <p>
              Would you like me to contact you personally when there is more
              information? Please write me message via{" "}
              <a
                href="https://www.facebook.com/PathToBodyAndHealth/"
                rel="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              , the <Link to="/en/contact">contact form</Link> or via{" "}
              <a
                href="mailto:info@ankevanmullem.be"
                target="_blank"
                rel="noreferrer"
              >
                info@ankevanmullem.be
              </a>
              .
            </p>
          </div>
          <div>
            <StaticImage
              src="../../../images/SLR02.jpg"
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

export default SexLoveRelationEN;
