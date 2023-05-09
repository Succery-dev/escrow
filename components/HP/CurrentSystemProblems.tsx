import React from "react";
import Link from "next/link";
import Image from "next/image";

// Custom Component Imports
import { Glow } from "../aesthetics";

// Content Imports
import { currentSystemProblems } from "../../constants";
import { aesthetics } from "../../constants";

// Inteface Imports
import { ProblemsInterface } from "../../interfaces/currentSystemProblems";

const CurrentSystemProblemsCard = ({
  problem,
}: {
  problem: ProblemsInterface;
}): JSX.Element => {
  return (
    <div className=" basis-[28%] flex flex-col gap-8" key={problem.id}>
      <div className="relative">
        <Glow styles={aesthetics.glow.currentSystemProblemsStyles} />
        <Image height={200} src={problem.image} alt="70%" />
      </div>
      <p className="font-extrabold text-3xl grow">{problem.description.main}</p>
      <Link href="/">
        <p className="font-normal text-xl">{problem.description.footer}</p>
      </Link>
    </div>
  );
};

const CurrentSystemProblems = (): JSX.Element => {
  return (
    <div id="product">
      <h1 className=" text-7xl font-extrabold">Why QubePay</h1>
      <div className="flex flex-row justify-between mt-32">
        {currentSystemProblems.map(
          (problem: ProblemsInterface, index: number) => {
            return <CurrentSystemProblemsCard problem={problem} key={index} />;
          }
        )}
      </div>
    </div>
  );
};

export default CurrentSystemProblems;
