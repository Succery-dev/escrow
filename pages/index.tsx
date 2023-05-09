import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import {
  CurrentSystemProblems,
  Features,
  Footer,
  IntroSection,
  Navbar,
  Walkthrough,
  Glow,
} from "../components";

// Content Imports
import { aesthetics } from "../constants";

// Inteface Imports
import { SectionWrapperPropsInterface } from "../interfaces/sectionWrapper";

const SectionWrapper: React.FC<SectionWrapperPropsInterface> = ({
  children,
  bgColor,
  glowStyles,
}): JSX.Element => {
  return (
    <div
      className={`w-full grid grid-cols-12 ${bgColor} py-20 overflow-hidden relative min-h-[1024px]`}
    >
      {glowStyles && <Glow styles={glowStyles} />}
      <div className="col-start-2 col-end-12 font-semibold relative">
        {children}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="font-nunito text-secondary">
      <Head>
        <title>QubePay</title>
        <meta name="description" content="Empowering relation between Freelancers and Organizations" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <SectionWrapper
        bgColor=" bg-bg_primary"
        glowStyles={aesthetics.glow.introSectionGlowStyles}
      >
        <IntroSection />
      </SectionWrapper>
      {/* Why QubePay */}
      <SectionWrapper bgColor=" bg-black" glowStyles={[]}>
        <CurrentSystemProblems />
      </SectionWrapper>

      {/* User Friendly and Secure */}
      <SectionWrapper
        bgColor=" bg-bg_primary"
        glowStyles={aesthetics.glow.walkthroughGlowStyles}
      >
        <Walkthrough />
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper
        bgColor=" bg-black"
        glowStyles={aesthetics.glow.featuresGlowStyles}
      >
        <Features />
        {/* Footer */}
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default Home;
