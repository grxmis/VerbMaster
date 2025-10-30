import type { Express } from "express";
import { createServer, type Server } from "http";
import { conjugateVerb } from "./conjugation";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/conjugate/:verb - Get conjugations for a verb
  app.get("/api/conjugate/:verb", (req, res) => {
    const verb = req.params.verb?.toLowerCase().trim();
    
    if (!verb) {
      return res.status(400).json({ error: "Verb is required" });
    }
    
    if (!/^[a-z]+$/.test(verb)) {
      return res.status(400).json({ error: "Verb must contain only letters" });
    }
    
    try {
      const conjugation = conjugateVerb(verb);
      res.json(conjugation);
    } catch (error) {
      console.error("Error conjugating verb:", error);
      res.status(500).json({ error: "Failed to conjugate verb" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
