import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import React from "react";
import { HERO_INFO, CARD_INFO } from "./constant";
import CardInfo from "@/components/CardInfo";
import BottomCard from "@/components/BottomCard";
function FeaturesContainer() {
  return (
    <main>
      <ImageDescriptionPanel info={HERO_INFO} isDark onRight />
      <div className="container mx-auto flex flex-wrap gap-14 lg:gap-0 my-20 md:my-[120px] md:justify-center lg:justify-start">
        {CARD_INFO.map((info) => (
          <CardInfo key={info.id} info={info} />
        ))}
      </div>
      <BottomCard />
    </main>
  );
}

export default FeaturesContainer;
