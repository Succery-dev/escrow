import React from "react";
import Card from "./Card";

import { productDescription } from "../constants";

const ProductDescription = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-primary xs:text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-center mt-20">
        Product
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 m-20">
        {productDescription.map((feature) => {
          return (
            <Card
              title={feature.title}
              description={feature.description}
              key={feature.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductDescription;
