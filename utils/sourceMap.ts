<<<<<<< HEAD
import fs from "fs",;
import path from "path",;
;
export type SourceNodeType = "folder" | "file",;
;
export interface SourceNode {;
  name:string,;
  path:string, // repo-relative path starting with '/';
  type:SourceNodeType,;
  children?:SourceNode[],;
  exists?:boolean;
=======
import fs from "fs",
import path from "path",
export type SourceNodeType = "folder" | "file",

export interface SourceNode {
  name: string,
  path: string, // repo-relative path starting with '/'
  type: SourceNodeType,
  children?: SourceNode[],
  exists?: boolean
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface SourceMapStatus {;
  gitConnected:boolean,;
  gitBranch?:string;
}
;
export interface SourceMapResponse {;
  nodes:SourceNode[],;
  status:SourceMapStatus;
}
<<<<<<< HEAD
;
const ROOT = process.cwd(),;
;
function withPath(base:string, segment:string):string {;
  if (base === "/") return `/${segment}`,;
  return `${base}/${segment}`,;
}
;
function folder(name:string, basePath:string, children:string[] = []):SourceNode {;
  const fullPath = withPath(basePath, name),;
  return {;
    name,;
    path:fullPath,;
    type:"folder",;
    children:children.map((child) => ({ name:child, path:withPath(fullPath, child), type:"folder" }))},;
}
;
export function buildZionSourceMap():SourceNode[] {;
  const map:SourceNode[] = [;
    // 1. /core;
    {;
      name:"core",;
      path:"/core",;
      type:"folder",;
      children:[;
        { name:"auth", path:"/core/auth", type:"folder" },;
        { name:"user", path:"/core/user", type:"folder" },;
        { name:"marketplace", path:"/core/marketplace", type:"folder" },;
        { name:"payments", path:"/core/payments", type:"folder" },;
        { name:"messaging", path:"/core/messaging", type:"folder" },;
        { name:"analytics", path:"/core/analytics", type:"folder" },;
        { name:"roles", path:"/core/roles", type:"folder" },;
        { name:"talent", path:"/core/talent", type:"folder" },;
        { name:"client", path:"/core/client", type:"folder" }]},;
    // 2. /ai;
    {;
      name:"ai",;
      path:"/ai",;
      type:"folder",;
      children:[;
        { name:"gpt", path:"/ai/gpt", type:"folder" },;
        { name:"resume-generator", path:"/ai/resume-generator", type:"folder" },;
        { name:"proposal-writer", path:"/ai/proposal-writer", type:"folder" },;
        { name:"contract-writer", path:"/ai/contract-writer", type:"folder" },;
        { name:"assistant", path:"/ai/assistant", type:"folder" },;
        { name:"prompts", path:"/ai/prompts", type:"folder" }]},;
    // 3. /dao;
    {;
      name:"dao",;
      path:"/dao",;
      type:"folder",;
      children:[;
        { name:"proposals", path:"/dao/proposals", type:"folder" },;
        { name:"voting", path:"/dao/voting", type:"folder" },;
        { name:"quorum", path:"/dao/quorum", type:"folder" },;
        { name:"staking", path:"/dao/staking", type:"folder" },;
        { name:"snapshot-integration", path:"/dao/snapshot-integration", type:"folder" }]},;
    // 4. /token;
    {;
      name:"token",;
      path:"/token",;
      type:"folder",;
      children:[;
        { name:"rewards", path:"/token/rewards", type:"folder" },;
        { name:"pricing-engine", path:"/token/pricing-engine", type:"folder" },;
        { name:"escrow", path:"/token/escrow", type:"folder" },;
        { name:"payout-engine", path:"/token/payout-engine", type:"folder" },;
        { name:"wallet", path:"/token/wallet", type:"folder" }]},;
    // 5. /academy;
    {;
      name:"academy",;
      path:"/academy",;
      type:"folder",;
      children:[;
        { name:"courses", path:"/academy/courses", type:"folder" },;
        { name:"certifications", path:"/academy/certifications", type:"folder" },;
        { name:"quiz", path:"/academy/quiz", type:"folder" },;
        { name:"video", path:"/academy/video", type:"folder" },;
        { name:"ai-tutor", path:"/academy/ai-tutor", type:"folder" }]},;
    // 6. /governance;
    {;
      name:"governance",;
      path:"/governance",;
      type:"folder",;
      children:[;
        { name:"manifesto", path:"/governance/manifesto", type:"folder" },;
        { name:"constitution", path:"/governance/constitution", type:"folder" },;
        { name:"roadmap", path:"/governance/roadmap", type:"folder" },;
        { name:"changelog", path:"/governance/changelog", type:"folder" }]},;
    // 7. /deployments;
    {;
      name:"deployments",;
      path:"/deployments",;
      type:"folder",;
      children:[;
        { name:"multiverse", path:"/deployments/multiverse", type:"folder" },;
        { name:"subdomains", path:"/deployments/subdomains", type:"folder" },;
        { name:"config-templates", path:"/deployments/config-templates", type:"folder" },;
        { name:"environments", path:"/deployments/environments", type:"folder" }]},;
    // 8. /api;
    {;
      name:"api",;
      path:"/api",;
      type:"folder",;
      children:[;
        { name:"docs", path:"/api/docs", type:"folder" },;
        { name:"partners", path:"/api/partners", type:"folder" },;
        { name:"integrations", path:"/api/integrations", type:"folder" },;
        { name:"webhooks", path:"/api/webhooks", type:"folder" }]}],;
;
  return map,;
}
;
function markExistenceRecursive(node:SourceNode):SourceNode {;
  const absolutePath = path.join(ROOT, node.path),;
  const exists = fs.existsSync(absolutePath),;
  const withExists:SourceNode = {;
    ...node,;
    exists},;
  if (node.children && node.children.length > 0) {;
    withExists.children = node.children.map(markExistenceRecursive),;
  }
  return withExists,;
}
;
export function getSourceMapWithExistence():SourceNode[] {;
  const nodes = buildZionSourceMap(),;
  return nodes.map(markExistenceRecursive),;
=======

const ROOT = process.cwd(),

function withPath(base: string, segment: string): string {
  if (base === "/") return `/${segment}`,
  return `${base}/${segment}`
}

function folder(name: string, basePath: string, children: string[] = []): SourceNode {
  const fullPath = withPath(basePath, name),
  return {
    name,
    path: fullPath,
    type: "folder",
    children: children.map((child) => ({ name: child, path: withPath(fullPath, child), type: "folder" }))}}

export function buildZionSourceMap(): SourceNode[] {_const map: SourceNode[] = [
    // 1. /core
    {
      name: "core", _path: "/core", _type: "folder", _children: [
        { name: "auth", _path: "/core/auth", _type: "folder"},
        {_name: "user", _path: "/core/user", _type: "folder"},
        {_name: "marketplace", _path: "/core/marketplace", _type: "folder"},
        {_name: "payments", _path: "/core/payments", _type: "folder"},
        {_name: "messaging", _path: "/core/messaging", _type: "folder"},
        {_name: "analytics", _path: "/core/analytics", _type: "folder"},
        {_name: "roles", _path: "/core/roles", _type: "folder"},
        {_name: "talent", _path: "/core/talent", _type: "folder"},
        {_name: "client", _path: "/core/client", _type: "folder"}]},
    // 2. /ai
    {_name: "ai", _path: "/ai", _type: "folder", _children: [
        { name: "gpt", _path: "/ai/gpt", _type: "folder"},
        {_name: "resume-generator", _path: "/ai/resume-generator", _type: "folder"},
        {_name: "proposal-writer", _path: "/ai/proposal-writer", _type: "folder"},
        {_name: "contract-writer", _path: "/ai/contract-writer", _type: "folder"},
        {_name: "assistant", _path: "/ai/assistant", _type: "folder"},
        {_name: "prompts", _path: "/ai/prompts", _type: "folder"}]},
    // 3. /dao
    {_name: "dao", _path: "/dao", _type: "folder", _children: [
        { name: "proposals", _path: "/dao/proposals", _type: "folder"},
        {_name: "voting", _path: "/dao/voting", _type: "folder"},
        {_name: "quorum", _path: "/dao/quorum", _type: "folder"},
        {_name: "staking", _path: "/dao/staking", _type: "folder"},
        {_name: "snapshot-integration", _path: "/dao/snapshot-integration", _type: "folder"}]},
    // 4. /token
    {_name: "token", _path: "/token", _type: "folder", _children: [
        { name: "rewards", _path: "/token/rewards", _type: "folder"},
        {_name: "pricing-engine", _path: "/token/pricing-engine", _type: "folder"},
        {_name: "escrow", _path: "/token/escrow", _type: "folder"},
        {_name: "payout-engine", _path: "/token/payout-engine", _type: "folder"},
        {_name: "wallet", _path: "/token/wallet", _type: "folder"}]},
    // 5. /academy
    {_name: "academy", _path: "/academy", _type: "folder", _children: [
        { name: "courses", _path: "/academy/courses", _type: "folder"},
        {_name: "certifications", _path: "/academy/certifications", _type: "folder"},
        {_name: "quiz", _path: "/academy/quiz", _type: "folder"},
        {_name: "video", _path: "/academy/video", _type: "folder"},
        {_name: "ai-tutor", _path: "/academy/ai-tutor", _type: "folder"}]},
    // 6. /governance
    {_name: "governance", _path: "/governance", _type: "folder", _children: [
        { name: "manifesto", _path: "/governance/manifesto", _type: "folder"},
        {_name: "constitution", _path: "/governance/constitution", _type: "folder"},
        {_name: "roadmap", _path: "/governance/roadmap", _type: "folder"},
        {_name: "changelog", _path: "/governance/changelog", _type: "folder"}]},
    // 7. /deployments
    {_name: "deployments", _path: "/deployments", _type: "folder", _children: [
        { name: "multiverse", _path: "/deployments/multiverse", _type: "folder"},
        {_name: "subdomains", _path: "/deployments/subdomains", _type: "folder"},
        {_name: "config-templates", _path: "/deployments/config-templates", _type: "folder"},
        {_name: "environments", _path: "/deployments/environments", _type: "folder"}]},
    // 8. /api
    {
      name: "api",
      path: "/api",
      type: "folder",
      children: [
        { name: "docs", path: "/api/docs", type: "folder" },
        { name: "partners", path: "/api/partners", type: "folder" },
        { name: "integrations", path: "/api/integrations", type: "folder" },
        { name: "webhooks", path: "/api/webhooks", type: "folder" }]}],
  return map
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const absolutePath = path.join(ROOT, node.path),
  const exists = fs.existsSync(absolutePath),
  const withExists: SourceNode = {
    ...node,
    exists},
  if (node.children && node.children.length > 0) {
    withExists.children = node.children.map(markExistenceRecursive)
  }
  return withExists
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap(),
  return nodes.map(markExistenceRecursive)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface DeployTemplateResult {;
  createdPaths:string[],;
  skippedPaths:string[];
}
<<<<<<< HEAD
;
export function ensureDirectory(dirPath:string):void {;
  if (!fs.existsSync(dirPath)) {;
    fs.mkdirSync(dirPath, { recursive:true }),;
  }
}
;
export function deployBasicTemplateForPath(repoRelativePath:string):DeployTemplateResult {;
  const absoluteDir = path.join(ROOT, repoRelativePath),;
  const createdPaths:string[] = [],;
  const skippedPaths:string[] = [],;
;
  ensureDirectory(absoluteDir),;
;
  const keepFile = path.join(absoluteDir, ".keep"),;
  if (!fs.existsSync(keepFile)) {;
    fs.writeFileSync(keepFile, ""),;
    createdPaths.push(keepFile),;
  } else {;
    skippedPaths.push(keepFile),;
  }
;
  const readmeFile = path.join(absoluteDir, "README.md"),;
  if (!fs.existsSync(readmeFile)) {;
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`,;
    fs.writeFileSync(readmeFile, readme),;
    createdPaths.push(readmeFile),;
  } else {;
    skippedPaths.push(readmeFile),;
  }
;
  return { createdPaths, skippedPaths },;
}
=======

export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

export function deployBasicTemplateForPath(repoRelativePath: string): DeployTemplateResult {
  const absoluteDir = path.join(ROOT, repoRelativePath),
  const createdPaths: string[] = [],
  const skippedPaths: string[] = [],
  ensureDirectory(absoluteDir),

  const keepFile = path.join(absoluteDir, ".keep"),
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, ""),
    createdPaths.push(keepFile)
  } else {
    skippedPaths.push(keepFile)
  }

  const readmeFile = path.join(absoluteDir, "README.md"),
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`,
    fs.writeFileSync(readmeFile, readme),
    createdPaths.push(readmeFile)
  } else {
    skippedPaths.push(readmeFile)
  }

  return { createdPaths, skippedPaths }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
