"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import useAnimatedText from "@/hooks/useAnimatedText";
import useSectionAnimation from "@/hooks/useSectionAnimation";
import Header from "@/components/Header";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import CardSection from "@/components/CardSection";
import WorksSection from "@/components/WorksSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useLocalTime from "@/hooks/useLocalTime";

export default function HomePage() {
  useAnimatedText();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [container, scrollRef] = useSectionAnimation();
  const time = useLocalTime();

  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">
        <div className="bg-creamBackground ">
          <Header scrollRef={scrollRef} />
          <SectionA scrollRef={scrollRef} />
        </div>
        <div className="m-0 p-0 bg-background  rounded-t-2xl md:rounded-t-3xl lg:rounded-t-4xl">
          <SectionB />
          <CardSection />

          <WorksSection />
          <section style={{ marginBottom: "90px" }} className="bg-creamBackground relative flex flex-col items-center justify-center">
            {/* skills */}
            <SkillSection />
            {/* contact  */}
            <ContactSection />
            <Footer scrollRef={scrollRef} />
            <div className="w-full flex h-[10svh] justify-end items-start px-10 font-anonymous md:text-lg font-[600] text-creamText">{time}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
