import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

// Initialize GenAI
let ai: GoogleGenAI | null = null;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const getNutritionAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the nutrition database right now (API Key missing).";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are the official Nutrition Assistant for Pak McDonald's, a fast-food restaurant.
      Your tone is friendly, helpful, and concise.
      You help customers with:
      1. Allergen information.
      2. Calorie counting for combinations of items.
      3. Suggesting healthier alternatives from a standard fast-food menu (e.g., grilled chicken vs crispy, salad sides).
      
      Do not make up menu items that don't typically exist in a burger QSR. 
      Keep answers under 80 words if possible.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't find that information right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble processing your request. Please try again later.";
  }
};