import React from "react";
import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import ImageCard from "@/components/ImageCard";
import { CARD_IMAGE, HOME_INFO, CARD_INFO } from "./constant";
import CardInfo from "@/components/CardInfo";

function HomeContainer() {
  return (
    <main>
      {HOME_INFO.map((info, i) => (
        <ImageDescriptionPanel
          info={info}
          onRight={i % 2 === 0 ? true : false}
          isDark={info.isDark}
          key={i}
        />
      ))}
      <div className="flex flex-wrap   ">
        {CARD_IMAGE.map((card) => (
          <ImageCard key={card.id} info={card} />
        ))}
      </div>
      <div className="container mx-auto  flex flex-wrap gap-14 lg:gap-0 my-20 md:my-[120px] md:justify-center lg:justify-start">
        {CARD_INFO.map((info) => (
          <CardInfo key={info.id} info={info} />
        ))}
      </div>
    </main>
  );
}

export default HomeContainer;
