"use client";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import clsx from "clsx";
function PricingCard({ info }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <section>
      <div className="px-7 py-16 ">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-8">
            <label
              onClick={() => setEnabled(!enabled)}
              className={`${
                !enabled ? "text-black" : "opacity-50"
              } text-lg leading-6 font-bold text-black `}
            >
              Monthly
            </label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-black" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <label
              onClick={() => setEnabled(!enabled)}
              className={`${
                enabled ? "text-black" : "opacity-50"
              } text-lg leading-6 font-bold `}
            >
              Yearly
            </label>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 ">
            {info.map((card, i) => (
              <div
                key={i}
                className={clsx(
                  "w-full h-full bg-[#f5f5f5] text-black lg:max-w-[350px] ",
                  { " lg:h-[470px] border-t-[6px] border-gradient": i === 1 },
                  { " lg:h-[407px]": i !== 1 }
                )}
              >
                <div
                  className={clsx(
                    "w-full h-full px-5 md:px-10 md:py-10 py-14 flex flex-col md:flex-row lg:flex-col lg:items-center md:items-start items-center gap-10 ",
                    { "bg-black text-white  ": i === 1 }
                  )}
                >
                  <div className="flex flex-col items-center md:items-start lg:items-center gap-[18px] md:flex-1">
                    <h4 className="text-2xl font-bold leading-6">
                      {card.title}
                    </h4>
                    <p className="text-[15px] leading-6 font-normal opacity-60 text-center md:text-start lg:text-center">
                      {card.content}
                    </p>

                    <button
                      className={clsx(
                        "btn-dark bg-black uppercase py-3 w-full hidden md:block lg:hidden ",
                        {
                          "bg-white text-black hover:bg-black hover:text-white":
                            i === 1,
                        }
                      )}
                    >
                      pick plan
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-1 md:items-end lg:items-center">
                    <h5 className="text-[40px] leading-[48px] uppercase tracking-[4.167px] font-bold">
                      ${enabled ? card.yearly : card.monthly}.00
                    </h5>
                    <p className="text-[15px] leading-6 font-normal text-center opacity-60">
                      {enabled ? "per year" : "per month"}
                    </p>
                  </div>

                  <button
                    className={clsx(
                      "btn-dark bg-black uppercase py-3 w-full md:hidden lg:block",
                      {
                        "bg-white text-black ": i === 1,
                      }
                    )}
                  >
                    pick plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingCard;
