import React from "react";
import Layout from "../../components/layout";
import { Section, Sticky, Wrapper } from "../../components/intro";
import { Timeline, TimelineEntry } from "../../components/timeline";
import { ButtonLink, Back, Contact } from "../../components/button";
import { StaticImage } from "gatsby-plugin-image";

const Aboutme = ({ location }) => {
  return (
    <Layout locale="en" location={location} leftHiddenMobile>
      <Sticky>
        <ButtonLink to="/en">
          <Back />
          Home
        </ButtonLink>
        <ButtonLink to="/en/contact">
          <Contact />
          Contact me
        </ButtonLink>
      </Sticky>
      <Section bgGrey id="aboutme">
        <h2>About Anke</h2>
        <Wrapper cols={2}>
          <div>
            <p>
              I was born and raised in East Flanders (known for the city of
              Ghent in Belgium). After having studied in West Flanders for a few
              years, more precisely in Ostend (a city on the Belgian coast) and
              Bruges, I went to Denmark for my studies - a master’s degree in
              Copenhagen in Cognition and Communication. After this 6-year
              adventure, I am currently back in East Flanders, Belgium.
            </p>
            <p>
              In daily life, since Marc 2021, I am working in the field of
              well-being at work as a safety consultant. Besides this, you can
              find me as a group leader on many foreign youth camps. And besides
              all this, I can also be your personal coach! As a health coach, I
              am recognized by the Flemish Association of Health Coaches (VVGC)
              under the accreditation number 19-01-02-004. Currently, I am still
              following my certification to become a Sex, Love, and Relationship
              Coach under{" "}
              <a href="https://laylamartin.com/" target="_blank" rel="noreferrer"> Layla Martin</a>.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/_DSC9846_kopie.jpg"
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
            As a person, I like openness, both in communication and energetically.
            In my family the saying goes “Anke has a will”, so you can also
            describe me as bit willful. What you can expect from me: I am a social
            person that has the right balance between outgoing and an introvert
            personality. I am mostly known for being straightforward. For me it is
            important to always be sincere and honest with you and your process,
            and this in a respectful way. I am an emotional, empathic person and
            can therefore often see through the words to the meaning behind them.
            Furthermore, I love to coach and thus inspire people, especially if
            this can be done through a goal-oriented approach. In all of my
            coaching sessions I like to start from a desire that you have and see
            if we can couple some specific tools to them, to really get what you
            long for most.
          </p>
      </Section>
      <Section id="timeline">
        <h2>My professional journey</h2>
        <Timeline>
          <TimelineEntry
            title="Sex, Love, and Relationship Coach (student)"
            date="Current"
          >
            <p>
            o	This is a 1-year program (650 hours) at Layla Martin’s VITA™
              Institute.
            </p>
            <p>
            The core values of VITA™ Coaching are based on the belief that sexuality is sacred, beautiful, powerful and natural; pure love is the primary force that sustains us, and meaningful relationships are necessary for a joyful life. 
            The VITA™ Method is a transformational process to heal and awaken sexuality. Supported by modern science and empowered by ancient wisdom, we use holistic tools such as breathwork, pleasure practices, trauma healing, meditation, energy work, sounds and movement that can solve even the deepest problems. 
            </p>
            <p>
            The VITA™ Method takes the most effective teachings of modern neurobiology, holistic healing and modern coaching, and blends it with ancient wisdom and teaching. VITA™ stands for “The Vital and Integrated Tantric Approach.”
            </p>
          </TimelineEntry>
          <TimelineEntry
            title="Webinar No More Goint to the Doctor"
            date="November 2021"
          >
            Dr. Servaas Bingé discussed tips & tricks for our health; what are myths and what really makes you stronger?
            In this webinar, Servaas translated the latest scientific insights into practical advise that I can put to work. 
            This online meeting provided more insight into how resistance can be strengthened through diet, stress reduction, sleep and exercise. 
          </TimelineEntry>
          <TimelineEntry title="Hormone Yoga (Day Workshop)" date="October 2021">
            In this one-day workshop, I learned a set of postures that Dinah Rodrigues has developed under the name of hormone yoga.
            It stimulates the hormone glands, restoring the hormone balance in your body and keeping your hormone production up.
            I also learned about the essential role of hormones, how they work together, how nutrition can contribute to a healthy hormone balance, and so on. 
          </TimelineEntry>
          <TimelineEntry
            title="Zen-Sual retreat via Compass to Connection en House of Healing"
            date="August 2021"
          >
            Zen, expression, sensuality, integrity, silence, movement,
            closeness, setting boundaries and expressing desire were central to this retreat.
            My intention that week was to let go of physical and/or emotional baggage in order to connect more deeply with myself, the universe and others.
            Various excercises and coachings were offered such as the Wheel of Consent, emotional bodywork, active meditation and various other therapeutic forms of work.
          </TimelineEntry>
          <TimelineEntry
            title="General Self Development via Compass to Connection"
            date="2021"
          >
            <p>
              The year 2021 was all about self-development for me. 
              From February till October, I started an individual trajectory at Compass to Connection. 
              As a coach and bodyworker, it is important for me to keep moving and growing myself, for example by working with my own trauma and pain pieces.
              I believe that only when I go through this, I will be able to help other people in their process to this level.
            </p>
            <p>
              I have also participated in a Cocao Temple Ceremony and have been a part of a Naked Woman Circle.
              Both were about opening the senses. The former on sensual pleasure, and the latter towards self-love and acceptance.
            </p>
            <p>All this contributes to my professional experience.</p>
          </TimelineEntry>
          <TimelineEntry
            title="Partner with Emma.health (now Leadlife)"
            date="March 2021"
          >
            <p>
              VThrough the Emma.health academy, I received an extensive training programme about their DNA results and how I can use them in a targeted way in my coaching sessions.
              A DNA-analyses is recommended if you like to discover the strenghts and possible needs of your body and its growth. 
            </p>
            <p>
              Update Mar/'22: Meanwhile Emma.health no longer exist and I am no longer a partner.
              I would like to refer you to the current website of{" "}
              <a
                href="https://www.leadlife.com/"
                target="_blank"
                rel="noreferrer"
              >
                Leadlife
              </a>
              .{" "}
            </p>
          </TimelineEntry>
          <TimelineEntry
            title="Master of Arts in Cognition and Communication"
            date="October 2020"
          >
            This course answers the question: How can we understand cognitive processes related to media consumption in modern society?
            The focus is on the psychological and social processes that influence communication in audiovisual media and face-to-face.
            Furthermore, it studies the interactions that take place between people or between people and technology.
            <br />
            <a
              href="https://studies.ku.dk/masters/cognition-and-communication/profile-and-career/"
              target="_blank"
              rel="noreferrer"
            >
              More info
            </a>
            .
          </TimelineEntry>
          <TimelineEntry
            title="Sexual Healing & De-armouring retreat via The Gaia Method"
            date="October 2020"
          >
            This retreat has equipped me with theory, knowledge and hands-on exercises to release suppressed emotional and energetic traumas, tensions, blockages and pain from the female and male body.
            This in a healthy, loving, and safe way.
            <br />
            <a
              href="https://www.the-gaia-method.com/sexual-healing-dearmouring"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              More info.
            </a>
          </TimelineEntry>
          <TimelineEntry title="Recognition by VVGC" date="July 2019">
            Within the Flemish Association of Health Coaches (VVGC), I am recognised as a professional health coach under the acknowledgement number 19-01-02-004.
            In order to be recognised within VVGC, you need to fulfil several conditions: have a holistic view of people and their health,
            attach great importance to prevention, and offer coaching within the 4 pillars: Nutrition, Exercise, Sleep and Relaxation, and finally Social Relationships.
          </TimelineEntry>
          <TimelineEntry
            title="Bachelor of Health Sciences"
            date="June 2017"
          >
            This bachelor's degree gives me the specialisation certificate of prevention advisor level II.
            In addition, this training focuses on halth promotion and prevention. A health coach guides individuals or groups towards a healthier lifestyle. Or develops, implements and evaluates health promotion programmes with organisations or companies.
            <a
              href="https://www.howest.be/nl/opleidingen/bachelor/toegepaste-gezondheidswetenschappen?gclid=CjwKCAiAsaOBBhA4EiwAo0_AnM_Suv5L7wuqVxli8puEYOeh4jNJQp0vipjwToL_Ux_OE_KK222-QRoCZbEQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              More info
            </a>
            .
          </TimelineEntry>
          <TimelineEntry title="Project Say NO in Spanje" date="May 2017">
            An international training course on gender-based violence in cooperation with 14 countries. 
            The learning objective was to increase knowledge on gender-based violence, improve competences in working with young people, promote awareness of non-formal education
            on gender-based violence, and exchange good practices among youth workers.
          </TimelineEntry>
          <TimelineEntry title="HealthTeamChallenges" date="Spring 2017">
            <p>
              This was a part of one of my Bachelor internships. During this internship, I worked on a custom project.
              This ran from mid April to mid July 2017.
            </p>
            <p>
              On the basis of a survey, an accessible project was developed in which health and team spirit are central.
              The idea was to complete the 'challenge of the week' together with colleagues every week.
              The idea was to stop and think about daily habits and possibly change them to a healthier alternative.
              These were low-threshold tasks that could be performed throughout the day.
              The aim: to combar sedentary behaviour and physical complaints.
            </p>
          </TimelineEntry>
          <TimelineEntry
            title="Training for Healthie (health promoter)"
            date="October 2016"
          >
            Healthies go to schools in their own region to give training on sexuality.
            Depending on the region, there is also the possibility of giving other training packages.
          </TimelineEntry>
          <TimelineEntry
            title="Summer School in Health Promotion in Polen"
            date="June 2016"
          >
            The focus here was on health promotion in different phases of life: from early childhood to healthy ageing.
          </TimelineEntry>
        </Timeline>
      </Section>
    </Layout>
  );
};

export default Aboutme;
