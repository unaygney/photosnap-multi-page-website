import React from "react";
import BottomCard from "@/components/BottomCard";
import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import { COMPARE_TABLE, HERO_INFO, PRICING_CARD } from "./constant";
import CompareTable from "@/components/CompareTable";
import PricingCard from "@/components/PricingCard";

function PricingComponent() {
  return (
    <main>
      <ImageDescriptionPanel info={HERO_INFO} isDark onRight />
      <PricingCard info={PRICING_CARD} />
      <CompareTable info={COMPARE_TABLE} />
      <BottomCard />
    </main>
  );
}

export default PricingComponent;
