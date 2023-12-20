import Hero from "@/components/Hero";
import React from "react";
import { HERO_INFO, STORIES } from "./constant";
import ImageCard from "@/components/ImageCard";
function StoriesContainer() {
  return (
    <div>
      <Hero info={HERO_INFO} />
      <div className="flex flex-wrap   ">
        {STORIES.map((card) => (
          <ImageCard key={card.id} info={card} />
        ))}
      </div>
    </div>
  );
}

export default StoriesContainer;
