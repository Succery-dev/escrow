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

// Framer-Motion Imports
import { motion } from "framer-motion";

// Content Imports
import { aesthetics } from "../constants";

// Inteface Imports
import { SectionWrapperPropsInterface } from "../interfaces/HP/sectionWrapper";

const SectionWrapper: React.FC<SectionWrapperPropsInterface> = ({
  children,
  bgColor,
  glowStyles,
}): JSX.Element => {
  return (
    <motion.div
      className={`w-full grid grid-cols-12 ${bgColor} xl:py-20 sm:py-14 py-14 overflow-hidden relative xl:min-h-[1024px] lg:min-h-[760px] sm:min-h-[500px] min-h-screen`}
    >
      {glowStyles && <Glow styles={glowStyles} />}
      <div className="col-start-2 col-end-12 font-semibold relative">
        {children}
      </div>
    </motion.div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="font-nunito text-secondary">
      <Head>
        <title>Qube</title>
        <meta
          name="description"
          content="The best tool for all of your outsourcing task management which improves your working quality."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar showNavLinks={true} showConnectBtn={false} />
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
