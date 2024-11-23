"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { useSession, signIn, signOut } from "next-auth/react";


export default function Chatbox() {

    const { data: session } = useSession();

    interface PromptReply {
        heading: string;
        content: string;
        score?: number;
    }

    const [prompt, setprompt] = useState("");

    const [managerreply, setmanagerreply] = useState<PromptReply | null>({ heading: `Hi! 👋 ${session?.user?.name}! What can i help you with today? Eg. Ask me if i will take over you hoomans :))`, content: "" })

    const placeholders = [
        "Who Invented Next.JS?",
        "is AI going to take over the world?",
        "Who are you?",
        "Write a Javascript method to reverse a string",
        "What is an Array?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setprompt(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log("Sending the Prompt Accordingly.");
            const response = await axios.post("/api/chatbot", { prompt });
            console.log(response.data.response);
            console.log(response.data.response.slice(7,-4));

            const reply = JSON.parse(response.data.response.slice(7,-4));
            console.log(reply);
            setmanagerreply(reply);

        } catch (error) {
            console.error('Error sending prompt:', error);
        }
    };

    return (
        <>
            <div className="h-fit w-full flex flex-col justify-center items-center px-4">
                <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>

            <div className='w-[90vw] sm:w-[70vw] h-fit mx-auto my-0 text-justify'>
                {managerreply && managerreply.heading && (
                    <TextGenerateEffect words={managerreply.heading} key={managerreply.heading} />
                )}
                {managerreply && managerreply.content && (
                    <TextGenerateEffect words={managerreply.content} key={managerreply.content} />
                )}
            </div>

        </>
    );
}
