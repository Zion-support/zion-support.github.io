<<<<<<< HEAD
import "dotenv/config",
import express from "express",
import cors from "cors",
import { z } from "zod",
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",
import { generateMilestones } from "./milestoneGenerator.js",
const app = express(),
app.use(cors()),
app.use(express.json({ limit: "1mb" })),

const inputSchema = z.object({
  scopeOfWork: z.string().min(10),
  startDateIso: z.string().datetime(),
  endDateIso: z.string().datetime(),
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"])
}),

app.post("/api/ai/milestones", async (req, res) => {
  try {
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,
    const response: MilestoneSuggestionResponse = await generateMilestones(input),
    res.json(response)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input", details: error.issues })
    }
    console.error(error),
    res.status(500).json({ error: "Failed to generate milestones" })
=======
import "dotenv/config";
import express from "express";
import cors from "cors";

const _app = express();
app.use(cors());
app.use(express.json({_limit: "1mb"}));

const _inputSchema = z.object({_scopeOfWork: z.string().min(10), _startDateIso: z.string().datetime(), _endDateIso: z.string().datetime(), _projectType: z.enum(["Web Dev", _"AI/ML", _"DevOps", _"Mobile", _"Data Engineering", _"Other"])});

app.post(_"/api/ai/milestones", _async (req, _res) => {_try {
    const _input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);} catch (error) {_if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input", _details: error.issues});
    }
    
    res.status(500).json({_error: "Failed to generate milestones"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),

<<<<<<< HEAD
const port = process.env.PORT ? Number(process.env.PORT) : 4321,
app.listen(port, () => {
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`)
}),
=======
const _port = process.env.PORT ? Number(process.env.PORT) : 4321;
app.listen(_port, _() => {});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
