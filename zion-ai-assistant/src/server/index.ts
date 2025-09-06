import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js";
import { generateMilestones } from "./milestoneGenerator.js";
const app = express($2);
app.use(cors()),
app.use(express.json({ limit: "1mb" })),

const inputSchema = z.object({
  scopeOfWork: z.string().min($2);
  startDateIso: z.string().datetime($2);
  endDateIso: z.string().datetime($2);
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"])
}),

app.post("/api/ai/milestones", async (req, res) => {
  try {
    const input = $2;
    const response: MilestoneSuggestionResponse = await generateMilestones($2);
    res.json(response)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input", details: error.issues })
    }
    console.error($2);
    res.status(500).json({ error: "Failed to generate milestones" })
  }
}),

const port = $2;
app.listen(port, () => {
  console.log(`zion-ai-assistant listening on http://localhost:${port}`)
}),