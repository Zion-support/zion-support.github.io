import &quot;dotenv/config&quot;;
import express from &quot;express&quot;;
import cors from &quot;cors&quot;;
import { z } from &quot;zod&quot;;
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from &quot;../shared/types.js&quot;;
import { generateMilestones } from &quot;./milestoneGenerator.js&quot;;

const app = express();
app.use(cors());
app.use(express.json({ limit: &quot;1mb&quot; }));

const inputSchema = z.object({
  scopeOfWork: z.string().min(10),
  startDateIso: z.string().datetime(),
  endDateIso: z.string().datetime(),
  projectType: z.enum([&quot;Web Dev&quot;, &quot;AI/ML&quot;, &quot;DevOps&quot;, &quot;Mobile&quot;, &quot;Data Engineering&quot;, &quot;Other&quot;])
});

app.post(&quot;/api/ai/milestones&quot;, async (req, res) => {
  try {
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: &quot;Invalid input&quot;, details: error.issues });
    }
    console.error(error);
    res.status(500).json({ error: &quot;Failed to generate milestones&quot; });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 4321;
app.listen(port, () => {
  // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
});