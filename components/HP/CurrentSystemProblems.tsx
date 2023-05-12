import React from "react";
import Link from "next/link";
import Image from "next/image";

// Custom Component Imports
import { Glow } from "../aesthetics";

// Framer-Motion Imports
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

// Content Imports
import { currentSystemProblems } from "../../constants";
import { aesthetics } from "../../constants";

// Inteface Imports
import { ProblemsInterface } from "../../interfaces/currentSystemProblems";

const CurrentSystemProblemsCard = ({
  problem,
  index,
}: {
  problem: ProblemsInterface;
  index: number;
}): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("right", 1.25, index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className=" sm:basis-[28%] flex flex-col sm:items-start items-center gap-8 sm:py-0 py-16"
      key={problem.id}
    >
      <div className="relative">
        <Glow styles={aesthetics.glow.currentSystemProblemsStyles} />
        <Image
          src={problem.image}
          alt="70%"
          className="xl:h-[200px] lg:h-[150px] sm:h-[100px] h-[150px]"
        />
      </div>
      <p className="font-extrabold xl:text-3xl lg:text-2xl sm:text-xl text-xl grow sm:w-full w-2/3">
        {problem.description.main}
      </p>
      <Link href="/">
        <p className="font-normal xl:text-xl lg:text-lg md:text-sm">
          {problem.description.footer}
        </p>
      </Link>
    </motion.div>
  );
};

const CurrentSystemProblems = (): JSX.Element => {
  return (
    <div id="product">
      <motion.h1
        variants={textVariant()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className=" xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl text-4xl font-extrabold"
      >
        Why QubePay
      </motion.h1>
      <div className="sm:flex sm:flex-row justify-between lg:mt-32 sm:mt-16">
        {currentSystemProblems.map(
          (problem: ProblemsInterface, index: number) => {
            return (
              <CurrentSystemProblemsCard
                problem={problem}
                index={index}
                key={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CurrentSystemProblems;
