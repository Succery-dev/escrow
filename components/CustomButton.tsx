import React from "react";
import Link from "next/link";

// Framer-Motion Imports
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// Type Imports
import { buttonType } from "../types";

const CustomButton = ({
  text,
  styles,
  onClick,
  type,
}: {
  text: string;
  styles: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  type: buttonType;
}): JSX.Element => {
  return (
    // <Link
    //   href="https://docs.google.com/forms/d/e/1FAIpQLSfe3r7ia_OTCHU8tHEtNG_aPY6OpLDsLPl3RDj-wQLutXNTKg/viewform"
    //   target="_blank"
    // >
    <motion.button
      variants={fadeIn("down", 1.25)}
      initial="hidden"
      type={type}
      animate="visible"
      className={styles}
      onClick={(e) => onClick(e)}
    >
      {text}
    </motion.button>
    // </Link>
  );
};

export default CustomButton;
