import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { sendContactEmail } from "./server/mail";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini Setup
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  app.post("/api/contact", async (req, res) => {
    try {
      const name = String(req.body?.name ?? "").trim();
      const email = String(req.body?.email ?? "").trim();
      const message = String(req.body?.message ?? "").trim();

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ error: "Please enter a valid email address." });
      }

      if (message.length > 5000) {
        return res.status(400).json({ error: "Message is too long." });
      }

      await sendContactEmail({ name, email, message });
      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        error: "Unable to send your message right now. Please try again or email directly.",
      });
    }
  });

  app.post("/api/audit", async (req, res) => {
    try {
      const { industry, goal, budget } = req.body;
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are a Digital Marketing Specialist portfolio assistant for Muhammad Ahsan. 
      A potential client in the ${industry} industry with a goal of ${goal} and a monthly budget of ${budget} is looking for advice.
      Provide 3 concise, high-impact tactical recommendations for Google Ads or Meta Ads. 
      Keep it professional, encouraging, and mention that Muhammad Ahsan can help implement this. 
      Format the response as clear bullet points.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      res.json({ strategy: response.text() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate strategy" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
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
