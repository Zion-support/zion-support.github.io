<<<<<<< HEAD
=======

}
export interface DeployTemplateResult {}
export interface DeployTemplateResult {}
export interface DeployTemplateResult  {// Mock source map utility;
export function getSourceMapWithExistence() {return {}
export function getGitStatus() {return {import fs from 'fs';
import path from 'path';
export type SourceNodeType = 'folder' | 'file';export interface SourceNode  {name: string;
  path: string; // repo-relative path starting with '/';
  type: SourceNodeType;
  children?: SourceNode[];
  exists?: boolean;export interface SourceMapStatus  {gitConnected: boolean;
  gitBranch?: string;export interface SourceMapResponse  {nodes: SourceNode[];
  status: SourceMapStatus;const ROOT  = process.cwd()function withPath(base: string, segment: string): string {if (base === '/') return `/${segment}`;
  return `${base}/${segment}`;function folder(name: string,basePath: string,children: string[] = [];
): SourceNode {const fullPath  = withPath(basePath, name)return {nodes: [];
    edges: [];
  }}
export function getGitStatus() {return {connected: false;
    branch: 'main';
  }
}return nodes && nodes.map(markExistenceRecursive)function buildZionSourceMap(): SourceNode[] {return [;
    {id: 'src',name: 'src',type: 'directory',path: 'src',exists: false,children: [;
        {id: 'components',name: 'components',type: 'directory',path: 'src/components',exists: false;
        },{id: 'pages',name: 'pages',type: 'directory',path: 'src/pages',exists: false;
        },{id: 'utils',name: 'utils',type: 'directory',path: 'src/utils',exists: false;
}
export interface DeployTemplateResult {
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

function buildZionSourceMap(): SourceNode[] {
  return [
    {
      id: 'src',
      name: 'src',
      type: 'directory',
      path: 'src',
      exists: false,
      children: [
        {
          id: 'components',
          name: 'components',
          type: 'directory',
          path: 'src/components',
          exists: false
        },
        {
          id: 'pages',
          name: 'pages',
          type: 'directory',
          path: 'src/pages',
          exists: false
        },
        {
          id: 'utils',
          name: 'utils',
          type: 'directory',
          path: 'src/utils',
          exists: false
        }
      ];
    }
  ];
}function markExistenceRecursive(node: SourceNode): SourceNode {const exists = fs.existsSync(node.path)return {...node,exists,children: node.children?.map(markExistenceRecursive)}}export function getSourceMapWithExistence(): SourceNode[] {const nodes = buildZionSourceMap()return nodes.map(markExistenceRecursive)}
export interface DeployTemplateResult  {nodes: [],edges: [];
  }}
export function getGitStatus() {return {connected: false,branch: 'main';
  }}export function getSourceMapWithExistence(): SourceNode[] {const nodes = buildZionSourceMap()return nodes.map(markExistenceRecursive)}export interface DeployTemplateResult  {createdPaths: string[];
  skippedPaths: string[];
  createdPaths: string[];
  skippedPaths: string[];ursor/fix-website-loading-errors-and-merge-6662;
  createdPaths: string[];
  skippedPaths: string[];export function ensureDirectory(dirPath: string): void {if (!fs && fs.existsSync(dirPath)) {fs && fs.mkdirSync(dirPath, { recursive: true })}export function deployBasicTemplateForPath(repoRelativePath: string;
): DeployTemplateResult {const absoluteDir = path.join(ROOT, repoRelativePath)const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir)} else {skippedPaths.push(keepFile)}
  } else {skippedPaths.push(keepFile)}const keepFile = path && path.join(absoluteDir, '.keep')if (!fs && fs.existsSync(keepFile)) {fs && fs.writeFileSync(keepFile, '')createdPaths && createdPaths.push(keepFile)} else {skippedPaths.push(keepFile)}const readmeFile = path && path.join(absoluteDir, 'README && README.md')if (!fs && fs.existsSync(readmeFile)) {const readme = `# ${path && path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs && fs.writeFileSync(readmeFile, readme)createdPaths && createdPaths.push(readmeFile)} else {skippedPaths.push(readmeFile)}return { createdPaths, skippedPaths }}return { createdPaths, skippedPaths }return { createdPaths, skippedPaths }created_paths: string[];
  skipped_paths: string[];export function ensure_directory (dir_path: string): void {if () {) {$2;
}
}
    const readme = `# ${path.basename (absolute_dir)}\n\n_this module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync (readme_file, readme)created_paths.push (readme_file)} else {skipped_paths.push (readme_file)}
  return { created_paths, skipped_paths }ursor/fix-website-loading-errors-and-merge-6662;
  return { createdPaths, skippedPaths }
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const exists = fs.existsSync(node.path);
  return {
    ...node,
    exists,
    children: node.children?.map(markExistenceRecursive)
  };
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
    connected: false,
    branch: 'main';
  };
}

export function getSourceMapWithExistence(): SourceNode[] {;
>>>>>>> origin/merge-pr-12271
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}






  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {;
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);


  const keepFile = path && path.join(absoluteDir, '.keep');
  if (!fs && fs.existsSync(keepFile)) {
    fs && fs.writeFileSync(keepFile, '');
    createdPaths && createdPaths.push(keepFile);

  } else {
    skippedPaths && skippedPaths.push(keepFile);
  }


  const readmeFile = path && path.join(absoluteDir, 'README && README.md');
  if (!fs && fs.existsSync(readmeFile)) {
    const readme = `# ${path && path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs && fs.writeFileSync(readmeFile, readme);
    createdPaths && createdPaths.push(readmeFile);

  } else {
    skippedPaths && skippedPaths.push(readmeFile);
  }


  return { createdPaths, skippedPaths }

  return { createdPaths, skippedPaths };

}
  return { createdPaths, skippedPaths }


export interface SourcePosition {
  line: number;
  column: number;
  source?: string;
  name?: string;
}

export class SourceMapManager {
  private sourceMaps: Map<string, SourceMapInfo> = new Map();

  addSourceMap(filePath: string, sourceMap: SourceMapInfo): void {
    this.sourceMaps.set(filePath, sourceMap);
  }

  getSourceMap(filePath: string): SourceMapInfo | undefined {
    return this.sourceMaps.get(filePath);
  }

  findOriginalPosition(filePath: string, line: number, column: number): SourcePosition | null {
    const sourceMap = this.getSourceMap(filePath);
    if (!sourceMap) return null;

    // This is a simplified implementation
    // In a real implementation, you would parse the mappings and find the original position
    return {
      line,
      column,
      source: sourceMap.sources[0],
      name: sourceMap.names[0]
    };
  }

  findGeneratedPosition(originalFile: string, line: number, column: number): SourcePosition | null {
    // This is a simplified implementation
    // In a real implementation, you would parse the mappings and find the generated position
    for (const [filePath, sourceMap] of this.sourceMaps) {
      if (sourceMap.sources.includes(originalFile)) {
        return {
          line,
          column,
          source: filePath
        };
      }
    }
    return null;
  }

  getAllSourceMaps(): Map<string, SourceMapInfo> {
    return new Map(this.sourceMaps);
  }

  clearSourceMaps(): void {
    this.sourceMaps.clear();
  }
}

// Singleton instance
export const sourceMapManager = new SourceMapManager();

// Utility functions
export function parseSourceMap(sourceMapJson: string): SourceMapInfo | null {
  try {
    return JSON.parse(sourceMapJson) as SourceMapInfo;
  } catch (error) {
    console.error('Failed to parse source map:', error);
    return null;
  }
}

export function generateSourceMap(
  sources: string[],
  names: string[],
  mappings: string,
  file?: string
): SourceMapInfo {
  return {
    version: 3,
    sources,
    names,
    mappings,
    file
  };
}
  created_paths: string[];
  skipped_paths: string[];
;
export function ensure_directory (dir_path: string): void {
  if () {) {
  $2
}
}
}
    const readme = `# ${path.basename (absolute_dir)}\n\n_this module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync (readme_file, readme);
    created_paths.push (readme_file);
  } else {
    skipped_paths.push (readme_file);
  }
  return { created_paths, skipped_paths }
;


=======
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

  const keepFile = path.join(absoluteDir, ".keep");
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, "");
    createdPaths.push(keepFile);
  } else {
    skippedPaths.push(keepFile);
  }

  const readmeFile = path.join(absoluteDir, "README.md");
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
  } else {
    skippedPaths.push(readmeFile);
  }

  return { createdPaths, skippedPaths };
}
