import React from "react";
import VideoCard from "@/components/VideoCard";
import { NumberHeight } from "./SectionA";
import { workArray as arr } from "@/lib/works";
import { innerText } from "@/lib/para";

export default function WorksSection() {
  return (
    <section id="works" className="bg-background w-screen">
      <nav className="text-silverMain w-screen">
        <h1 style={{ lineHeight: "150%", fontWeight: 600 }} className="text-[7vw] mx-auto w-fit maskedLine-animation">
          SELECTED WORKS
        </h1>
        <div style={{ lineHeight: "150%" }} className="text-silverText grid text-lg grid-cols-2 sm:grid-cols-5 px-10 my-10 gap-5 lg:text-xl xl:text-2xl ">
          <span className="col-start-1 col-span-1 sm:col-start-3">(PROJECTS)</span>
          <span className="col-start-1  sm:col-start-4 text-balance col-span-2 xl:col-span-1 image-animation">{innerText.Projects}</span>
        </div>
      </nav>
      <main className="py-10 md:flex ">
        <aside className="h-full w-full hidden md:flex pl-15">
          <div style={{ height: `${NumberHeight}rem`, fontSize: `${NumberHeight - 2}rem` }} className="count w-full flex  overflow-clip  text-8xl text-silverText">
            <div>0</div>
            <div id="countNumber">
              {arr.map((info, index) => (
                <div key={index} className="h-full">
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </aside>
        <aside className="w-screen px-4 flex flex-col gap-10 videoCards">
          {arr.map((cardInfo, index) => (
            <VideoCard id={index === arr.length - 1 ? "videoCard" : ""} key={index} className="videoCard" cardInfo={cardInfo} />
          ))}
        </aside>
      </main>
    </section>
  );
}
