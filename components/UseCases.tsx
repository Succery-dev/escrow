import React from "react";
import { useCases } from "../constants";
import Image from "next/image";
import Link from "next/link";

const UseCases = (): JSX.Element => {
  return (
    <div id="use cases">
      <h1 className="text-primary  xs:text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-center mt-20">
        Use Cases
      </h1>
      <div className="flex flex-row justify-around items-center my-20 gap-4">
        {useCases.map((useCase) => {
          return (
            <Link href="/" className="flex flex-col" key={useCase.id}>
              <Image
                src={useCase.image}
                alt={useCase.title}
                key={useCase.id}
                className="h-20 md:h-40 lg:h-60 w-auto"
              />
              <p className="xs:text-xl lg:text-3xl xl:text-4xl text-center">
                {useCase.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UseCases;
