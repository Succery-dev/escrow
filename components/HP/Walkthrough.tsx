import React from "react";
import Image from "next/image";

// Interfaces Imports
import { WalthroughInterface } from "../../interfaces/walkthrough";

// Image Imports
import { GradientBlueGreenArrow } from "../../assets";

// Content Imports
import { walkthrough } from "../../constants";

const WalkthroughCard = ({
  walkthroughStep,
  index,
}: {
  walkthroughStep: WalthroughInterface;
  index: number;
}): JSX.Element => {
  return (
    <>
      <div className="w-full min-h-[85px] rounded-lg blue-transparent-green-gradient grid place-items-center">
        <div
          className="bg-black rounded-lg w-[99%] px-2 py-2 min-h-[80px] flex flex-row items-center"
          key={walkthroughStep.id}
        >
          <p> {walkthroughStep.description}</p>
        </div>
      </div>
      <Image
        className={`${walkthrough.length === index + 1 ? " hidden" : " block"}`}
        src={GradientBlueGreenArrow}
        height={20}
        alt="▼"
      />
    </>
  );
};

const DemoVideo = (): JSX.Element => {
  return (
    <div className="w-1/2 grid place-items-center green-transparent-blue-gradient rounded-lg">
      <video autoPlay loop controls className="h-[99%] rounded-lg">
        <source src="/videos/temporaryDemo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const Walkthrough = (): JSX.Element => {
  return (
    <>
      <h1 className=" text-7xl font-extrabold">
        User-Friendly <br /> and Secure
      </h1>
      <div className="flex flex-row items-center gap-16 mt-24">
        <DemoVideo />
        <div className="flex flex-col">
          {walkthrough.map((step, index) => {
            return (
              <div className="flex flex-col items-center" key={step.id}>
                <WalkthroughCard walkthroughStep={step} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Walkthrough;
