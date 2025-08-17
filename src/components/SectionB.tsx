import { innerText } from "@/lib/para";
import React from "react";

export default function SectionB() {
  return (
    <section id="services" className="w-full h-fit md:px-0 px-12 py-[10vh] bg-background text-creamBackground box-b relative  z-30 rounded-t-2xl flex flex-col justify-center items-center md:rounded-t-3xl lg:rounded-t-4xl">
      <main>
        <h1 className="text-[10vw] mb-[4svh] font-popins charsReveling-animation md:mx-12">WHAT I DO</h1>
        <div className=" grid-cols-5 md:grid gap-6">
          <p className="text-silverTextSecondary my-[1svh] text-lg col-span-1 md:col-start-3 md:text-end">(SERVICES)</p>
          <p className="w-4/5 text-base text-silverText text-balance col-start-4 col-span-2 md:w-full md:px-5 md:text-xl xl:text-2xl 2xl:text-3xl image-animation">{innerText.WhatIDO}</p>
        </div>
      </main>
    </section>
  );
}
