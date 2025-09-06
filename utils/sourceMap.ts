<<<<<<< HEAD
// Mock source map utility
export function getSourceMapWithExistence() {
  return {
<<<<<<< HEAD
    nodes: []
    edges: []
  }
=======
    nodes: [],
    edges: [];
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export function getGitStatus() {
  return {
<<<<<<< HEAD
    connected: false
    branch: 'main'
  }
}
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
=======
    connected: false,
    branch: 'main';
  };
}

export function getSourceMapWithExistence(): SourceNode[] {;
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {;
    fs.mkdirSync(dirPath, { recursive: true });
  }
export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {;
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
  return { createdPaths, skippedPaths }
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  return { createdPaths, skippedPaths };

}
}
}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
