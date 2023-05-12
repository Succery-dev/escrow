import React from "react";
import Link from "next/link";

const CustomButton = ({
  text,
  styles,
}: {
  text: string;
  styles: string;
}): JSX.Element => {
  return (
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfe3r7ia_OTCHU8tHEtNG_aPY6OpLDsLPl3RDj-wQLutXNTKg/viewform" target="_blank">
      <button className={styles}>{text}</button>
    </Link>
  );
};

export default CustomButton;
