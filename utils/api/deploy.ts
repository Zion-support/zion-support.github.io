
import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";
function toSlug(name: string): string {return name;
import fs from "fs",;
import path from "path",;
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion",;
import fs from "fs";
import path from "path";
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset } from "../types/zion";
=======

=======
function toSlug(name: string): string {;
  return name;
=======

=======

function toSlug(name: string): string {;
  return name;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    .toLowerCase();
    .replace(/[^a-z0-9]+/g, "-");
    .replace(/(^-|-$)+/g, "");
    .slice(0, 64);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;
  // Schedule launch stream (/summit);
  ensureDir(eventsDir),;
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`),;

  // 3. Publish Assets;
  const wpPath = path.join(docsDir, `whitepaper-${instanceSlug}.md`);
  const roadmapPath = path.join(docsDir, `roadmap-${instanceSlug}.md`);
  const changelogPath = path.join(docsDir, `changelog-${instanceSlug}.md`);
  const bookPath = path.join(docsDir, `zion-book-${instanceSlug}.md`);
  const trailerScriptPath = path.join(docsDir, `trailer-script-${instanceSlug}.md`);

  if (input.modules.roadmapWhitepaper) {;
    ensureDir(docsDir);
    writeTextFile(;
      wpPath,;
      `# Zion Protocol Whitepaper (v1.0)\n\nInstance: ${input.instanceName}\nRegion: ${input.deploymentRegion}\nToken: ${input.tokenActivation ? "Enabled" : "Disabled"}\n\n## Abstract\nZion OS unifies marketplace, AI, DAO, and media into a programmable nation-state.\n`;
    ),;
    assets.push({ kind: "file", path: wpPath, description: "Whitepaper v1.0" });
    logs.push({ timestamp: nowIso(), level: "info", action: "whitepaper_generated" }),;
    writeTextFile(;
      roadmapPath,;

      `# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n`;
    );
    assets.push({ kind: "file", path: roadmapPath, description: "Public roadmap" });
    writeTextFile(;
import fs from './fs';,
import path from './path';,
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset  } from '../types / zion';,
function to_slug (name: string): string {
  return name;
    .toLowerCase ();
    .replace (/[^a - z0 - 9]+/g, "-");
    .replace (/(^-|-$)+/g, "");
    .slice (0, 64);
}
/**
 * ensure_dir - Function description
 */
function ensure_dir() {
  if () {) {
  $2
}
    fs.mkdir_sync (dir_path, { recursive: true });
  }
}
/**
 * writeTextFile - Function description
 */
function writeTextFile() {
  ensure_dir (path.dirname (file_path)),
  fs.writeFileSync (file_path, content, "utf8");
}
function now_iso (): string {
  return new Date ().toISOString ();
}
export async function perform_deploy (input: DeployInput): Promise < DeployResult> {
  const version = "Zion OS v1.0",
  const logs: DeployLogEntry[] = [],
  const assets: GeneratedAsset[] = [],
  const instance_slug = to_slug (input.instance_name),
  const base_dir = path.join (process.cwd (), "data", "deployments", instance_slug),
  const docs_dir = path.join (process.cwd (), "docs"),
  const events_dir = path.join (process.cwd (), "data", "events"),
  const gpt_dir = path.join (process.cwd (), "data", "zion - gpt"),
  const dao_dir = path.join (process.cwd (), "data", "dao"),
  const token_dir = path.join (process.cwd (), "data", "token"),
  ensure_dir (base_dir),
  const config_path = path.join (base_dir, "config.json"),
  writeTextFile (config_path, JSON.stringify ({ ...input, instance_slug, version, created_at: now_iso () }, null, 2)),
  logs.push ({ timestamp: now_iso (), level: "info", action: "save_config", details: { config_path } }),
  assets.push ({ kind: "config", path: config_path, description: "Deployment config" }),
  // 1. Initialize ZionGPT;
  // Check condition
if ( {) {
  $2
}
    ensure_dir (gpt_dir),
    const promptBasePath = path.join (gpt_dir, `${instance_slug}-prompt - base.md`),
    const prompt_base = `# ZionGPT Prompt Base\n\n_instance: ${input.instance_name}\n_language: ${input.default_language}\n_governance: ${input.governance_mode}\n\n_behaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`,
    writeTextFile (promptBasePath, prompt_base),
    assets.push ({ kind: "file", path: promptBasePath, description: "ZionGPT prompt base" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "zion_gpt_initialized" });
  }
  // 2. Deploy DAO + Token Logic;
  // Check condition
if ( {) {
  $2
}
    ensure_dir (dao_dir),
    const daoConfigPath = path.join (dao_dir, `${instance_slug}-dao.json`),
    writeTextFile (
      daoConfigPath,
      JSON.stringify (
        {
          treasury: `${instance_slug}-treasury`,
          governance_mode: input.governance_mode,
          quorum: 0.6,
          votingPeriodDays: 7,
          constitution_doc: `/constitution`,
          created_at: now_iso ()},
        null,
        2)),
    assets.push ({ kind: "config", path: daoConfigPath, description: "DAO configuration" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "dao_configured" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (token_dir),
    const tokenConfigPath = path.join (token_dir, `${instance_slug}-token.json`),
    writeTextFile (
      tokenConfigPath,
      JSON.stringify (
        {
          symbol: "ZION$",
          decimals: 18,
          enabled: input.token_activation,
          staking_enabled: input.modules.token,
          escrow_enabled: true,
          created_at: now_iso ()},
        null,
        2)),
    assets.push ({ kind: "config", path: tokenConfigPath, description: "Token configuration" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "token_configured" });
  }
  // 3. Publish Assets;
  const wp_path = path.join (docs_dir, `whitepaper-${instance_slug}.md`),
  const roadmap_path = path.join (docs_dir, `roadmap-${instance_slug}.md`),
  const changelog_path = path.join (docs_dir, `changelog-${instance_slug}.md`),
  const book_path = path.join (docs_dir, `zion - book-${instance_slug}.md`),
  const trailerScriptPath = path.join (docs_dir, `trailer - script-${instance_slug}.md`),
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      wp_path,
      `# Zion Protocol Whitepaper (v1.0)\n\n_instance: ${input.instance_name}\n_region: ${input.deployment_region}\n_token: ${input.token_activation ? "Enabled" : "Disabled"}\n\n## Abstract\n_zion OS unifies marketplace, AI, DAO, and media into a programmable nation - state.\n`),
    assets.push ({ kind: "file", path: wp_path, description: "Whitepaper v1.0" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "whitepaper_generated" }),
    writeTextFile (
      roadmap_path,
      `# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n`),
    assets.push ({ kind: "file", path: roadmap_path, description: "Public roadmap" }),
    writeTextFile (
      changelog_path,
      `# Changelog\n\n- ${now_iso ()}: Genesis deployment initialized for ${input.instance_name}.\n`),
    assets.push ({ kind: "file", path: changelog_path, description: "Changelog" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      book_path,
      `# ${input.instance_name}: Founder Story & System Manifesto\n\n_this book captures the origin and guiding principles of ${input.instance_name}.\n`),
    assets.push ({ kind: "file", path: book_path, description: "Zion Book (markdown source)" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      trailerScriptPath,
      `# Launch Trailer Script\n\n_voiceover: Welcome to ${input.instance_name}, a sovereign digital nation built on Zion OS.\n`),
    assets.push ({ kind: "file", path: trailerScriptPath, description: "Trailer script" });
  }
  // Schedule launch stream (/summit);
  ensure_dir (events_dir),
  const summitEventPath = path.join (events_dir, `summit-${instance_slug}.json`),
  writeTextFile (
    summitEventPath,
    JSON.stringify (
      {
        name: `${input.instance_name} Summit`,
        route: "/summit",
        scheduled_at: new Date (Date.now () + 7 * 24 * 60 * 60 * 1000).toISOString ()},
      null,
      2)),
  assets.push ({ kind: "event", path: summitEventPath, description: "Launch stream scheduled" }),
  // 4. Activate Public Pages (record intent);
  const pagesActivationPath = path.join (base_dir, "pages.json"),
  const defaultNationRoute = `/nation/${to_slug (input.default_language || "default")}`,
  writeTextFile (
    pagesActivationPath,
    JSON.stringify (
      {
        activate: [;
          "/about",
          "/manifesto",
          "/constitution",
          "/partners",
          "/academy",
          "/marketplace",
          "/dao",
          defaultNationRoute]},
      null,
      2)),
  assets.push ({ kind: "config", path: pagesActivationPath, description: "Public pages activation record" }),
  // Optional modules markers;
  const optional_modules = Object.entries (input.modules);
    .filter (([key, val]) => val && ["global_map", "franchise_onboarding", "referral_ambassadors", "grant_portal", "trailer", "book_store"].includes (key));
    .map (([key]) => key),
  // Check condition
if ( {) {
  $2
}
    const optional_path = path.join (base_dir, "optional - modules.json"),
    writeTextFile (optional_path, JSON.stringify ({ enabled: optional_modules }, null, 2)),
    assets.push ({ kind: "config", path: optional_path, description: "Enabled optional modules" });
  }
  const summary = `Initialized ${input.instance_name} (${instance_slug}) with modules: ${Object.entries (input.modules);
    .filter (([ v]) => v);
    .map (([k]) => k);
    .join (", ")}.`,
  logs.push ({ timestamp: now_iso (), level: "info", action: "deploy_complete", details: { instance_slug } }),
  return {
    success: true,
    instance_slug,
    config_path,
    assets,

    logs;
    summary;
    version}
}
=======
      changelogPath,;
      `# Changelog\n\n- ${nowIso()}: Genesis deployment initialized for ${input.instanceName}.\n`;
    ),;
    assets.push({ kind: "file", path: changelogPath, description: "Changelog" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
  if (input.modules.bookBuilder) {;
    ensureDir(docsDir);
    writeTextFile(;
      bookPath,;
      `# ${input.instanceName}: Founder Story & System Manifesto\n\nThis book captures the origin and guiding principles of ${input.instanceName}.\n`;
    );
    assets.push({ kind: "file", path: bookPath, description: "Zion Book (markdown source)" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (input.modules.launchKit) {;
    ensureDir(docsDir);
    writeTextFile(;
      trailerScriptPath,;
      `# Launch Trailer Script\n\nVoiceover: Welcome to ${input.instanceName}, a sovereign digital nation built on Zion OS.\n`;
    );
    assets.push({ kind: "file", path: trailerScriptPath, description: "Trailer script" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // Schedule launch stream (/summit);
  ensureDir(eventsDir),;
  const summitEventPath = path.join(eventsDir, `summit-${instanceSlug}.json`),;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function ensureDir(dirPath: string) {;
  if (!fs.existsSync(dirPath)) {;
    fs.mkdirSync(dirPath, { recursive: true });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function writeTextFile(filePath: string, content: string) {;
  ensureDir(path.dirname(filePath)),;
  fs.writeFileSync(filePath, content, "utf8");
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function nowIso(): string {;
  return new Date().toISOString();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function performDeploy(input: DeployInput): Promise<DeployResult> {;
  const version = "Zion OS v1.0";
  const logs: DeployLogEntry[] = [];
  const assets: GeneratedAsset[] = [];
  const instanceSlug = toSlug(input.instanceName);
  const baseDir = path.join(process.cwd(), "data", "deployments", instanceSlug),;
  const docsDir = path.join(process.cwd(), "docs"),;
  const eventsDir = path.join(process.cwd(), "data", "events"),;
  const gptDir = path.join(process.cwd(), "data", "zion-gpt"),;
  const daoDir = path.join(process.cwd(), "data", "dao"),;
  const tokenDir = path.join(process.cwd(), "data", "token"),;
=======  ensureDir(baseDir);
  const configPath = path.join(baseDir, "config.json");
  writeTextFile(configPath, JSON.stringify({ ...input, instanceSlug, version, createdAt: nowIso() }, null, 2)),;
  logs.push({ timestamp: nowIso(), level: "info", action: "save_config", details: { configPath } }),;
  assets.push({ kind: "config", path: configPath, description: "Deployment config" });
  // 1. Initialize ZionGPT;
  if (input.modules.gpt) {;
    ensureDir(gptDir);
    const promptBasePath = path.join(gptDir, `${instanceSlug}-prompt-base.md`);
    const promptBase = `# ZionGPT Prompt Base\n\nInstance: ${input.instanceName}\nLanguage: ${input.defaultLanguage}\nGovernance: ${input.governanceMode}\n\nBehaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`,;
    writeTextFile(promptBasePath, promptBase);
    assets.push({ kind: "file", path: promptBasePath, description: "ZionGPT prompt base" });
    logs.push({ timestamp: nowIso(), level: "info", action: "zion_gpt_initialized" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // 2. Deploy DAO + Token Logic;
  if (input.modules.dao) {;
    ensureDir(daoDir);
    const daoConfigPath = path.join(daoDir, `${instanceSlug}-dao.json`);
    writeTextFile(;
      daoConfigPath,;
      JSON.stringify(;
        {;
          treasury: `${instanceSlug}-treasury`,;
          governanceMode: input.governanceMode,;
          quorum: 0.6,;
          votingPeriodDays: 7,;
          constitutionDoc: `/constitution`,;
          createdAt: nowIso()},;
        null,;
        2;
      );
    ),;
    assets.push({ kind: "config", path: daoConfigPath, description: "DAO configuration" });
    logs.push({ timestamp: nowIso(), level: "info", action: "dao_configured" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (input.modules.token || input.tokenActivation) {;
    ensureDir(tokenDir);
    const tokenConfigPath = path.join(tokenDir, `${instanceSlug}-token.json`);
    writeTextFile(;
      tokenConfigPath,;
      JSON.stringify(;
        {;
          symbol: "ZION$",;
          decimals: 18,;
          enabled: input.tokenActivation,;
          stakingEnabled: input.modules.token,;
          escrowEnabled: true,;
          createdAt: nowIso()},;
        null,;
        2;
      );
    ),;
    assets.push({ kind: "config", path: tokenConfigPath, description: "Token configuration" });
    logs.push({ timestamp: nowIso(), level: "info", action: "token_configured" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

  // 3. Publish Assets;
  const wpPath = path.join(docsDir, `whitepaper-${instanceSlug}.md`);
  const roadmapPath = path.join(docsDir, `roadmap-${instanceSlug}.md`);
  const changelogPath = path.join(docsDir, `changelog-${instanceSlug}.md`);
  const bookPath = path.join(docsDir, `zion-book-${instanceSlug}.md`);
  const trailerScriptPath = path.join(docsDir, `trailer-script-${instanceSlug}.md`);

  if (input.modules.roadmapWhitepaper) {;
    ensureDir(docsDir);
    writeTextFile(;
      wpPath,;
      `# Zion Protocol Whitepaper (v1.0)\n\nInstance: ${input.instanceName}\nRegion: ${input.deploymentRegion}\nToken: ${input.tokenActivation ? "Enabled" : "Disabled"}\n\n## Abstract\nZion OS unifies marketplace, AI, DAO, and media into a programmable nation-state.\n`;
    ),;
    assets.push({ kind: "file", path: wpPath, description: "Whitepaper v1.0" });
    logs.push({ timestamp: nowIso(), level: "info", action: "whitepaper_generated" }),;
    writeTextFile(;
      roadmapPath,;

      `# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n`;
    );
    assets.push({ kind: "file", path: roadmapPath, description: "Public roadmap" });
    writeTextFile(;
import fs from './fs';,
import path from './path';,
import { DeployInput, DeployResult, DeployLogEntry, GeneratedAsset  } from '../types / zion';,
function to_slug (name: string): string {
  return name;
    .toLowerCase ();
    .replace (/[^a - z0 - 9]+/g, "-");
    .replace (/(^-|-$)+/g, "");
    .slice (0, 64);
}
/**
 * ensure_dir - Function description
 */
function ensure_dir() {
  if () {) {
  $2
}
    fs.mkdir_sync (dir_path, { recursive: true });
  }
}
/**
 * writeTextFile - Function description
 */
function writeTextFile() {
  ensure_dir (path.dirname (file_path)),
  fs.writeFileSync (file_path, content, "utf8");
}
function now_iso (): string {
  return new Date ().toISOString ();
}
export async function perform_deploy (input: DeployInput): Promise < DeployResult> {
  const version = "Zion OS v1.0",
  const logs: DeployLogEntry[] = [],
  const assets: GeneratedAsset[] = [],
  const instance_slug = to_slug (input.instance_name),
  const base_dir = path.join (process.cwd (), "data", "deployments", instance_slug),
  const docs_dir = path.join (process.cwd (), "docs"),
  const events_dir = path.join (process.cwd (), "data", "events"),
  const gpt_dir = path.join (process.cwd (), "data", "zion - gpt"),
  const dao_dir = path.join (process.cwd (), "data", "dao"),
  const token_dir = path.join (process.cwd (), "data", "token"),
  ensure_dir (base_dir),
  const config_path = path.join (base_dir, "config.json"),
  writeTextFile (config_path, JSON.stringify ({ ...input, instance_slug, version, created_at: now_iso () }, null, 2)),
  logs.push ({ timestamp: now_iso (), level: "info", action: "save_config", details: { config_path } }),
  assets.push ({ kind: "config", path: config_path, description: "Deployment config" }),
  // 1. Initialize ZionGPT;
  // Check condition
if ( {) {
  $2
}
    ensure_dir (gpt_dir),
    const promptBasePath = path.join (gpt_dir, `${instance_slug}-prompt - base.md`),
    const prompt_base = `# ZionGPT Prompt Base\n\n_instance: ${input.instance_name}\n_language: ${input.default_language}\n_governance: ${input.governance_mode}\n\n_behaviors:\n- Assist with proposals, resumes, and marketplace tasks.\n- Route to domain experts per module.\n`,
    writeTextFile (promptBasePath, prompt_base),
    assets.push ({ kind: "file", path: promptBasePath, description: "ZionGPT prompt base" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "zion_gpt_initialized" });
  }
  // 2. Deploy DAO + Token Logic;
  // Check condition
if ( {) {
  $2
}
    ensure_dir (dao_dir),
    const daoConfigPath = path.join (dao_dir, `${instance_slug}-dao.json`),
    writeTextFile (
      daoConfigPath,
      JSON.stringify (
        {
          treasury: `${instance_slug}-treasury`,
          governance_mode: input.governance_mode,
          quorum: 0.6,
          votingPeriodDays: 7,
          constitution_doc: `/constitution`,
          created_at: now_iso ()},
        null,
        2)),
    assets.push ({ kind: "config", path: daoConfigPath, description: "DAO configuration" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "dao_configured" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (token_dir),
    const tokenConfigPath = path.join (token_dir, `${instance_slug}-token.json`),
    writeTextFile (
      tokenConfigPath,
      JSON.stringify (
        {
          symbol: "ZION$",
          decimals: 18,
          enabled: input.token_activation,
          staking_enabled: input.modules.token,
          escrow_enabled: true,
          created_at: now_iso ()},
        null,
        2)),
    assets.push ({ kind: "config", path: tokenConfigPath, description: "Token configuration" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "token_configured" });
  }
  // 3. Publish Assets;
  const wp_path = path.join (docs_dir, `whitepaper-${instance_slug}.md`),
  const roadmap_path = path.join (docs_dir, `roadmap-${instance_slug}.md`),
  const changelog_path = path.join (docs_dir, `changelog-${instance_slug}.md`),
  const book_path = path.join (docs_dir, `zion - book-${instance_slug}.md`),
  const trailerScriptPath = path.join (docs_dir, `trailer - script-${instance_slug}.md`),
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      wp_path,
      `# Zion Protocol Whitepaper (v1.0)\n\n_instance: ${input.instance_name}\n_region: ${input.deployment_region}\n_token: ${input.token_activation ? "Enabled" : "Disabled"}\n\n## Abstract\n_zion OS unifies marketplace, AI, DAO, and media into a programmable nation - state.\n`),
    assets.push ({ kind: "file", path: wp_path, description: "Whitepaper v1.0" }),
    logs.push ({ timestamp: now_iso (), level: "info", action: "whitepaper_generated" }),
    writeTextFile (
      roadmap_path,
      `# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n`),
    assets.push ({ kind: "file", path: roadmap_path, description: "Public roadmap" }),
    writeTextFile (
      changelog_path,
      `# Changelog\n\n- ${now_iso ()}: Genesis deployment initialized for ${input.instance_name}.\n`),
    assets.push ({ kind: "file", path: changelog_path, description: "Changelog" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      book_path,
      `# ${input.instance_name}: Founder Story & System Manifesto\n\n_this book captures the origin and guiding principles of ${input.instance_name}.\n`),
    assets.push ({ kind: "file", path: book_path, description: "Zion Book (markdown source)" });
  }
  // Check condition
if ( {) {
  $2
}
    ensure_dir (docs_dir),
    writeTextFile (
      trailerScriptPath,
      `# Launch Trailer Script\n\n_voiceover: Welcome to ${input.instance_name}, a sovereign digital nation built on Zion OS.\n`),
    assets.push ({ kind: "file", path: trailerScriptPath, description: "Trailer script" });
  }
  // Schedule launch stream (/summit);
  ensure_dir (events_dir),
  const summitEventPath = path.join (events_dir, `summit-${instance_slug}.json`),
  writeTextFile (
    summitEventPath,
    JSON.stringify (
      {
        name: `${input.instance_name} Summit`,
        route: "/summit",
        scheduled_at: new Date (Date.now () + 7 * 24 * 60 * 60 * 1000).toISOString ()},
      null,
      2)),
  assets.push ({ kind: "event", path: summitEventPath, description: "Launch stream scheduled" }),
  // 4. Activate Public Pages (record intent);
  const pagesActivationPath = path.join (base_dir, "pages.json"),
  const defaultNationRoute = `/nation/${to_slug (input.default_language || "default")}`,
  writeTextFile (
    pagesActivationPath,
    JSON.stringify (
      {
        activate: [;
          "/about",
          "/manifesto",
          "/constitution",
          "/partners",
          "/academy",
          "/marketplace",
          "/dao",
          defaultNationRoute]},
      null,
      2)),
  assets.push ({ kind: "config", path: pagesActivationPath, description: "Public pages activation record" }),
  // Optional modules markers;
  const optional_modules = Object.entries (input.modules);
    .filter (([key, val]) => val && ["global_map", "franchise_onboarding", "referral_ambassadors", "grant_portal", "trailer", "book_store"].includes (key));
    .map (([key]) => key),
  // Check condition
if ( {) {
  $2
}
    const optional_path = path.join (base_dir, "optional - modules.json"),
    writeTextFile (optional_path, JSON.stringify ({ enabled: optional_modules }, null, 2)),
    assets.push ({ kind: "config", path: optional_path, description: "Enabled optional modules" });
  }
  const summary = `Initialized ${input.instance_name} (${instance_slug}) with modules: ${Object.entries (input.modules);
    .filter (([ v]) => v);
    .map (([k]) => k);
    .join (", ")}.`,
  logs.push ({ timestamp: now_iso (), level: "info", action: "deploy_complete", details: { instance_slug } }),
  return {
    success: true,
    instance_slug,
    config_path,
    assets,

    logs;
    summary;
    version}
}
=======      changelogPath,;
      `# Changelog\n\n- ${nowIso()}: Genesis deployment initialized for ${input.instanceName}.\n`;
    ),;
    assets.push({ kind: "file", path: changelogPath, description: "Changelog" });
    } catch (error) {

  writeTextFile(;
    summitEventPath;
    JSON.stringify(;
      {name: `${input.instanceName} Summit`;
        route: "/summit";
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()}
      null;
      2;
    );
  );
  assets.push({ kind: "event", path: summitEventPath, description: "Launch stream scheduled" });
  // 4. Activate Public Pages (record intent);
  const pagesActivationPath = path.join(baseDir, "pages.json");
  const defaultNationRoute = `/nation/${toSlug(input.defaultLanguage |"default")}`;
  writeTextFile(;

    summitEventPath,;
    JSON.stringify(;
      {;
        name: `${input.instanceName} Summit`,;
        route: "/summit",;
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()},;
      null,;
      2;
    );
  ),;

          "/constitution",;
          "/partners",;
          "/academy",;
          "/marketplace",;
          "/dao",;
          defaultNationRoute]},;
      null,;
      2;
    );
  ),;


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          "/constitution";
          "/partners";
          "/academy";
          "/marketplace";
          "/dao";
          defaultNationRoute]}
      null;
      2;
    );
  );
    summitEventPath,;
    JSON.stringify(;
      {;
        name: `${input.instanceName} Summit`,;
        route: "/summit",;
        scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()},;
      null,;
      2;
    );
  ),;

          "/constitution",;
          "/partners",;
          "/academy",;
          "/marketplace",;
          "/dao",;
          defaultNationRoute]},;
      null,;
      2;
    );
  ),;


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
