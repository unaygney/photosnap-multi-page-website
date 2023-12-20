import React from "react";

function CardInfo({ info }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="flex flex-col items-center gap-12 text-black">
        {info.image}
        <div className="flex flex-col items-center text-center gap-4 px-4 md:px-0 ">
          <h3 className="heading-m">{info.title}</h3>
          <p className="body-text  lg:max-w-[40ch]">{info.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
