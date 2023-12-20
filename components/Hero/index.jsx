import React from "react";
import Image from "next/image";

import ArrowImg from "./Arrow.svg";
function Hero({ info }) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[317px] md:h-[650px] relative">
        <Image
          src={info.images.mobile}
          alt="hero image "
          fill
          className="md:hidden"
          placeholder="blur"
        />
        <Image
          src={info.images.tablet}
          alt="hero image "
          fill
          className="hidden md:block lg:hidden"
          placeholder="blur"
        />
        <Image
          src={info.images.desktop}
          alt="hero image "
          fill
          className="hidden lg:block"
          placeholder="blur"
        />
      </div>

      {/* For Mobile Content */}
      <div className="px-7 py-12 lg:pr-0 bg-black text-white md:absolute md:bg-transparent md:-translate-y-1/2 md:top-1/2 md:w-1/2 md:max-w-[387px] ">
        <div className="flex flex-col gap-6  ">
          <h6 className="text-xs font-bold tracking-[2px] uppercase">
            {info.highlight}
          </h6>
          <h2 className="text-[32px] lg:text-[40px] leading-[40px] md:leading-[48px]  uppercase tracking-[3.333px] lg:tracking-[4.167px] font-bold ">
            {info.title}
          </h2>
          <div className="flex items-center gap-1">
            <h4 className="text-[13px] font-normal leading-normal opacity-75">
              {info.date}
            </h4>
            <span className="opacity-100 text-white text-[13px]">
              {info.highlight}
            </span>
          </div>
          <p>{info.content}</p>
          <button className="inline-flex gap-4  items-center uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 ">
            Read story
            <ArrowImg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
