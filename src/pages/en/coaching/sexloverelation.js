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

const SexLoveRelationEN = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Section id="top">
        <h2>Sex, Love, and Relationship Coaching</h2>
        <p>
          Under{" "}
          <a href="https://laylamartin.com/" target="_blank" rel="noreferrer">
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
            <h3>What do you long for?</h3>
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
              In total, there are 10 sessions that form a whole. The first sessions always 
              consists of mapping your specific desire. After that we can use different techniques like: 
              Transforming limiting belief systems and unconscious objections. Liberating the family dynamic by
              understanding the family legacy and ancestral issues.
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

      <Section id="programs">
        <h2>Choose Your Own Intimacy Program</h2>
        <p>
        As people are different, styles of coaching should be different as well. 
        That is the why I have created two distinctive coaching designs. 
        Since I have reached quite some interest in my sessions and the techniques 
        I use, I now want to challenge you by following a specific structure named 
        “Unstoppalicious”. Read more underneath on how the two programs are 
        different and which could fit you best.
        </p>
        <Wrapper cols={2}>
          <div>
            <h3>Program One: Sparklicious</h3>
            <p>
            This is the process I have used up till now. It takes you to the 
            core of your desire thanks to trusting your body and so your own 
            intuition. Your body already knows on a deeper level what you need 
            so you can heal from old wounding. Through different techniques from 
            the VITA™ Method and my own experience, I lead you through a program 
            where we can unfold the unconscious mind and get you closer to having 
            what you long for most.
            </p>
            <p>
            This process has more flexibility to take in situations that might 
            be throwing you off of your path right now. It gives more room to 
            work on both your desire and, what I call, acute challenges. There 
            is more time to ventilate and integrate all the different 
            transformations. And most of all, the program is defined by your own pace! 
            </p>
            <p>
            Great for people who have experience with energetic work, 
            and already trust in their inner wisdom. At the other hand, it is wonderful 
            for people who are completely new to inner work and need a bit more time 
            to get into their body and into the different techniques.
            </p>
          </div>
          <div>
            <h3>Program Two: Unstoppalicious</h3>
            <p>
            In this program I use ten different techniques from the VITA™ Method. 
            A deep and insightful process with different approaches to reach your 
            desire. Great for people who have a ‘clear’ goal within the themes of Sex, 
            Love, and/or Relationship, and for who is ready to grow. The ten different 
            approaches are: 
            </p>
            <p>
            Desires, Creating a Clear Goal<br/>
            Manifesting Your Desire<br/>
            Liberating The Family Dynamic<br/>
            Embracing The Inner Child<br/>
            Creating a Thriving Sexual Ecology<br/>
            Getting What You Desire<br/>
            Finding Emotional Empowerment<br/>
            The Power of Intentional Self-Pleasure<br/>
            Journey Into the Self<br/>
            Vibrant And Healthy Relationship
            </p>
            <p>
            This process is great for people who want to do it all. 
            It has less flexibility, but in return it has a clear program up 
            front so you know what to expect. 
            It guarantees you different techniques to get you to your goal, 
            and clear tasks in between sessions for the ones who want.
            </p>
          </div>
        </Wrapper>
      </Section>

      <Section bgGrey id="review">
      <h2>How have other people experienced their transformation?</h2>
          <h3>N.D.</h3>
            <p>
              Being coached by Anke was truly a pleasure. 
              She always so naturally created a safe container for me where I had 
              plenty of room to explore my feelings, my circumstances and myself, 
              allowing me to get to the core of my truth. 
              And yet there was always time to laugh and turn to lightness.
              What I am most grateful for is that she always accepted me for who I am, 
              which I find to be the most healing element in any coaching. 
              This enabled me to reintegrate parts of myself that I used to reject or overlook in myself.
              I feel my own power and the connection to my deepest self within me again.
            </p>
      </Section>

      <Section id="pricing">
        <h2>Practical info</h2>
        <Wrapper cols={2}>
        <div>
          <h3>Where and how?</h3>
            <p>
              A session generally lasts between 60 and 90 minutes. 
              These sessions are orginally designed to be followed online via Zoom in the comfort of your own home.
              Important with online coaching is that you provide a quiet room where you can have the session undisturbed.
              It is also possible to receive live coaching in <i>Sint-Niklaas, Belgium</i>.
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
              The price is adjusted to your financial possibilities and I am happy to discuss this with you in an informal meeting. 
              A payment plan is also available. 
              Since I am still in the process of completing my certification, my prices are currently lower. So grab your chance now!<br/>
              Would you like more information? Please write me a message via{" "}
              <a
                href="https://www.facebook.com/PathToBodyAndHealth/"
                target="_blank"
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
          Are you not quite sure yet and would you like more non-binding information?
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
