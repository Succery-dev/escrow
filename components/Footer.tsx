import React from "react";
import { footerLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

import twitterLogo from "../public/twitter-logo.png";

const Footer = (): JSX.Element => {
  return (
    <div className="blue-radial-gradient py-10">
      {/* <div className="flex flex-row flex-wrap justify-around py-36">
        {footerLinks.map((footerSection) => {
          return (
            <div className="flex flex-row" key={footerSection.id}>
              <div>
                <h3 className="text-primary xs:text-xl lg:text-3xl xl:text-4xl font-extrabold mb-8">
                  {footerSection.title}
                </h3>
                <ul className="list-none flex flex-col gap-4 xs:text-xl lg:text-3xl xl:text-4xl">
                  {footerSection.links.map((footerLink, index) => {
                    return (
                      <li key={`${footerSection.title}-${footerLink}`}>
                        <Link href="/">{footerLink}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="flex justify-end items-center">
        <div className="lg:text-xl xl:text-2xl flex flex-wrap">
          <Link href="https://twitter.com/0xQubePay" target="_blank" className="p-8 flex items-center gap-2">
            <Image src={twitterLogo} alt="QP-Twitter" height="30" />
            Twitter
          </Link>
          <div className="flex flex-wrap">
            <Link href="https://veroo.notion.site/Privacy-Policy-4538184bcaee4835a2dedcc464496cdd" target="_blank" className="p-8">
              Privacy Policy
            </Link>
            <Link href="https://www.termsandconditionsgenerator.com/live.php?token=n1SBngCYTbesUDM8jjBpq7GPELkmDxry" target="_blank" className="p-8">
              Terms & Conditions
            </Link>
            <Link href="/" className="p-8">
              © 2023 QubePay org.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
