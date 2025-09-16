import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";

  const instanceSlug = toSlug(input.instanceName);
  const baseDir = path.join(process.cwd(), "data", "deployments", instanceSlug);
  const docsDir = path.join(process.cwd(), "docs");
  const eventsDir = path.join(process.cwd(), "data", "events");
  const gptDir = path.join(process.cwd(), "data", "zion-gpt");
  const daoDir = path.join(process.cwd(), "data", "dao");
  const tokenDir = path.join(process.cwd(), "data", "token");
  const configPath = path.join(baseDir, "config.json");
  writeTextFile(configPath, JSON.stringify({ ...input, instanceSlug, version, createdAt: nowIso() }, null, 2));
  logs.push({ timestamp: nowIso(), level: "info", action: "save_config", details: { configPath } });
  assets.push({ kind: "config", path: configPath, description: "Deployment config" });
    const promptBasePath = path.join(gptDir, `${instanceSlug}-prompt-base.md`);
    const promptBase = `# ZionGPT Prompt Base\n\nInstance: ${input.instanceName}\nLanguage: ${input.defaultLanguage}\nGovernance: ${input.governanceMode}\n\nBehaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`;
    writeTextFile(promptBasePath, promptBase);
    assets.push({ kind: "file", path: promptBasePath, description: "ZionGPT prompt base" });
    logs.push({ timestamp: nowIso(), level: "info", action: "zion_gpt_initialized" });
  }
          "/about",
          "/manifesto",
          "/constitution",
          "/partners",
          "/academy",
          "/marketplace",
          "/dao",
