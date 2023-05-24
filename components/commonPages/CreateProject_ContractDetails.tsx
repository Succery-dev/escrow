import React, { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// Custom components Imports
import { Navbar, Glow, LogoCanvas, CreateProjectForm } from "../";

// Context Imports
import { FormContext } from "../../context/FormContext";

// Constants Imports
import { aesthetics } from "../../constants";

// Framer-Motion Imports
import { motion } from "framer-motion";

// Interface Imports
import { SectionWrapperPropsInterface } from "../../interfaces";

const SectionWrapper: React.FC<SectionWrapperPropsInterface> = ({
  children,
  bgColor,
  glowStyles,
}): JSX.Element => {
  return (
    <motion.div
      className={`w-full grid grid-cols-12 ${bgColor} py-28 overflow-hidden relative min-h-screen`}
    >
      {glowStyles && <Glow styles={glowStyles} />}
      <div className="col-start-2 col-end-12 font-semibold relative flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
};

const CreateProject_ContractDetails = (): JSX.Element => {
  const context = useContext(FormContext);
  const form = context.form;
  const setForm = context.setForm;

  return (
    <div className="font-nunito text-secondary">
      <Head>
        <title>QubePay</title>
        <meta
          name="description"
          content="Empowering relation between Freelancers and Organizations"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Navbar */}
      <Navbar showConnectBtn={true} showNavLinks={false} />

      {/* Create Project Section */}
      <SectionWrapper
        bgColor="bg-bg_primary"
        glowStyles={aesthetics.glow.createProjectGlowStyles}
      >
        {/* Create Project Form */}
        <div className="block lg:flex flex-row items-center gap-16">
          {/* Form */}
          <CreateProjectForm form={form} setForm={setForm} />
          {/* 3D Logo */}
          <div className="w-1/2 h-[500px] lg:block hidden">
            <LogoCanvas />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CreateProject_ContractDetails;
