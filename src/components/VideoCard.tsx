/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export type VideoCardInfo = {
  imageLink: string;
  videoLink: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

export default function VideoCard({ cardInfo, className, id }: { cardInfo: VideoCardInfo; className?: string; id?: string }) {
  const router = useRouter();
  return (
    <div id={id} className={`flex flex-col max-w-full mx-6 ${className}`}>
      <div className="max-w-full aspect-square relative" onClick={() => router.push(cardInfo.projectLink)}>
        <img className="w-full h-full object-cover rounded-lg " src={cardInfo.imageLink} alt="s" />
        <div className="absolute z-10 w-full h-full flex justify-center items-center top-0 px-12 left-0">
          <video autoPlay loop muted playsInline className="w-full aspect-[1.3/1] object-cover rounded-lg " src={cardInfo.videoLink} />
        </div>
      </div>
      <div className="mt-2 mb-3" style={{ lineHeight: 1.2 }}>
        <h3 className="text-sm text-silverText scrambleText-animation">{cardInfo.projectDescription}</h3>
        <h3 style={{ fontSize: "25px", fontWeight: 1000 }} className="text-silverMain scrambleText-animation">
          {cardInfo.projectName}
        </h3>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={cardInfo.projectLink}>
          <button className="text-silverText border border-silverText px-1.5 py-0.5 text-xxs rounded-2xl">DEVELEPOMENT</button>
        </Link>
        <Link href={cardInfo.projectLink}>
          <button className="text-black bg-silverText border border-silverText text-xxs px-1.5 py-0.5 rounded-2xl">2025</button>
        </Link>
      </div>
    </div>
  );
}
