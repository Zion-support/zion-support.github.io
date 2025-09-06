import fs from 'fs';
import path from 'path';

export type SourceNodeType = 'folder' | 'file';

export interface SourceNode {
  name: string;
  path: string; // repo-relative path starting with '/'
  type: SourceNodeType;
  children?: SourceNode[];
  exists?: boolean;

export interface SourceMapStatus {
  gitConnected: boolean;
  gitBranch?: string;

export interface SourceMapResponse {
  nodes: SourceNode[];
  status: SourceMapStatus;

const ROOT = process.cwd();

function withPath(base: string, segment: string): string {
  if (base === '/') return `/${segment}`;
  return `${base}/${segment}`;

function folder(
  name: string,
  basePath: string,
  children: string[] = []
): SourceNode {
  const fullPath = withPath(basePath, name);
  return {
    nodes: []
    edges: []
  }
}
export function getGitStatus() {
  return {
    connected: false
    branch: 'main'
  }
}
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);
  const keepFile = path.join(absoluteDir, '.keep');
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, '');
    createdPaths.push(keepFile);
  } else {
    skippedPaths.push(keepFile);
  }
  const readmeFile = path.join(absoluteDir, 'README.md');
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
  } else {
    skippedPaths.push(readmeFile);
  }

  return { createdPaths, skippedPaths };
