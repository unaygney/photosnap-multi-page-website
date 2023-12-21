import React from "react";
import TickImg from "./Tick.svg";

function CompareTable({ info }) {
  const names = {
    UNLIMITED_STORY_POSTING: "Unlimited Story Posting",
    UNLIMITED_PHOTO_UPLOAD: "Unlimited Photo Upload",
    EMBEDDING_CUSTOM_CONTENT: "Embedding Custom Content",
    CUSTOMIZE_METADATA: "Customize Metadata",
    ADVANCED_METRICS: "Advanced Metrics",
    PHOTO_DOWNLOADS: "Photo Downloads",
    SEARCH_ENGINE_INDEXING: "Search Engine Indexing",
    CUSTOM_ANALYTICS: "Custom Analytics",
  };
  return (
    <section className="flex flex-col gap-16 lg:gap-14 px-6 md:px-10 md:my-[112px] lg:my-[160px] items-center">
      <h3 className="hidden md:block text-[40px] leading-[48px] uppercase tracking-[4.167px] text-black text-center">
        Compare
      </h3>

      <div className="">
        <table className="md:w-full lg:w-[731px]">
          <thead>
            <tr className=" border-black border-b  ">
              <th className="text-xs font-bold tracking-[2px] leading-normal text-black uppercase text-start pb-[23px]">
                The Features
              </th>
              {info.map((feature, i) => (
                <th
                  className="text-start uppercase text-xs font-bold tracking-[2px] leading-normal text-black "
                  key={i}
                >
                  {feature.method}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(names).map((feature, index) => (
              <tr className="border-b border-gray-300" key={index}>
                <td className="py-6 text-xs font-bold tracking-[2px] leading-normal text-black uppercase ">
                  {names[feature]}
                </td>
                {info.map((method, idx) => (
                  <td key={idx}>
                    {method.features[feature] ? <TickImg /> : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CompareTable;
