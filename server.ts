import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Groq SDK Lazy Initialization
  let groq: Groq | null = null;
  function getGroq() {
    if (!groq) {
      const apiKey = process.env.GROQ_API_KEY;
      if (!apiKey) {
        throw new Error("GROQ_API_KEY is not defined in environment variables");
      }
      groq = new Groq({ apiKey });
    }
    return groq;
  }

  // API Route for Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const client = getGroq();

      const completion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are the customer support assistant for Astrateq Gadgets (or SafeGuard Sentinel).
            Your goal is to answer questions about the Family Safety Bundle (Sentinel X).
            
            Key Product Info:
            - SafeGuard Sentinel X: A proactive AI safety system for cars.
            - Focus: Aging drivers and teenagers.
            - Features: Proactive alerts (icy roads, hazards), 5-minute setup, privacy-first (no cloud), winter-tested.
            - Reservation: $25 fully refundable deposit.
            - Shipping: Spring 2025.
            - Brand: Premium, trustworthy, Canadian (tested in Ontario/Alberta).
            
            Guidelines:
            - Be reassuring, professional, and clear.
            - Never promise accident prevention.
            - Avoid overly technical jargon.
            - Emphasize privacy and no subscriptions.`
          },
          ...messages
        ],
        model: "llama-3.3-70b-versatile",
      });

      res.json({ message: completion.choices[0]?.message?.content || "No response." });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to fetch response from AI." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
