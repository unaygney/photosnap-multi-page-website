import React, { Fragment } from "react";
import Image from "next/image";
import ArrowImg from "./Arrow.svg";
function ImageCard({ info }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 h-[375px] md:h-[500px]  relative md:hover:-translate-y-6 transition delay-200  md:hover:border-b-[6px] border-gradient  ">
      {info.images.map((image) => (
        <div key={info.id}>
          <Image
            src={image.mobile}
            alt={`${image.title} image's`}
            fill
            placeholder="blur"
            className="lg:hidden"
          />
          <Image
            src={image.desktop}
            alt={`${image.title} image's`}
            fill
            placeholder="blur"
            className="hidden lg:block brightness-75 "
          />
        </div>
      ))}
      <div className="absolute bottom-10 left-8 md:left-10 md:right-10 right-8 text-white ">
        <div className="flex flex-col gap-1 ">
          {info?.date && (
            <h5 className="text-[13px] font-normal leading-normal">
              {info?.date}
            </h5>
          )}
          <h3 className="leading-6 font-bold text-lg">{info.title}</h3>
          <h6 className="text-[13px] font-normal leading-normal">
            {info.author}
          </h6>
          <span className="w-full h-[1px] bg-white opacity-25 mt-4 mb-5"></span>
          <button className="inline-flex justify-between items-center uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 ">
            Read story
            <ArrowImg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
