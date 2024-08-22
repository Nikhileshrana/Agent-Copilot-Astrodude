// pages/judgemental-ai.tsx
import React from 'react';
import Link from 'next/link';


export default function page(){
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-violet-300">Nikhilesh Judgemental AI</h1>
          
          <p className="text-lg mb-6 text-gray-600">
            Welcome to Judgemental AI! This AI has been developed to evaluate users based on their prompt writing skills and their knowledge on a particular topic. Here’s how it works:
          </p>
    
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">How It Works</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>The user inputs a prompt or question.</li>
            <li>The AI evaluates the prompt based on complexity, relevance, and knowledge required.</li>
            <li>The AI assigns a score based on these factors:</li>
            <ul className="list-disc list-inside ml-6 text-gray-600">
              <li><strong>Score:</strong> Reflects the user knowledge and prompt-writing ability.</li>
              <li>Basic questions receive a lower score.</li>
              <li>Advanced and complex questions receive a higher score.</li>
            </ul>
            <li>For general or irrelevant prompts, the AI sets the score to Null.</li>
            <li>For suspicious or potentially cheating-related prompts, the AI warns the user with a humorous message.</li>
          </ul>
    
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">Data Analysis</h2>
          <p className="text-lg mb-6 text-gray-800">
            All user inputs and corresponding scores are saved in a MongoDB database. This data is later analyzed to determine the user’s IQ and overall knowledge level. This analysis helps in understanding the user’s learning curve, strengths, and areas of improvement.
          </p>
    
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">Why Judgemental AI?</h2>
          <p className="text-lg mb-6 text-gray-800">
            Judgemental AI is designed to provide meaningful feedback and evaluation, offering insights into your prompt-writing abilities and knowledge base. It helps educational institutes and recruiters assess candidates more accurately based on their interaction with AI.
          </p>
    
          <h2 className="text-2xl font-semibold mb-2 text-violet-400">Try It Out!</h2>
          <p className="text-lg mb-6 text-gray-800">
            Ready to test your skills? Submit your prompt, and let Judgemental AI evaluate you!
          </p>
    
          <div className="text-center">
            <Link href="/bot" className="inline-block bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600">
            Submit a Prompt
            </Link>
          </div>
        </div>
      );
}





