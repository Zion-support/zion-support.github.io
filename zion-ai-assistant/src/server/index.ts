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
  }
});

const _port = process.env.PORT ? Number(process.env.PORT) : 4321;
app.listen(_port, _() => {});