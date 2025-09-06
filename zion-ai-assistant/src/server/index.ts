<<<<<<< HEAD
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    }
    console.error (error),
    res.status (500).json ({ error: "Failed to generate milestones" });
  }

<<<<<<< HEAD
=======
    }
    console.error(error),;
    res.status(500).json({ error: "Failed to generate milestones" });
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}),;
const port = process.env.PORT ? Number(process.env.PORT) : 4321,;
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
<<<<<<< HEAD
<<<<<<< HEAD


});
=======
}),
const port = process.env.PORT ? Number (process.env.PORT) : 4321,
app.listen (port, () => {
  // // // console.log (`zion - ai - assistant listening on http://localhost:${port}`);
});
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
});
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
