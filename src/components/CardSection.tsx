import { ProfessionalDetails as arr } from "@/lib/professionalExperience";
import React from "react";

export default function CardSection() {
  return (
    <section className="bg-background relative">
      {arr.map((item, index) => {
        const endCard = index === arr.length - 1 ? "cards" : "";
        return (
          <div key={index} className={`card w-screen h-[100svh]  relative bg-background ${endCard}`}>
            <main className="border-t-[1px] w-11/12 mx-auto border-borderColor md:grid grid-cols-3">
              <h3 style={{ fontWeight: 800 }} className="flex  grid-cols-subgrid gap-4 h-20 items-center font-popins-900  text-silverMain border-0 m-0 p-0 text-3xl tracking-tighter md:grid md:col-span-3 md:text-4xl md:gap-0">
                <span className="col-span-1">(0{index + 1})</span>
                <span className="col-span-2">{item.title}</span>
              </h3>
              <p style={{ lineHeight: "150%", fontWeight: 600 }} className="text-silverText my-10 md:col-start-2 md:col-span-2 md:text-balance md:text-lg">
                {item.description}
              </p>
              {item.points.map((data, index) => {
                return (
                  <div key={index} style={{ fontWeight: 600 }} className="border-b-[2px] border-borderColor font-anonymous-700 text-silverText text-2xl flex items-center gap-4 py-3.5 md:col-start-2 md:col-span-2">
                    <span style={{ fontWeight: 400 }} className="text-base font-mono text-silverTextSecondary">
                      0{index + 1}
                    </span>
                    <span>{data}</span>
                  </div>
                );
              })}
            </main>
          </div>
        );
      })}
    </section>
  );
}
