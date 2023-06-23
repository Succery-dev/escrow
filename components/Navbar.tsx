import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "../constants";
import { logo, arrow, MenuIcon, CrossIcon } from "../assets";
import { Glow } from "./aesthetics";

import Tilt from "react-parallax-tilt";

// Framer-Motion Imports
import { motion, AnimatePresence } from "framer-motion";
import { hoverVariant, modalVariant, modalLinksVariant } from "../utils/motion";

import { aesthetics } from "../constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = ({
  showNavLinks,
  showConnectBtn,
}: {
  showNavLinks: boolean;
  showConnectBtn: boolean;
}): JSX.Element => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const toggleMobileNav = () => {
    setShowMenuModal((prevShowMenuModal) => !prevShowMenuModal);
  };

  return (
    <nav className="w-full grid grid-cols-12 absolute text-secondary z-50">
      <div className="top-0 col-start-2 col-end-12 xl:h-20 sm:h-14 h-20 flex flex-row xl:gap-40 lg:gap-20 sm:gap-16 w-full justify-between items-center bg-transparent">
        {/* Logo/Icon */}
        <motion.div variants={hoverVariant()} whileHover={"hover"}>
          <Link href="/" className="flex items-center sm:gap-2 xs:gap-4 gap-2">
            <Image
              src={logo}
              alt="QP"
              className=" rounded-md xl:h-[50px] lg:h-[45px] sm:h-[40px] xs:h-[40px] h-[30px] w-auto"
            />
            <h1 className=" xl:text-2xl lg:text-xl sm:text-lg xs:text-2xl text-xl text-primary font-extrabold lg:ml-4 sm:ml-0">
              Qube
            </h1>
          </Link>
        </motion.div>

        {/* Navbar Links */}
        <ul
          className={`list-none flex-row sm:gap-6 md:gap-10 lg:gap-24 grow ${
            showNavLinks ? "sm:flex hidden" : "hidden"
          }`}
        >
          {navLinks.map((link) => {
            return (
              <motion.li
                variants={hoverVariant()}
                whileHover={"hover"}
                key={link.id}
                className={`xl:text-xl lg:text-lg sm:text-sm font-medium cursor-pointer`}
              >
                <Link href={`#${link.id}`}>
                  <p>
                    {link.title}
                    <Image
                      src={arrow}
                      alt="▼"
                      className="inline lg:ml-2 sm:ml-[2px] lg:h-[9px] sm:h-[6px]"
                    />
                  </p>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Small/Medium Devices Navbar */}
        <AnimatePresence>
          {showMenuModal && (
            <motion.div
              variants={modalVariant()}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`fixed w-screen h-screen top-0 left-0 backdrop-blur-md z-50 ${
                showNavLinks ? "sm:hidden grid" : "hidden"
              } grid-cols-12`}
            >
              <div className="col-start-2 col-end-12 grid place-items-center">
                <Tilt className="w-full">
                  <div className=" w-full blue-transparent-green-gradient rounded-xl p-[2px] flex flex-row items-center shadow-lg">
                    <div className="w-full bg-bg_primary rounded-xl px-8 relative">
                      <Glow styles={aesthetics.glow.mobileNavbarGlowStyles} />
                      <div className="flex flex-row w-full justify-between items-center absolute top-0 right-0 z-[99] px-8 mt-8">
                        <h2 className="text-3xl font-bold">Explore</h2>
                        <Image
                          src={CrossIcon}
                          alt="cross"
                          className="h-4 w-auto"
                          onClick={toggleMobileNav}
                        />
                      </div>
                      <ul className="list-none flex flex-col gap-12 grow pt-32 pb-14">
                        {navLinks.map((link, index) => {
                          return (
                            <motion.li
                              variants={modalLinksVariant(index)}
                              key={link.id}
                              className="text-xl font-semibold w-full"
                            >
                              <Link href={`#${link.id}`}>
                                <p className="w-full flex flex-row justify-between items-center">
                                  {link.title}
                                  <Image
                                    src={arrow}
                                    alt="▼"
                                    className="inline h-[8px]"
                                  />
                                </p>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Tilt>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Mobile Menu Icon */}
        <Image
          src={MenuIcon}
          alt="Menu"
          className={`w-auto h-[20px] ${
            showNavLinks ? "block sm:hidden" : "hidden"
          } cursor-pointer`}
          onClick={toggleMobileNav}
        />
        {/* Connect Button */}
        <div className={`${showConnectBtn ? "block" : "hidden"}`}>
          <ConnectButton accountStatus={{ smallScreen: "avatar" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
