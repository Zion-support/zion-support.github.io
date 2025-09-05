import fs from &quot;fs&quot;;
import path from &quot;path&quot;;

export type SourceNodeType = &quot;folder&quot; | &quot;file&quot;;

export interface SourceNode {
  name: string;
  path: string; // repo-relative path starting with '/'
  type: SourceNodeType;
  children?: SourceNode[];
  exists?: boolean;
}

export interface SourceMapStatus {
  gitConnected: boolean;
  gitBranch?: string;
}

export interface SourceMapResponse {
  nodes: SourceNode[];
  status: SourceMapStatus;
}

const ROOT = process.cwd();

function withPath(base: string, segment: string): string {
  if (base === &quot;/&quot;) return `/${segment}`;
  return `${base}/${segment}`;
}

function folder(name: string, basePath: string, children: string[] = []): SourceNode {
  const fullPath = withPath(basePath, name);
  return {
    name,
    path: fullPath,
    type: &quot;folder&quot;,
    children: children.map((child) => ({ name: child, path: withPath(fullPath, child), type: &quot;folder&quot; }))};
}

export function buildZionSourceMap(): SourceNode[] {
  const map: SourceNode[] = [
    // 1. /core
    {
      name: &quot;core&quot;,
      path: &quot;/core&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;auth&quot;, path: &quot;/core/auth&quot;, type: &quot;folder&quot; },
        { name: &quot;user&quot;, path: &quot;/core/user&quot;, type: &quot;folder&quot; },
        { name: &quot;marketplace&quot;, path: &quot;/core/marketplace&quot;, type: &quot;folder&quot; },
        { name: &quot;payments&quot;, path: &quot;/core/payments&quot;, type: &quot;folder&quot; },
        { name: &quot;messaging&quot;, path: &quot;/core/messaging&quot;, type: &quot;folder&quot; },
        { name: &quot;analytics&quot;, path: &quot;/core/analytics&quot;, type: &quot;folder&quot; },
        { name: &quot;roles&quot;, path: &quot;/core/roles&quot;, type: &quot;folder&quot; },
        { name: &quot;talent&quot;, path: &quot;/core/talent&quot;, type: &quot;folder&quot; },
        { name: &quot;client&quot;, path: &quot;/core/client&quot;, type: &quot;folder&quot; }]},
    // 2. /ai
    {
      name: &quot;ai&quot;,
      path: &quot;/ai&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;gpt&quot;, path: &quot;/ai/gpt&quot;, type: &quot;folder&quot; },
        { name: &quot;resume-generator&quot;, path: &quot;/ai/resume-generator&quot;, type: &quot;folder&quot; },
        { name: &quot;proposal-writer&quot;, path: &quot;/ai/proposal-writer&quot;, type: &quot;folder&quot; },
        { name: &quot;contract-writer&quot;, path: &quot;/ai/contract-writer&quot;, type: &quot;folder&quot; },
        { name: &quot;assistant&quot;, path: &quot;/ai/assistant&quot;, type: &quot;folder&quot; },
        { name: &quot;prompts&quot;, path: &quot;/ai/prompts&quot;, type: &quot;folder&quot; }]},
    // 3. /dao
    {
      name: &quot;dao&quot;,
      path: &quot;/dao&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;proposals&quot;, path: &quot;/dao/proposals&quot;, type: &quot;folder&quot; },
        { name: &quot;voting&quot;, path: &quot;/dao/voting&quot;, type: &quot;folder&quot; },
        { name: &quot;quorum&quot;, path: &quot;/dao/quorum&quot;, type: &quot;folder&quot; },
        { name: &quot;staking&quot;, path: &quot;/dao/staking&quot;, type: &quot;folder&quot; },
        { name: &quot;snapshot-integration&quot;, path: &quot;/dao/snapshot-integration&quot;, type: &quot;folder&quot; }]},
    // 4. /token
    {
      name: &quot;token&quot;,
      path: &quot;/token&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;rewards&quot;, path: &quot;/token/rewards&quot;, type: &quot;folder&quot; },
        { name: &quot;pricing-engine&quot;, path: &quot;/token/pricing-engine&quot;, type: &quot;folder&quot; },
        { name: &quot;escrow&quot;, path: &quot;/token/escrow&quot;, type: &quot;folder&quot; },
        { name: &quot;payout-engine&quot;, path: &quot;/token/payout-engine&quot;, type: &quot;folder&quot; },
        { name: &quot;wallet&quot;, path: &quot;/token/wallet&quot;, type: &quot;folder&quot; }]},
    // 5. /academy
    {
      name: &quot;academy&quot;,
      path: &quot;/academy&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;courses&quot;, path: &quot;/academy/courses&quot;, type: &quot;folder&quot; },
        { name: &quot;certifications&quot;, path: &quot;/academy/certifications&quot;, type: &quot;folder&quot; },
        { name: &quot;quiz&quot;, path: &quot;/academy/quiz&quot;, type: &quot;folder&quot; },
        { name: &quot;video&quot;, path: &quot;/academy/video&quot;, type: &quot;folder&quot; },
        { name: &quot;ai-tutor&quot;, path: &quot;/academy/ai-tutor&quot;, type: &quot;folder&quot; }]},
    // 6. /governance
    {
      name: &quot;governance&quot;,
      path: &quot;/governance&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;manifesto&quot;, path: &quot;/governance/manifesto&quot;, type: &quot;folder&quot; },
        { name: &quot;constitution&quot;, path: &quot;/governance/constitution&quot;, type: &quot;folder&quot; },
        { name: &quot;roadmap&quot;, path: &quot;/governance/roadmap&quot;, type: &quot;folder&quot; },
        { name: &quot;changelog&quot;, path: &quot;/governance/changelog&quot;, type: &quot;folder&quot; }]},
    // 7. /deployments
    {
      name: &quot;deployments&quot;,
      path: &quot;/deployments&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;multiverse&quot;, path: &quot;/deployments/multiverse&quot;, type: &quot;folder&quot; },
        { name: &quot;subdomains&quot;, path: &quot;/deployments/subdomains&quot;, type: &quot;folder&quot; },
        { name: &quot;config-templates&quot;, path: &quot;/deployments/config-templates&quot;, type: &quot;folder&quot; },
        { name: &quot;environments&quot;, path: &quot;/deployments/environments&quot;, type: &quot;folder&quot; }]},
    // 8. /api
    {
      name: &quot;api&quot;,
      path: &quot;/api&quot;,
      type: &quot;folder&quot;,
      children: [
        { name: &quot;docs&quot;, path: &quot;/api/docs&quot;, type: &quot;folder&quot; },
        { name: &quot;partners&quot;, path: &quot;/api/partners&quot;, type: &quot;folder&quot; },
        { name: &quot;integrations&quot;, path: &quot;/api/integrations&quot;, type: &quot;folder&quot; },
        { name: &quot;webhooks&quot;, path: &quot;/api/webhooks&quot;, type: &quot;folder&quot; }]}];

  return map;
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const absolutePath = path.join(ROOT, node.path);
  const exists = fs.existsSync(absolutePath);
  const withExists: SourceNode = {
    ...node,
    exists};
  if (node.children && node.children.length > 0) {
    withExists.children = node.children.map(markExistenceRecursive);
  }
  return withExists;
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {
  createdPaths: string[];
  skippedPaths: string[];
}

export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function deployBasicTemplateForPath(repoRelativePath: string): DeployTemplateResult {
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];

  ensureDirectory(absoluteDir);

  const keepFile = path.join(absoluteDir, &quot;.keep&quot;);
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, "&quot;);
    createdPaths.push(keepFile);
  } else {
    skippedPaths.push(keepFile);
  }

  const readmeFile = path.join(absoluteDir, &quot;README.md");
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
  } else {
    skippedPaths.push(readmeFile);
  }

  return { createdPaths, skippedPaths };
}