import React from "react";

import cardPropsInterface from "../interfaces/cardProps";

const Card = ({ title, description }: cardPropsInterface) => {
  return (
    <div className="text-black-100 bg-white max-w-[500px] shadow-card rounded-[45px] justify-self-center">
      <div className=" py-16 px-8">
        <h1 className="xs:text-2xl lg:text-3xl xl:text-4xl text-center py-3">
          {title}
        </h1>
        <p className="md:text-lg lg:text-xl text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
