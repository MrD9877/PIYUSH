/* eslint-disable @next/next/no-img-element */
"use client";
import React, { RefObject } from "react";

export const menuButtons = [
  {
    name: "Services",
    id: "#services",
  },
  {
    name: "Works",
    id: "#works",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

export default function Header({ scrollRef }: { scrollRef: RefObject<globalThis.ScrollSmoother | null> }) {
  const handleButton = (id: string) => {
    scrollRef.current?.scrollTo(id, true);
  };
  return (
    <header style={{ fontWeight: 400 }} className="top-0 absolute text-creamText grid grid-cols-2 w-full pt-6 px-6 z-40 font-popins">
      <div className="col-span-1 flex flex-col md:flex-row md:items-center gap-4 ">
        <div className="max-h-16 max-w-16 rounded-full">
          <img src="/images/db2.jpg" alt="" className="object-cover max-w-full max-h-full  rounded-full aspect-square" />
        </div>
        Data & Business Analyst (Consulting)
      </div>
      <div className="col-span-1 flex w-full  justify-end gap-2 md:items-start">
        <div className="flex flex-col md:flex-row">
          {menuButtons.map((item, index) => {
            return (
              <button key={index} className="px-4 py-2 rounded-2xl w-fit hover:scale-125 maskedLine-animation" onClick={() => handleButton(item.id)}>
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
