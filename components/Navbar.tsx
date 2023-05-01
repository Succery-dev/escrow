import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextComponentType } from "next";

import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../public/logo.png";

import arrowDown from "../assets/arrowDown.svg";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = (): JSX.Element => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 z-20 cursor-pointer justify-around`}
    >
      {/* Logo/Icon */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="QP" height="30" />
        <h1 className="text-gray-800 font-bold text-[18px] block">QubePay</h1>
      </Link>

      {/* Navbar Links */}
      <ul className="list-none hidden lg:flex flex-row md:gap-6 lg:gap-16">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`lg:text-lg font-medium cursor-pointer`}
            >
              <Link href={`#${link.id}`}>
                <p>
                  {link.title}
                  <Image
                    src={arrowDown}
                    alt="▼"
                    height={9}
                    className="inline ml-2"
                  />
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Small/Medium Devices Navbar */}
      <div
        className="fixed bg-primary text-white shadow-card z-99 bottom-0 w-full border-t-black-100 border-[1px]"
        style={{ boxShadow: "gray 0px 2px 10px 2px" }}
      >
        <ul className="w-full h-14 list-none flex lg:hidden flex-row justify-around items-center md:gap-6 lg:gap-16">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`text-lg font-medium cursor-pointer`}
              >
                <Link href={`#${link.id}`}>
                  <p>{link.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Connect Button */}
      {/* Temporarily comment this out */}
      {/* <ConnectButton /> */}
    </nav>
  );
};

export default Navbar;
