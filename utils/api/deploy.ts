import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 64)
}

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true})
  }
}

function writeTextFile(filePath: string, content: string) {
  ensureDir(path.dirname(filePath)),
  fs.writeFileSync(filePath, content, "utf8")
}

function nowIso(): string {
  return new Date().toISOString()
}

export async function performDeploy(input: DeployInput): Promise<DeployResult> {
  const version = $2;
  const logs: DeployLogEntry[] = [],
  const assets: GeneratedAsset[] = [],

  const instanceSlug = toSlug($2);
  const baseDir = path.join(process.cwd(), "data", "deployments", instanceSlug),
  const docsDir = path.join(process.cwd(), "docs"),
  const eventsDir = path.join(process.cwd(), "data", "events"),
  const gptDir = path.join(process.cwd(), "data", "zion-gpt"),
  const daoDir = path.join(process.cwd(), "data", "dao"),
  const tokenDir = path.join(process.cwd(), "data", "token"),

  ensureDir($2);
  const configPath = path.join($2);
  writeTextFile(configPath, JSON.stringify({ ...input, instanceSlug, version, createdAt: nowIso() }, null, 2)),
  logs.push({ timestamp: nowIso(), level: "info", action: "save_config", details: { configPath } }),
  assets.push($2);
  // 1. Initialize ZionGPT
  if (input.modules.gpt) {
    ensureDir($2);
    const promptBasePath = path.join($2);
    const promptBase = `# ZionGPT Prompt Base\n\nInstance: ${input.instanceName}\nLanguage: ${input.defaultLanguage}\nGovernance: ${input.governanceMode}\n\nBehaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`,
    writeTextFile($2);
    assets.push($2);
    logs.push({ timestamp: nowIso(), level: "info", action: "zion_gpt_initialized" })
  }

  // 2. Deploy DAO + Token Logic
  if (input.modules.dao) {
    ensureDir($2);
    const daoConfigPath = path.join($2);
    writeTextFile(
      daoConfigPath,
      JSON.stringify(
        {
          treasury: `${instanceSlug}-treasury`,
          governanceMode: input.governanceMode,
          quorum: 0.6,
          votingPeriodDays: 7,
          constitutionDoc: `/constitution`,
          createdAt: nowIso()},
        null,
        2
      )
    ),
    assets.push($2);
    logs.push({ timestamp: nowIso(), level: "info", action: "dao_configured" })
  }

  if (input.modules.token || input.tokenActivation) {
    ensureDir($2);
    const tokenConfigPath = path.join($2);
    writeTextFile(
      tokenConfigPath,
      JSON.stringify(
        {
          symbol: "ZION$",
          decimals: 18,
          enabled: input.tokenActivation,
          stakingEnabled: input.modules.token,
          escrowEnabled: true,
          createdAt: nowIso()},
        null,
        2
      )
    ),
    assets.push($2);
    logs.push({ timestamp: nowIso(), level: "info", action: "token_configured" })
  }

  // 3. Publish Assets
  const wpPath = path.join($2);
  const roadmapPath = path.join($2);
  const changelogPath = path.join($2);
  const bookPath = path.join($2);
  const trailerScriptPath = path.join($2);
  if (input.modules.roadmapWhitepaper) {
    ensureDir($2);
    writeTextFile(
      wpPath,
      `# Zion Protocol Whitepaper (v1.0)\n\nInstance: ${input.instanceName}\nRegion: ${input.deploymentRegion}\nToken: ${input.tokenActivation ? "Enabled" : "Disabled"}\n\n## Abstract\nZion OS unifies marketplace, AI, DAO, and media into a programmable nation-state.\n`
    ),
    assets.push($2);
    logs.push({ timestamp: nowIso(), level: "info", action: "whitepaper_generated" }),

    writeTextFile($2);
    assets.push($2);
    writeTextFile(
      changelogPath,
      `# Changelog\n\n- ${nowIso()}: Genesis deployment initialized for ${input.instanceName}.\n`
    ),
    assets.push({ kind: "file", path: changelogPath, description: "Changelog" })
  }

  if (input.modules.bookBuilder) {
    ensureDir($2);
    writeTextFile($2);
    assets.push({ kind: "file", path: bookPath, description: "Zion Book (markdown source)" })
  }

  if (input.modules.launchKit) {
    ensureDir($2);
    writeTextFile($2);
    assets.push({ kind: "file", path: trailerScriptPath, description: "Trailer script" })
  }

  // Schedule launch stream (/summit)
  ensureDir($2);
  const summitEventPath = path.join($2);
  writeTextFile(
    summitEventPath,
    JSON.stringify(
      {
        name: `${input.instanceName} Summit`,
        route: "/summit",
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()},
      null,
      2
    )
  ),
  assets.push($2);
  // 4. Activate Public Pages (record intent)
  const pagesActivationPath = path.join($2);
  const defaultNationRoute = $2;
  writeTextFile(
    pagesActivationPath,
    JSON.stringify(
      {
        activate: [
          "/about",
          "/manifesto",
          "/constitution",
          "/partners",
          "/academy",
          "/marketplace",
          "/dao",
          defaultNationRoute]},
      null,
      2
    )
  ),
  assets.push($2);
  // Optional modules markers
  const optionalModules = Object.entries(input.modules)
    .filter(([key, val]) => val && ["globalMap", "franchiseOnboarding", "referralAmbassadors", "grantPortal", "trailer", "bookStore"].includes(key))
    .map(([key]) => key),

  if (optionalModules.length > 0) {
    const optionalPath = path.join($2);
    writeTextFile(optionalPath, JSON.stringify({ enabled: optionalModules}, null, 2)),
    assets.push({ kind: "config", path: optionalPath, description: "Enabled optional modules" })
  }

  const summary = `Initialized ${input.instanceName} (${instanceSlug}) with modules: ${Object.entries(input.modules)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(", ")}.`,

  logs.push({ timestamp: nowIso(), level: "info", action: "deploy_complete", details: { instanceSlug } }),

  return {
    success: true,
    instanceSlug,
    configPath,
    assets,
    logs,
    summary,
    version}
}