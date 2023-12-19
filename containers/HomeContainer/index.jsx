import React from "react";
import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import ImageCard from "@/components/ImageCard";
import { CARD_INFO, HOME_INFO } from "./constant";

function HomeContainer() {
  return (
    <>
      {HOME_INFO.map((info, i) => (
        <ImageDescriptionPanel
          info={info}
          onRight={i % 2 === 0 ? true : false}
          isDark={info.isDark}
        />
      ))}
      <div className="flex flex-wrap   ">
        {CARD_INFO.map((card) => (
          <ImageCard info={card} />
        ))}
      </div>
    </>
  );
}

export default HomeContainer;
