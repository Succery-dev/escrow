import React from "react";
import Image from "next/image";

// Content Imports
import { features } from "../../constants";

const Features = () => {
  return (
    <>
      <h1 className=" text-7xl font-extrabold">Features</h1>
      <div className="grid grid-cols-2 gap-16 place-items-center mt-24">
        {features.map((feature, index) => {
          return (
            // Card
            <div
              className="blue-transparent-green-gradient-vertical w-[450px] p-[3px] rounded-2xl grid place-items-center"
              key={index}
            >
              <div className="bg-bg_primary w-full h-full flex flex-col px-8 py-12 rounded-2xl">
                {/* Card Heading */}
                <div className="flex flex-row items-center gap-8">
                  <Image src={feature.image} height={70} alt={feature.title} />
                  <h2 className=" text-4xl font-extrabold">{feature.title}</h2>
                </div>
                {/* Card Description */}
                <p className=" mt-8 px-6 font-normal text-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
