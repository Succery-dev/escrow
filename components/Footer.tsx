import React from "react";
import { footerLinks } from "../constants";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="blue-radial-gradient">
      <div className="flex flex-row flex-wrap justify-around py-36">
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
      </div>

      <div className="flex flex-row flex-wrap-reverse justify-between items-center">
        <div>
          <p className="lg:text-lg p-8">*Only for limited time period</p>
        </div>
        <div className="lg:text-xl xl:text-2xl">
          <Link href="/" className="p-8">
            Privacy Policy
          </Link>
          <Link href="/" className="p-8">
            Terms & Condition
          </Link>
          <Link href="/" className="p-8">
            © 2023 Quickpay org.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
