"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Header() {

  const topwords = "Nikhilesh's Judgement AI.";


  return (
    <>
   
    <div className="h-fit w-full flex flex-col justify-center items-center px-4">
        <TextGenerateEffect className="p-5 sm:p-16 font-semibold" duration={2} filter={false} words={topwords} />
    </div>
    
    </>
  );
}
