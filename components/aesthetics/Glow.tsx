import React from "react";

const Glow = ({ styles }: { styles: string[] }) => {
  return (
    <>
      {styles.map((glowStyle, index) => {
        return (
          <div
            className={`absolute ${glowStyle}`}
            key={`${glowStyle}-${index}`}
          ></div>
        );
      })}
    </>
  );
};

export default Glow;
