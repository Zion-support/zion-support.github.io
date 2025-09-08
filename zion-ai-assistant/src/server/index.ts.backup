<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
});

;
})import "dotenv / config",import express from './express';,import cors from './cors';,import { z  } from './zod';,import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,import { generate_milestones  } from './milestone_generator.js';,const app = express (),app.use (cors ()),app.use (express.json ({ limit: "1mb" })),const input_schema = z.object ({scopeOfWork: z.string ().min (10),startDateIso: z.string ().datetime (),endDateIso: z.string ().datetime (),project_type: z.enum (["Web Dev", "AI / ML", "DevOps", "Mobile", "Data Engineering", "Other"])}),app.post ("/api / ai / milestones", async (req, res) => {try {const input = input_schema.parse (req.body) as MilestoneSuggestionInput,const response: MilestoneSuggestionResponse = await generate_milestones (input),res.json (response)} catch (error) {// Check condition;
if ( {) {$2;
}
      return res.status (400).json ({ error: "Invalid input", details: error.issues })import "dotenv/config",import express from "express",import cors from "cors",import { z } from "zod",import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",import { generateMilestones } from "./milestoneGenerator.js",const app = express()const app = express()const app = express()app.use(cors()),app.use(express.json({ limit: "1mb" })),const inputSchema = z.object({scopeOfWork: z.string().min(10),startDateIso: z.string().datetime(),endDateIso: z.string().datetime(),projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"])}),app.post("/api/ai/milestones", async (req, res) => {try {const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,const response: MilestoneSuggestionResponse = await generateMilestones(input),res.json(response)} catch (error) {if (error instanceof z.ZodError) {return res.status(400).json({ error: "Invalid input", details: error.issues })}
    console.error (error),res.status (500).json ({ error: "Failed to generate milestones" })}}
    console.error(error),res.status(500).json({ error: "Failed to generate milestones" })}}),const port = process.env.PORT ? Number(process.env.PORT) : 4321,app.listen(port, () => {// // // console.log(`zion-ai-assistant listening on http://localhost:${port}`)}),const port = process.env.PORT ? Number (process.env.PORT) : 4321,app.listen (port, () => {// // // console.log (`zion - ai - assistant listening on http://localhost:${port}`)})const app = express(),app.use(cors()),app.use(express.json({ limit:"1mb" })),const inputSchema = z.object({scopeOfWork:z.string().min(10),startDateIso:z.string().datetime(),endDateIso:z.string().datetime(),projectType:z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"])}),app.post("/api/ai/milestones", async (req, res) => {try {const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,const response:MilestoneSuggestionResponse = await generateMilestones(input),res.json(response)} catch (error) {if (error instanceof z.ZodError) {return res.status(400).json({ error:"Invalid input", details:error.issues })}
    console.error(error),res.status(500).json({ error:"Failed to generate milestones" })}
}),const port = process.env.PORT ? Number(process.env.PORT) :4321,app.listen(port, () => {// // // console.log(`zion-ai-assistant listening on http://localhost:${port}`)})}
})})})})})})})

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import "dotenv / config",
import express from './express';,
import cors from './cors';,
import { z  } from './zod';,
import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { generate_milestones  } from './milestone_generator.js';,
const app = express (),
app.use (cors ()),
app.use (express.json ({ limit: "1mb" })),
const input_schema = z.object ({
  scopeOfWork: z.string ().min (10),
  startDateIso: z.string ().datetime (),
  endDateIso: z.string ().datetime (),
  project_type: z.enum (["Web Dev", "AI / ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js";
import { generateMilestones } from "./milestoneGenerator.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

  startDateIso: z.string().datetime();
  endDateIso: z.string().datetime();
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
});

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
app.post("/api/ai/milestones", async (req, res) => {
  try {
    const input = $2;
    const response: MilestoneSuggestionResponse = await generateMilestones($2);
    res.json(response)
  } catch (error) {

    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input", details: error.issues })
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    console.error(error);
    res.status(500).json({ error: "Failed to generate milestones" });
  }
});
const port = process.env.PORT ? Number(process.env.PORT) : 4321;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}),;
const port = process.env.PORT ? Number(process.env.PORT) : 4321,;
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);


});
});


});
});});
const port = $2;
app.listen(port, () => {
  console.log(`zion-ai-assistant listening on http://localhost:${port}`)
}),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
