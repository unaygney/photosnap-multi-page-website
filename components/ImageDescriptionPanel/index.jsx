import React from "react";
import Image from "next/image";
import ArrowImgWhite from "./ArrowWhite.svg";
import ArrowImgDark from "./ArrowDark.svg";
import clsx from "clsx";

// COMPONENT RECEİVES ONRİGHT PROPS.
// IF ONRIGT İS TRUE , THE CONTENT APPEARS ON THE RIGHT,
// IF IT IS FALSE , THE CONTENT APPERARS ON THE LEFT

function ImageDescriptionPanel({ info, onRight, isDark }) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Content */}
      <div
        className={clsx(
          "w-full md:w-[495px]  lg:w-[610px] flex items-center px-[34px] md:px-[54px] py-[72px] md:py-[173px]   ",
          { "order-1": onRight },
          { "order-2": !onRight },
          { "bg-black text-white": isDark },
          { "bg-white text-black": !isDark }
        )}
      >
        <div className="flex flex-col  gap-4 items-start   ">
          <h2 className="text-[32px] font-bold leading-10 tracking-[3.333px] uppercase">
            {info.title}
          </h2>
          <p className="text-[15px] font-normal leading-6 opacity-60">
            {info.content}
          </p>
          <button className="inline-flex justify-start  items-center gap-[22px] uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 mt-2 ">
            {info.buttonDescription}
            {isDark ? <ArrowImgWhite /> : <ArrowImgDark />}
          </button>
        </div>
      </div>

      {/*  Mobile */}
      <div
        className={clsx("relative w-full min-h-[285px] flex-1     ", {
          "md:order-1": onRight,
        })}
      >
        {info.images.map((image, index) => (
          <>
            <Image
              key={index}
              src={image.mobile}
              fill
              className="md:hidden"
              placeholder="blur"
            />
            <Image
              key={index}
              src={image.tablet}
              fill
              className="hidden md:block"
              placeholder="blur"
            />
            <Image
              key={index}
              src={image.desktop}
              fill
              className="hidden lg:block "
              placeholder="blur"
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default ImageDescriptionPanel;
