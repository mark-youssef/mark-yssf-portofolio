import { useMemo } from "react";
import Hero from "./components/Hero";
import TechIcon from "./components/TechIcon";
import {
  LEARNING_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
  PAST_TECHNOLOGIES,
  TECHNOLOGIES,
} from "./const";
import TechGrid from "./components/TechGrid";
import Section from "./components/Section";

export default function Home() {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero imageSrc="/images/hero.jpg" imageAlt="Mark Youssef">
        <div className="sticky top-1/4 text-md lg:text-l">
          <h1 className="text-4xl lg:text-5xl leading-snug mb-1">
            Hi there <span className="inline-block animate-wiggle">👋</span>
            <br />
            I&apos;m Mark Youssef,
          </h1>
          <p className="text-xl lg:text-2xl mb-5">
            a passionate frontend software engineer.
          </p>
          <p className="mb-5">
            I have {thisYear - 2011} years of experience building
            production-quality web and mobile apps.
          </p>
          <p className="mb-5">
            Working closely with designers over the years has given me a great
            eye for detail with UI &amp; UX.
          </p>
          <p>
            A chance to create beautiful, impactful experiences always drives my
            passion to build and learn more.
          </p>
        </div>
      </Hero>
      <Section>
        <h2 className="text-3xl lg:text-4xl mb-4">Skills</h2>
        <TechGrid
          title="The technologies I am most proficient in"
          items={TECHNOLOGIES}
        />
        <TechGrid
          title="Other technologies I used extensively in the past"
          items={OTHER_TECHNOLOGIES}
        />
        <TechGrid
          title="I'm not too familiar with these anymore but I have used in the past"
          items={PAST_TECHNOLOGIES}
        />
        <TechGrid
          title="Currently I'm learning these on my free time"
          items={LEARNING_TECHNOLOGIES}
        />
      </Section>
      <Section>
        <h2 className="text-3xl lg:text-4xl mb-4">Get in touch</h2>
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/markyoussef?trk=profile-badge"
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="markyoussef"
            data-version="v1"
          ></div>
        </a>
      </Section>
    </main>
  );
}
