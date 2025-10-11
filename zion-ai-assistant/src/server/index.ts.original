import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { MilestoneSuggestionInput, MilestoneSuggestionResponse } from "../shared/types.js";
import { generateMilestones } from "./milestoneGenerator.js";
      return res.status(400).json({ error: "Invalid input", details: error.issues });
    }
    console.error(error);
    res.status(500).json({ error: "Failed to generate milestones" });
  }
});
});