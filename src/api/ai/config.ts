import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || "AIzaSyB4xf6xn5sBqfUYHrMVsmJtDbvsvzrg4PA"
);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateContent(prompt: string) {
  const result = await model.generateContent(prompt);

  let data = result.response.text();
  data = data.replaceAll("**", "");
  data = data.replaceAll("##", "");
  return data;
}
