import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";

// Custom Components Imports
import {
  DoughnutChart,
  LineChart,
  Navbar,
  CustomButton,
  Glow,
  Table,
} from "../components";

// Constants Imports
import { mockData } from "../constants/mock-data";
import { aesthetics, chartColors } from "../constants";

// Interfaces Imports
import {
  ProjectDataInterface,
  SectionWrapperPropsInterface,
} from "../interfaces";

// Framer-Motion Imports
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

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

const Dashboard: NextPage = () => {
  const [data, setData] = useState({} as ProjectDataInterface);

  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) {
    return null;
  }

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

      {/* Dashboard Section */}
      <SectionWrapper
        bgColor="bg-bg_primary"
        glowStyles={aesthetics.glow.dashboardGlowStyles}
      >
        <div className="grid grid-cols-12 gap-1 pb-12">
          {/* Heading and Charts */}
          <div className="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13">
            {/* Heading */}
            <div className="flex flex-row xs:gap-28 gap-8 items-center xs:justify-normal justify-between py-12 pb-6">
              <motion.h1
                variants={textVariant()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="xl:text-6xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl font-extrabold"
              >
                Active Projects
              </motion.h1>
              <CustomButton
                text="+ Create"
                styles="bg-[#3E8ECC] lg:text-2xl sm:text-lg rounded-md text-center text-white px-3 py-2 md:px-6 md:py-3"
              />
            </div>
            {/* Charts */}
            <div className="flex sm:flex-row flex-col gap-8 w-full">
              {data.data?.length > 0 && (
                <DoughnutChart mockData={data.data} chartColors={chartColors} />
              )}
              {data.data?.length > 0 && <LineChart mockData={data.data} />}
            </div>
          </div>
          {/* Table */}
          <motion.div
            variants={fadeIn("bottom", 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 my-8 bg-black rounded-lg xs:grid grid-rows-10 lg:p-[3px] p-[2px] blue-transparent-green-gradient-vertical"
          >
            {data.data?.length > 0 && <Table mockData={data} />}
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Dashboard;
