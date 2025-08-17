/* eslint-disable @next/next/no-img-element */
import { innerText } from "@/lib/para";
import { MoveUpRight } from "lucide-react";
import React, { RefObject } from "react";
export const NumberHeight = 15;

export default function SectionA({ scrollRef }: { scrollRef: RefObject<globalThis.ScrollSmoother | null> }) {
  return (
    <section className="p-0 grid grid-rows-6 md:grid-rows-12 h-svh z-0 " id="home">
      <div className="row-span-2  md:row-span-3 lg:row-span-2"></div>
      <div className="max-w-full h-full flex box-a top-0 px-6 flex-col row-span-4 md:row-span-9 relative lg:px-8 lg:row-span-10">
        <h1 style={{ lineHeight: "80%" }} className="font-popins text-black tracking-tighter flex flex-col my-4 md:flex-row md:justify-around charsReveling-animation text-[10vw] w-full md:text-[12vw] ">
          <span>PIYUSH</span>
          <span>TUTEJA</span>
        </h1>
        {/* ///// */}
        <main className="h-full grid grid-cols-3 grid-rows-8 md:px-8 overflow-auto hide-scrollbar ">
          <p style={{ lineHeight: "150%" }} className=" maskedLine-animation col-span-3 sm:col-span-2 row-span-3 col-start-1 text-creamText text-balance text-lg lg:text-xl  md:col-span-1 md:row-start-2 md:row-span-3 xl:text-2xl">
            {innerText.IntroText}
          </p>
          <div className="flex items-start text-creamBackground col-start-1 row-span-1 col-span-1 md:row-start-6 md:row-span-2 md:items-center">
            <button className=" button-animation bg-darkBackground px-5 py-3  rounded-4xl text-lg  block  h-fit w-fit md:px-6 md:py-3.5 md:text:xl">
              <span onClick={() => scrollRef.current?.scrollTo("#contact", true)} style={{ fontWeight: 560 }} className="flex items-center ">
                CONTACT
                <MoveUpRight width={16} height={16} />
              </span>
            </button>
          </div>
          <div className="h-full w-full flex items-start image-animation row-start-6 row-span-2 col-start-1 col-span-1 md:col-start-2 md:row-start-2 md:row-span-6 md:items-center ">
            <img src="/images/bgImage1.webp" alt="image" className="object-contain rounded-lg grayscale-100 md:object-cover h-full w-fit md:mx-auto  " />
          </div>
          <p className="text-creamText maskedLine-animation text-end font-popins col-start-3 row-start-7 md:row-start-6">
            <span>AVAILABLE FOR WORK</span>
            <span className="block text-4xl md:text-6xl my-2 text-darkBackground">JUN&apos;25</span>
          </p>
        </main>
      </div>
    </section>
  );
}
