"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo.svg";
import { NAV_LINKS } from "./constant";
import { Cross as Hamburger } from "hamburger-react";
import clsx from "clsx";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="container mx-auto">
      <div className="flex justify-between lg:justify-around items-center px-6 md:px-10 py-7 md:py-4 relative bg-white  ">
        <Link href={"/"}>
          <Logo />
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:block">
          <div className="flex gap-8 items-center ">
            {NAV_LINKS.map((link) => (
              <Link
                className="text-xs text-black font-bold tracking-[2px] leading-normal hover:opacity-30 uppercase"
                key={link.id}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={"/pricing"}
              className="btn-dark font-bold text-[12px] w-full py-[14px] px-6 bg-black uppercase lg:hidden"
            >
              get an invite
            </Link>
          </div>
        </nav>
        {/* Desktop Button */}
        <Link
          href={"/pricing"}
          className="btn-dark font-bold text-[12px]  py-[14px]  bg-black uppercase hidden w-[158px] lg:block"
        >
          get an invite
        </Link>

        {/* Mobile Navbar */}
        <nav
          className={clsx(
            "absolute top-[104px] left-0 right-0 z-20 md:hidden",
            { block: isOpen },
            { hidden: !isOpen }
          )}
        >
          <div className=" bg-white p-8 ">
            <div className="flex flex-col items-center gap-5 ">
              {NAV_LINKS.map((link) => (
                <Link
                  className="text-[15px] text-black font-bold tracking-[2.5px] leading-normal hover:opacity-30 uppercase"
                  key={link.id}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
              <span className="w-full h-[1px]  bg-[#00000040] "></span>
              <Link
                href={"/pricing"}
                className="btn-dark font-bold text-[15px] w-full py-[14px] bg-black uppercase"
              >
                get an invite
              </Link>
            </div>
          </div>
        </nav>

        {/* overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 -z-10",
            { block: isOpen },
            { hidden: !isOpen }
          )}
          onClick={() => setOpen(false)}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;
