import React from 'react';
import Header from '@/app/components/Header';
import Chatbox from '@/app/components/Chatbox';
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function page() {
  return (
    <>
    <Header></Header>
    <Chatbox></Chatbox>
    <ShootingStars />
    <StarsBackground />
    </>
  )
}

