import React from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "../constants";
import { logo, arrow } from "../assets";

// import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full grid grid-cols-12 absolute text-secondary z-50">
      <div className="top-0 col-start-2 col-end-12 h-20 flex flex-row w-2/3 justify-between items-center bg-transparent">
        {/* Logo/Icon */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="QP" height="50" className=" rounded-md" />
          <h1 className=" text-2xl text-primary font-extrabold ml-4">
            QubePay
          </h1>
        </Link>

        {/* Navbar Links */}
        <ul className="list-none hidden lg:flex flex-row md:gap-6 lg:gap-24">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`lg:text-xl font-medium cursor-pointer`}
              >
                <Link href={`${link.id}`}>
                  <p>
                    {link.title}
                    <Image
                      src={arrow}
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
          <ul className="w-full h-14 list-none flex lg:hidden flex-row justify-around items-center md:gap-6">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`text-lg font-medium cursor-pointer`}
                >
                  <Link href={`${link.id}`}>
                    <p>{link.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Connect Button */}
        {/* <ConnectButton /> */}
      </div>
    </nav>
  );
};

export default Navbar;
