import React from "react";
import Link from "next/link";
import Image from "next/image";

// Image Imports
import { TwitterIcon } from "../assets";

// Content Imports
import { footerLinks } from "../constants";

const FooterSocial = (): JSX.Element => {
  return (
    <Link
      href="https://twitter.com/0xQubePay"
      className="flex flex-row items-center gap-4"
    >
      <Image src={TwitterIcon} alt="Twitter" height={30} />
      <p>Twitter</p>
    </Link>
  );
};

const FooterLegal = (): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-8">
      {footerLinks.map((footerLink, index) => {
        return (
          <Link href={footerLink.link} key={footerLink.id}>
            <p>{footerLink.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className=" pt-48 pb-24 flex flex-row justify-between items-center col-start-2 col-end-12 text-xl">
      <FooterSocial />
      <FooterLegal />
    </footer>
  );
};

export default Footer;
