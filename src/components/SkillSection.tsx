/* eslint-disable @next/next/no-img-element */
import React from "react";
import SkillTable from "./SkillTable";
import { innerText } from "@/lib/para";

export default function SkillSection() {
  return (
    <section id="about" className="bg-background skillCard rounded-b-xl w-full z-10 ">
      <nav className="grid sm:grid-rows-2 mt-[10vh] lg:grid-cols-2 lg:grid-rows-1">
        <h3 style={{}} className="text-[12vw] hidden sm:flex  font-popins text-silverMain row-start-2  justify-center items-center text-center md:row-start-1 lg:col-span-1  lg:text-[7vw]">
          Data & Business Analyst
        </h3>
        <div className="row-start-1 flex flex-col gap-[6vh]  md:row-start-2 lg:col-span-1 lg:row-start-1">
          <h1 style={{ fontWeight: 600 }} className="tracking-tighter text-silverMain w-fit mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-popins-700 charsReveling-animation">
            Skills
          </h1>
          <SkillTable />
        </div>
      </nav>
      <main className="grid grid-rows-2 grid-cols-15 gap-y-[8vh] mb-[6vh] font-popins w-full md:grid-rows-10 md:mb-0">
        <div className="col-start-2 col-span-13 rounded-xl md:col-span-4 md:col-start-2 md:row-span-10 flex justify-between items-center">
          <img src="/images/bgImage2.webp" alt="image" className="w-fit h-fit object-contain rounded-xl" />
        </div>
        <div className="flex flex-col col-start-2 col-span-13 gap-y-12  text-silverMain md:col-start-7 md:col-end-14 items-center justify-center md:row-start-2 md:row-end-9">
          <h3 className="text-xl">{innerText.AboutMEHeading}</h3>

          <p className="text-balance text-base flex gap-6 flex-col text-silverText">
            <span>(About Me)</span>
            <span>{innerText.AboutMEPara[0]}</span>
            <span>{innerText.AboutMEPara[1]}</span>
          </p>
        </div>
      </main>
    </section>
  );
}
