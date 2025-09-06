<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:zion-ai-assistant/src/server/index.ts
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/server/index.ts
import "dotenv / config",
import express from './express';,
import cors from './cors';,
import { z  } from './zod';,
import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,
import { generate_milestones  } from './milestone_generator.js';,
const app = express (),
app.use (cors ()),
app.use (express.json ({ limit: "1mb" })),
const input_schema = z.object ({
  scopeOfWork: z.string ().min (10),
  startDateIso: z.string ().datetime (),
  endDateIso: z.string ().datetime (),
  project_type: z.enum (["Web Dev", "AI / ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
}),
app.post ("/api / ai / milestones", async (req, res) => {
  try {
    const input = input_schema.parse (req.body) as MilestoneSuggestionInput,
    const response: MilestoneSuggestionResponse = await generate_milestones (input),
    res.json (response);
  } catch (error) {
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Invalid input", details: error.issues });
=======

=======
<<<<<<< HEAD
import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js";
import { generateMilestones } from "./milestoneGenerator.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
const inputSchema = z.object({scopeOfWork: z.string().min(10);
  startDateIso: z.string().datetime();
  endDateIso: z.string().datetime();
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
});
app.post("/api/ai/milestones", async (req, res) => {try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);
  } catch (error) {if (error instanceof z.ZodError) {;
      return res.status(400).json({ error: "Invalid input", details: error.issues });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to generate milestones" });
  }
});
const port = process.env.PORT ? Number(process.env.PORT) : 4321;
app.listen(port, () => {// // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import "dotenv/config",;
import express from "express",;
import cors from "cors",;
import { z } from "zod",;
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",;
import { generateMilestones } from "./milestoneGenerator.js",;
const app = express(),;
app.use(cors()),;
app.use(express.json({ limit: "1mb" })),;
const inputSchema = z.object({;
  scopeOfWork: z.string().min(10),;
  startDateIso: z.string().datetime(),;
  endDateIso: z.string().datetime(),;
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
}),;
app.post("/api/ai/milestones", async (req, res) => {;
  try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,;
    const response: MilestoneSuggestionResponse = await generateMilestones(input),;
    res.json(response);
  } catch (error) {;
    if (error instanceof z.ZodError) {;
      return res.status(400).json({ error: "Invalid input", details: error.issues });
<<<<<<< HEAD

    }
    console.error (error),
    res.status (500).json ({ error: "Failed to generate milestones" });
  }
<<<<<<<< HEAD:zion-ai-assistant/src/server/index.ts

=======
    }
    console.error(error),;
    res.status(500).json({ error: "Failed to generate milestones" });
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}),;
const port = process.env.PORT ? Number(process.env.PORT) : 4321,;
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
});
========
}),
const port = process.env.PORT ? Number (process.env.PORT) : 4321,
app.listen (port, () => {
  // // // console.log (`zion - ai - assistant listening on http://localhost:${port}`);
});
=======
import "dotenv/config",;
import express from "express",;
import cors from "cors",;
import { z } from "zod",;
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",;
import { generateMilestones } from "./milestoneGenerator.js",;
;
const app = express(),;
app.use(cors()),;
app.use(express.json({ limit:"1mb" })),;
;
const inputSchema = z.object({;
  scopeOfWork:z.string().min(10),;
  startDateIso:z.string().datetime(),;
  endDateIso:z.string().datetime(),;
  projectType:z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
}),;
;
app.post("/api/ai/milestones", async (req, res) => {;
  try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,;
    const response:MilestoneSuggestionResponse = await generateMilestones(input),;
    res.json(response);
  } catch (error) {;
    if (error instanceof z.ZodError) {;
      return res.status(400).json({ error:"Invalid input", details:error.issues }),;
    }
    console.error(error),;
    res.status(500).json({ error:"Failed to generate milestones" }),;
  }
}),;
;
const port = process.env.PORT ? Number(process.env.PORT) :4321,;
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`),;}),
 
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/server/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
