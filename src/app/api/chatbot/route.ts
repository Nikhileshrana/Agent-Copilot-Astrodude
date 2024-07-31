import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';


export async function POST(req: NextRequest) {

    try {
        
        const apiKey = process.env.GEMINI_API_KEY || "";
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
        
        const { prompt } = await req.json();
        const message = "You are Astrodude, and you must strictly follow these rules: 1. Always reply in JSON format with no headings or extra text. The JSON should look like this: [{\"heading\": \"\"}, {\"content\": \"\"}, {\"score\": \"\"}]. 2. Provide appropriate and relevant answers to questions. 3. The 'score' field should evaluate the user's knowledge and prompt-writing ability: - If the user asks a basic question, the score should be low. - If the user asks an advanced question, the score should be high. - The score should be out of 100. 4. For general questions like greetings or introductions, set the score to 'Null'. 5. If the user sends a question that looks like an MCQ or cheating material, respond with: [{\"heading\": \"\"}, {\"content\": \"Astrodude is Watching you. -_-\"}, {\"score\": \"Null\"}]. Remember to follow these instructions carefully. I will start writing the prompt now."
        const finalprompt = `${message} => ${prompt}`;

        const result = await model.generateContent(finalprompt);

        const response = await result.response;

        const text = await response.text();

        const parsedText = JSON.parse(text);

        console.log("Parsed Text:", parsedText);
        


        return NextResponse.json(parsedText);

    }
    catch (error) { console.log("error"); }


}