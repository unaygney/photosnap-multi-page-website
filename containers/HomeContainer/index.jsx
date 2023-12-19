import ImageDescriptionPanel from "@/components/ImageDescriptionPanel";
import React from "react";
import { HOME_INFO } from "./constant";

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
    </>
  );
}

export default HomeContainer;
