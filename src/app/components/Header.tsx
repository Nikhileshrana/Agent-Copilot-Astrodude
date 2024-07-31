"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Header() {

  const topwords = "Discover your strengths and elevate your knowledge with Nikhilesh's Judgement AI. Powered by a large, lightning-fast model, our AI evaluates your Prompt to the fullest.";


  return (
    <>
    <TextGenerateEffect className="p-5 sm:p-16 font-semibold" duration={2} filter={false} words={topwords} />
    </>
  );
}
