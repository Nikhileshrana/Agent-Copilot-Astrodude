"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Chatbox from '@/app/components/Chatbox';
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Bot() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <div className='absolute z-50 p-3 w-full flex justify-end'>
          <Button variant="destructive" onClick={() => signOut()}>Sign Out</Button>
        </div>
        <br />
        <Header />
        <Chatbox />
        <ShootingStars />
        <StarsBackground />
      </>
    );
  } else {
    return (
      <div className='w-fit mx-auto my-[45vh]'>
        <Button variant="default" onClick={() => signIn("github")}>Sign In via Github</Button>
      </div>
    );
  }
}
