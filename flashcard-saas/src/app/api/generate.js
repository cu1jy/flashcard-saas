import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

//instructs AI on how to create flashcards
const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

//makes gemini call
export async function POST(req) {
    const data = await req.text()

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: { responseMimeType: "application/json" }
    })
    const result = await model.generateContent(`${systemPrompt} ${data}`)
    const flashcards = result.response.text()

    //return flashcards as JSON response
    return NextResponse.json(flashcards.flashcards)
}
