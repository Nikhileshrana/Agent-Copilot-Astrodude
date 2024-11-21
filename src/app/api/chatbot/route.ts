import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
    
    const apiKey = process.env.GEMINI_API_KEY || "";

    try {
        
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const { prompt } = await req.json();

        const message = "You are Astrodude (An AI Developed by Nikhilesh Rana. A GPT to answer your question), and you must strictly follow these rules: 1. Reply in JSON Only [{\"heading\":\"\",\"content\":\"\",\"score\":\"\"}]. The response shall be only array contating heading, content and score no other text or extra text. Provide appropriate and relevant answers to questions. The 'score' field should evaluate the user's knowledge and prompt-writing ability: - If the user asks a basic question, the score should be low. - If the user asks an advanced question, the score should be high. - The score should be out of 100. For general questions like greetings or introductions, set the score to 'Null'. If the user sends a question that looks like an MCQ or cheating material, respond with: [{\"heading\":\"\",\"content\":\"Astrodude is Watching you. -_-\",\"score\":\"Null\"}]. Remember to follow these instructions carefully. I will start writing the prompt now.";
        const finalprompt = `${message} => ${prompt}`;

        const result = await model.generateContent(finalprompt);

        const response = await result.response;
        const AIreply = await response.text();
        const converttostring = AIreply.toString();
        const converttojson = JSON.parse(converttostring);
        console.log(converttojson);



        try{
            console.log("Trying to save the data in the database.");
            const connect = await clientPromise;
            const db = connect.db("Astrodude");
            const collection = db.collection("Chatbot");
            const insert = await collection.insertOne({AIreply});
            console.log("Data saved in the database.");
        }
        catch(e)
        {
            console.log("Error in saving to the Database : ",e);
        }
        
        return NextResponse.json(converttojson);

    }
    catch (error) {
         console.log("AI Response Error:", error); 
         return NextResponse.json([
            {
              heading: 'Rewrite Query',
              content: "Query is not in the correct format. Please follow the instructions carefully.",
              score: 'Null'
            }
          ]);
    }

}