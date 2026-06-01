import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import foodModel from "../models/foodModel.js";

const aiRouter = express.Router();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

aiRouter.post("/food-assistant", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || message.trim() === "") {
      return res.status(400).json({
        message: "Message is required",
      });
    }
    const foods = await foodModel.find({}).limit(40);

    const foodListText = foods
      .map((food) => {
        return `
        
             Name: ${food.name}
            Description: ${food.description}
            Price: ${food.price}
            Category: ${food.category}
            
            
            
            `;
      })
      .join("\n---\n");
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 600,
      system: `
         You are an AI food assistant for a food delivery app.
         Rules:
       1. Recommend only food from the provided food list.
       2. Do not invent food.
       3. Do not show MongoDB IDs.
       4. Do not use Markdown formatting.
       5. Do not use asterisks like **.
       6. Answer in simple clean text.
       7. Keep the answer short and friendly.
       8. Mention food names, prices, and why they match.
       9. Always show prices with a dollar sign like $12


        
        
        
        `,
      messages: [
        {
          role: "user",
          content: `
                User request: ${message}
                Available food from MongoDB: ${foodListText}
                Find the best matching food items.
                Answer format:
                Recommendation:
                Food name - price
                Short reason.

                
                `,
        },
      ],
    });

    res.json({
      reply: response.content[0].text,
      usage: response.usage,
    });
  } catch (error) {
    console.error("AI assistant error", error);
    res.status(500).json({
      message: "AI assistant error",
    });
  }
});
export default aiRouter;
