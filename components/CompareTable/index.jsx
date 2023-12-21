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
    <table>
      <thead>
        <tr>
          <th>Features</th>
          {info.map((feature, i) => (
            <th key={i}>{feature.method}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(names).map((feature, index) => (
          <tr key={index}>
            <td>{names[feature]}</td>
            {info.map((method, idx) => (
              <td key={idx}>{method.features[feature] ? <TickImg /> : ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompareTable;
