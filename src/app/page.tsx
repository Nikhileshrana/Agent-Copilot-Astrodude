"use client";
import React from "react";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function ShootingStarsAndStarsBackgroundDemo() {


  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "things",
    },
    {
      text: "with",
    },
    {
      text: "Astrodude.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>Astroverse</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Agent Co-Pilot</span>
      </h2>
      <br />




      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link className="z-50" href="/Frontend_Architecture">
        <button className="w-40 h-10 z-50 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Know More.
        </button>
        </Link>

        <Link className="z-50" href="/Bot">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Start Now.
        </button>
        </Link>

      </div>



      <ShootingStars />
      <StarsBackground />
    </div>
  );
}