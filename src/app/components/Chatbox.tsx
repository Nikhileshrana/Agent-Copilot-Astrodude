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
    }

    const [prompt, setprompt] = useState("");
    const [promptreply, setpromptreply] = useState<PromptReply[]>([{ heading: `Hi! 👋 ${session?.user?.name}! What can i help you with today? Eg. Ask me if i will take over you hoomans :))`, content: "" }]);

    const placeholders = [
        "Who Invented Next.JS?",
        "is AI going to take over the world?",
        "Who are you?",
        "Write a Javascript method to reverse a string",
        "What is an Array?",
    ];

    useEffect(() => {
        // Log the state whenever it updates
        console.log("Updated promptreply:", promptreply);
    }, [promptreply]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setprompt(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log("Sending the Prompt Accordingly.");
            const response = await axios.post("/api/chatbot", { prompt });
            console.log("Response data:", response.data);
            setpromptreply(response.data);

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
                <TextGenerateEffect words={promptreply[0].heading} key={promptreply[0].heading} />
                <TextGenerateEffect words={promptreply[0].content} key={promptreply[0].content} />
            </div>

        </>
    );
}
