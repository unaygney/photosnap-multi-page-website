import React from "react";
import ArrowImg from "./arrow.svg";

function BottomCard() {
  return (
    <section className="w-full bg-beta-mobile md:bg-beta-tablet lg:bg-beta-desktop bg-no-repeat bg-cover bg-center px-8 py-16 md:px-10 md:py-[68px] ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white container mx-auto">
        <h3 className="text-[32px] md:text-[40px] font-bold leading-10 md:leading-[48px] tracking-[3.333px] md:tracking-[4.167px] uppercase md:max-w-[15ch]">
          We’re in beta. Get your invite today!
        </h3>
        <button className="inline-flex justify-start  items-center gap-[22px] uppercase text-xs font-bold tracking-[2px] leading-normal hover:opacity-30 mt-2 ">
          Get An invite
          <ArrowImg />
        </button>
      </div>
    </section>
  );
}

export default BottomCard;
