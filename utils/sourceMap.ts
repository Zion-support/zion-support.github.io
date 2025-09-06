<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

export interface SourceNode {
  id: string;
  name: string;
  type: 'file' | 'directory' | 'component';
  path: string;
  exists: boolean;
  children?: SourceNode[];
}

export interface DeployTemplateResult {
  createdPaths: string[];
  skippedPaths: string[];
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
<<<<<<< HEAD
  return nodes.map(markExistenceRecursive);
=======
// Mock source map utility
export function getSourceMapWithExistence() {
  return {
    nodes: []
    edges: []
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export function getGitStatus() {
  return {
    connected: false
    branch: 'main'
  }
}
<<<<<<< HEAD
=======
  return nodes && nodes.map(markExistenceRecursive);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
      ]
    }
  ];
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const exists = fs.existsSync(node.path);
  return {
    ...node,
    exists,
    children: node.children?.map(markExistenceRecursive)
  };
}

=======
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
  createdPaths: string[];
  skippedPaths: string[];
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {
  const absoluteDir = path && path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);
<<<<<<< HEAD
  const keepFile = path.join(absoluteDir, '.keep');
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, '');
    createdPaths.push(keepFile);
=======

  const keepFile = path && path.join(absoluteDir, '.keep');
  if (!fs && fs.existsSync(keepFile)) {
    fs && fs.writeFileSync(keepFile, '');
    createdPaths && createdPaths.push(keepFile);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } else {
    skippedPaths && skippedPaths.push(keepFile);
  }
<<<<<<< HEAD
  const readmeFile = path.join(absoluteDir, 'README.md');
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
=======

  const readmeFile = path && path.join(absoluteDir, 'README && README.md');
  if (!fs && fs.existsSync(readmeFile)) {
    const readme = `# ${path && path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs && fs.writeFileSync(readmeFile, readme);
    createdPaths && createdPaths.push(readmeFile);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } else {
    skippedPaths && skippedPaths.push(readmeFile);
  }
<<<<<<< HEAD

  return { createdPaths, skippedPaths };
}
=======
  return { createdPaths, skippedPaths }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
