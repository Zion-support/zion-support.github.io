<<<<<<< HEAD
<<<<<<< HEAD
});
=======


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import "dotenv / config",
import express from './express';,
import cors from './cors';,
import { z  } from './zod';,
import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,
=======




import "dotenv / config",;
import express from './express';,'
import cors from './cors';,'
import { z  } from './zod';,'
import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { generate_milestones  } from './milestone_generator.js';,
});
import "dotenv / config",;


import "dotenv / config",""
pr-12325
import express from './express';,;
import cors from './cors';,;
import { z  } from './zod';,;
import { MilestoneSuggestionInput, MilestoneSuggestionResponse  } from '../shared / types.js';,;
import { generate_milestones  } from './milestone_generator.js';,;
const app = express (),
app.use (cors ()),"
app.use (express.json ({ limit: "1mb" })),
const input_schema = z.object ({}
  scopeOfWork: z.string ().min (10),
  startDateIso: z.string ().datetime (),
  endDateIso: z.string ().datetime (),"
  project_type: z.enum (["Web Dev", "AI / ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
<<<<<<< HEAD
}),"
app.post ("/api / ai / milestones", async (req, res) => {}
  try {}
=======
}),
app.post ("/api / ai / milestones", async (req, res) => {
  try {
app.use (express.json ({ limit: "1mb" })),"
const input_schema = z.object ({)
  scopeOfWork: z.string ().min (10),
  startDateIso: z.string ().datetime (),
  endDateIso: z.string ().datetime (),"
  project_type: z.enum (["Web Dev", "AI / ML", "DevOps", "Mobile", "Data Engineering", "Other"]);"
}),"
app.post ("/api / ai / milestones", async (req, res) => {"
  try {
  // TODO: Implement
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const input = input_schema.parse (req.body) as MilestoneSuggestionInput,
    const response: MilestoneSuggestionResponse = await generate_milestones (input),
    res.json (response);
  } catch (error) {}
    // Check condition;
if ( {) {}
  $2;
}"
      return res.status (400).json ({ error: "Invalid input", details: error.issues });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js";
import { generateMilestones } from "./milestoneGenerator.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
<<<<<<< HEAD
const inputSchema = z.object({;
  scopeOfWork: z.string().min(10);
=======
const inputSchema = z.object({scopeOfWork: z.string().min(10);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  startDateIso: z.string().datetime();
  endDateIso: z.string().datetime();
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
});
<<<<<<< HEAD
app.post("/api/ai/milestones", async (req, res) => {;
  try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);
  } catch (error) {;
    if (error instanceof z.ZodError) {;
=======
app.post("/api/ai/milestones", async (req, res) => {try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);
  } catch (error) {if (error instanceof z.ZodError) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return res.status(400).json({ error: "Invalid input", details: error.issues });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to generate milestones" });
  }
});
const port = process.env.PORT ? Number(process.env.PORT) : 4321;
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.listen(port, () => {// // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
app.listen(port, () => {// // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import "dotenv/config",;
import express from "express",;
import cors from "cors",;
import { z } from "zod",;
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",;
=======



"
import "dotenv/config",;"
import express from "express",;"
import cors from "cors",;"
import { z } from "zod",;"
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { generateMilestones } from "./milestoneGenerator.js",;
const app = express(),;
app.use(cors()),;"
app.use(express.json({ limit: "1mb" })),;
const inputSchema = z.object({;
  scopeOfWork: z.string().min(10),;
  startDateIso: z.string().datetime(),;
  endDateIso: z.string().datetime(),;"
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
}),;"
app.post("/api/ai/milestones", async (req, res) => {;
    // Check condition;
if ( {) {
  $2;
}"
      return res.status (400).json ({ error: "Invalid input", details: error.issues });""
import "dotenv/config",;""
import express from "express",;""
import cors from "cors",;""
import { z } from "zod",;""
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js",;""
import { generateMilestones } from "./milestoneGenerator.js",;"
const app = express(),;
app.use(cors()),;"
app.use(express.json({ limit: "1mb" })),;"
const inputSchema = z.object({;)
  scopeOfWork: z.string().min(10),;
  startDateIso: z.string().datetime(),;
  endDateIso: z.string().datetime(),;"
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);"
}),;"
app.post("/api/ai/milestones", async (req, res) => {;"
pr-12325
  try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput,;
    const response: MilestoneSuggestionResponse = await generateMilestones(input),;
    res.json(response);
  } catch (error) {;
    if (error instanceof z.ZodError) {;"
      return res.status(400).json({ error: "Invalid input", details: error.issues });
<<<<<<< HEAD
<<<<<<< HEAD
=======


    }
    console.error (error),"
    res.status (500).json ({ error: "Failed to generate milestones" });
  }




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======






    }
    console.error (error),
    res.status (500).json ({ error: "Failed to generate milestones" });
  }

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    }
    console.error(error),;
    res.status(500).json({ error: "Failed to generate milestones" });
  }





    if (error instanceof z.ZodError) {;"
      return res.status(400).json({ error: "Invalid input", details: error.issues });"
    console.error (error),"
    res.status (500).json ({ error: "Failed to generate milestones" });"

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}),;
const port = process.env.PORT ? Number(process.env.PORT) : 4321,;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});});
=======

});




});

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
});});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

});
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
});

});
});
});


const inputSchema = z.object({;
  scopeOfWork: z.string().min(10);
  startDateIso: z.string().datetime();
  endDateIso: z.string().datetime();
  projectType: z.enum(["Web Dev", "AI/ML", "DevOps", "Mobile", "Data Engineering", "Other"]);
});
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
app.post("/api/ai/milestones", async (req, res) => {;
  try {;
    const input = inputSchema.parse(req.body) as MilestoneSuggestionInput;
    const response: MilestoneSuggestionResponse = await generateMilestones(input);
    res.json(response);
  } catch (error) {;
    if (error instanceof z.ZodError) {;
      return res.status(400).json({ error: "Invalid input", details: error.issues });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to generate milestones" });
  }
});
const port = process.env.PORT ? Number(process.env.PORT) : 4321;
app.listen(port, () => {;
  // // // console.log(`zion-ai-assistant listening on http://localhost:${port}`);
});


"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
