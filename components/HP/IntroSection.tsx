import React from "react";
import CustomButton from "../CustomButton";

const IntroHeaderSection = (): JSX.Element => (
  <h1 className="font-extrabold text-7xl">
    <p className=" block">
      Build <span className="linear-blue-green-gradient">Trust</span> between
    </p>
    <p className=" block">Freelancers and Clients</p>
  </h1>
);

const IntroFooterSection = (): JSX.Element => (
  <div>
    <h3 className="text-4xl font-medium">
      <p className="block">The ultimate DApp enabling</p>
      <p className="block">payments and delivery of</p>
      <p className="block">freelance work using smart contract</p>
    </h3>
    <CustomButton
      text="Join Waitlist"
      styles="border-none xs:text-lg sm:text-xl lg:text-2xl font-semibold text-primary bg-white md:px-8 md:py-4 px-4 py-2 rounded-md mt-16"
    />
  </div>
);

const IntroSection = (): JSX.Element => {
  return (
    <div className="h-full flex flex-col justify-center">
      <IntroHeaderSection />
      <IntroFooterSection />
    </div>
  );
};

export default IntroSection;
