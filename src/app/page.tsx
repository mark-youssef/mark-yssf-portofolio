import { useMemo } from "react";

import Image from "next/image";

import Hero from "./components/Hero";
import Section from "./components/Section";
import TechGrid from "./components/TechGrid";
import {
  LEARNING_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
  PAST_TECHNOLOGIES,
  TECHNOLOGIES,
} from "./const";

import heroImage from "../../public/images/hero.png";

export default function Home() {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero imageSrc={heroImage} imageAlt="Mark Youssef">
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
          title="I'm not too familiar with these anymore but I have used them in the past"
          items={PAST_TECHNOLOGIES}
        />
        <TechGrid
          title="Currently I'm learning these on my free time"
          items={LEARNING_TECHNOLOGIES}
        />
      </Section>
      <Section>
        <h2 className="text-3xl lg:text-4xl mb-6">Get in touch</h2>
        <a href="https://www.linkedin.com/in/markyoussef">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cfe3f7_0%,#5a8cbf_50%,#cfe3f7_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium backdrop-blur-3xl">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin logo"
                width="32"
                height="32"
                className="mr-1"
              />
              Connect at LinkedIn
            </span>
          </button>
        </a>
      </Section>
    </main>
  );
}
