"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Chatbox() {

    interface PromptReply {
        heading: string;
        content: string;
    }

    const [prompt, setprompt] = useState("");
    const [promptreply, setpromptreply] = useState<PromptReply[]>([{ heading: "Hi , Just another GPT ? Nahhh Try me out and Get Shocked !", content: "" }]);

    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
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
                <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                    Ask Astrodude Anything.
                </h2>
                <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>

            <div className='h-fit w-full p-5 text-lg sm:px-[25%] text-justify sm:text-2xl font-semibold'>
                <br />
                <b className=' text-3xl'>{promptreply[0].heading}</b>
                <br />
                {promptreply.length > 1 && promptreply[1].content}
            </div>
        </>
    );
}
