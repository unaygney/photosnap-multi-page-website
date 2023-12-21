import React from "react";
import BottomCard from "@/components/BottomCard";
import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import { HERO_INFO, PRICING_CARD } from "./constant";
import PricingCard from "@/components/PricingCard";

function PricingComponent() {
  return (
    <main>
      <ImageDescriptionPanel info={HERO_INFO} isDark onRight />
      <PricingCard info={PRICING_CARD} />
      <BottomCard />
    </main>
  );
}

export default PricingComponent;
