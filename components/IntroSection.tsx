import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

import whatIf from "../public/what-if.jpg"

const IntroHeaderSection = (): JSX.Element => (
  <div className="pt-[10%]">
    <h1 className="xs:text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-primary md:py-4 py-2">
      <div>Empowering relation between</div>
      <div>Freelancers and Organizations</div>
    </h1>
    <h2 className="xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl md:py-4 py-2">
      <p>Make a customized contract with</p>
      <p>guaranteed payment in Web3</p>
    </h2>
    <div className=" h-[3px] w-3/4 bg-primary mb-[20px] md:my-8 my-4"></div>
    <CustomButton
      text="Get Started"
      styles="border-none xs:text-lg sm:text-xl lg:text-2xl text-white bg-primary md:px-8 md:py-4 px-4 py-2 rounded-full"
    />
  </div>
);

const IntroFooterSection = (): JSX.Element => (
  <h3 className="xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl md:pt-2 pt-[10%] pb-4">
    <div>Make a hassle-free contract and secure</div>
    <div>
      payment on <span className="pink-to-blue-gradient">QubePay</span> for{" "}
      <span className="pink-to-blue-gradient">FREE*</span>
    </div>
  </h3>
);

const IntroSection = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-around items-center font-semibold mb-20 bg-gradient-to-tr from-white to-blue-300">
      <IntroHeaderSection />
      <IntroFooterSection />
      <Image src={whatIf} alt="what if" height={800} className="my-10"></Image>
    </div>
  );
};

export default IntroSection;
