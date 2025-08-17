import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import gsap from "gsap";
import { NumberHeight } from "@/components/SectionA";

export default function useSectionAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<globalThis.ScrollSmoother>(null);
  useGSAP(
    () => {
      // boiler plate
      scrollRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.to(".box-a", {
        scrollTrigger: {
          trigger: ".box-b",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          pin: ".box-a",
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 40,
      });

      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");
      const spacer = 80;

      cards.forEach((card, index) => {
        gsap.to(card as HTMLDivElement, {
          scrollTrigger: {
            trigger: card as HTMLDivElement,
            start: `top top`,
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
        });
        const cIndex = index + 1;
        const total = cards.length;

        ScrollTrigger.create({
          trigger: card as HTMLDivElement,
          start: `top-=${cIndex * spacer} top`,
          endTrigger: ".cards",
          end: `bottom top+=${(card as HTMLDivElement).offsetHeight + total * spacer}`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const lastVideoCard = document.querySelector("#videoCard");

      gsap.to(".count", {
        scrollTrigger: {
          trigger: ".videoCards",
          start: `top-=30 top`,
          scrub: true,
          pin: ".count",
          end: `bottom top+=${(lastVideoCard as HTMLDivElement).offsetHeight}`,
        },
      });

      const videoCards = gsap.utils.toArray(".videoCard");
      const countNumber = document.querySelector("#countNumber");

      if (!countNumber || videoCards.length === 0) return;
      videoCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card as HTMLElement,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            const tl = gsap.timeline();
            tl.to(countNumber, {
              y: `-${index * NumberHeight}rem`,
              duration: 1,
              ease: "power2.out",
            });
            tl.to("#about", {
              y: -10,
            });
          },
          onEnterBack: () => {
            gsap.to(countNumber, {
              y: `-${index * NumberHeight}rem`,
              duration: 1,
              ease: "power2.out",
            });
          },
        });
      });
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const skillCard = document.querySelectorAll(".skillCard");
      const tl = gsap.timeline();
      tl.to(".skillCard", {
        scrollTrigger: {
          trigger: ".skillCard",
          start: `top+=${skillCard[0].clientHeight / 3} top`,
          end: `bottom top`,
          scrub: 2,
        },
        marginLeft: "10px",
        marginRight: "10px",

        scaleX: 0.94,
        y: -50,
        z: 30,
      });

      tl.to(".contact-card", {
        scrollTrigger: {
          trigger: ".skillCard",
          start: `top+=${skillCard[0].clientHeight / 1.5} top`,
          end: `bottom top`,
          scrub: 2,
        },
        y: 70,
      });

      // make it visible
      tl.to(".contact-card", {
        scrollTrigger: {
          trigger: ".skillCard",
          start: `top top`,
          end: `top top`,
          scrub: true,
        },
        visibility: "visible",
      });
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  useEffect(() => {
    return () => {
      ScrollSmoother.get()?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollRef.current = null;
    };
  }, []);
  return [container, scrollRef] as const;
}
