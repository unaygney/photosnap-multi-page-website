import React from "react";
import Logo from "./images/logo.svg";
import Link from "next/link";
import SocialLinks from "./images/social-links.svg?url";
import Image from "next/image";
import ArrowImg from "./images/arrow.svg";

const NAV_LINKS = [
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Stories",
    path: "/stories",
  },
  {
    id: 2,
    title: "Features",
    path: "/features",
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
  },
];

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-14 md:py-16  md:flex-row w-full h-full ">
          {/* Logo And Social Links */}
          <div className="flex flex-col gap-8 items-center">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div>
              <Image
                src={SocialLinks}
                alt="social links image"
                width={154}
                height={20}
              />
            </div>
          </div>

          {/* Navbar links */}
          <div className="mt-12 md:mt-0 md:ml-[109px]">
            <div className="flex flex-col items-center md:items-start gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 uppercase"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright and Invite button */}

          <div className="mt-[120px] md:mt-0 md:ml-auto   ">
            <div className="flex flex-col items-center gap-9 md:items-center md:justify-between  ">
              <button className="inline-flex items-center gap-[22px] uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 ">
                get an invite
                <ArrowImg />
              </button>
              <p className="opacity-50 font-normal leading-normal text-[15px]  ">
                Copyright 2019. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
