import Hero from "@/components/Hero";
import React from "react";
import { HERO_INFO } from "./constant";
function StoriesContainer() {
  return (
    <div>
      <Hero info={HERO_INFO} />
    </div>
  );
}

export default StoriesContainer;
