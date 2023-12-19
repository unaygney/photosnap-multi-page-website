import React from "react";
import Image from "next/image";
import example from "./Bitmap.png";
import ArrowImg from "./Arrow.svg";
import clsx from "clsx";

// COMPONENT RECEİVES ONRİGHT PROPS.
// IF ONRIGT İS TRUE , THE CONTENT APPEARS ON THE RIGHT,
// IF IT IS FALSE , THE CONTENT APPERARS ON THE LEFT

function ImageDescriptionPanel({ info, onRight }) {
  console.log(info);
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Content */}
      <div
        className={clsx(
          "bg-black text-white w-full md:w-[495px] lg:w-[610px] flex items-center   order-2 ",
          { "order-1": onRight }
        )}
      >
        <div className="flex flex-col  gap-4 items-start  px-[34px] md:px-[54px] py-[72px] md:py-[173px] ">
          <h2 className="text-[32px] font-bold leading-10 tracking-[3.333px] uppercase">
            {info.title}
          </h2>
          <p className="text-[15px] font-normal leading-6 opacity-60">
            {info.content}
          </p>
          <button className="inline-flex justify-start  items-center gap-[22px] uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 mt-2 ">
            {info.buttonDescription}
            <ArrowImg />
          </button>
        </div>
      </div>

      {/* Image Mobile */}
      <div
        className={clsx(
          "relative w-full min-h-[285px]    order-1 md:order-2 ",
          {
            "md:order-1": onRight,
          }
        )}
      >
        <Image src={example} alt="example image" fill />
      </div>
    </div>
  );
}

export default ImageDescriptionPanel;
