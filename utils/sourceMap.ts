<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
export interface DeployTemplateResult {

// Mock source map utility
export function getSourceMapWithExistence() {
  return {
    nodes: []
    edges: []
  }
<<<<<<< HEAD

=======
    nodes: [],
    edges: [];
  };
    nodes: [],
    edges: [];
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface DeployTemplateResult {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export function getGitStatus() {
  return {
    connected: false
    branch: 'main'
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

  return nodes && nodes.map(markExistenceRecursive);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
<<<<<<< HEAD
<<<<<<< HEAD
=======

    nodes: [],
    edges: [];
  };

}
export function getGitStatus() {
  return {

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    connected: false,
    branch: 'main';
  };
}

export function getSourceMapWithExistence(): SourceNode[] {;
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }


<<<<<<< HEAD
=======
  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {;
    fs.mkdirSync(dirPath, { recursive: true });
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {
  const absoluteDir = path && path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);
<<<<<<< HEAD
<<<<<<< HEAD


  const keepFile = path && path.join(absoluteDir, '.keep');
  if (!fs && fs.existsSync(keepFile)) {
    fs && fs.writeFileSync(keepFile, '');
    createdPaths && createdPaths.push(keepFile);

=======
  const keepFile = path.join(absoluteDir, '.keep');
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, '');
    createdPaths.push(keepFile);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } else {
    skippedPaths && skippedPaths.push(keepFile);
  }
<<<<<<< HEAD
<<<<<<< HEAD


  const readmeFile = path && path.join(absoluteDir, 'README && README.md');
  if (!fs && fs.existsSync(readmeFile)) {
    const readme = `# ${path && path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs && fs.writeFileSync(readmeFile, readme);
    createdPaths && createdPaths.push(readmeFile);

=======
  const readmeFile = path.join(absoluteDir, 'README.md');
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync(readmeFile, readme);
    createdPaths.push(readmeFile);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } else {
    skippedPaths && skippedPaths.push(readmeFile);
  }
<<<<<<< HEAD

  return { createdPaths, skippedPaths }

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  } else {
    skippedPaths.push(readmeFile);
  }


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  return { createdPaths, skippedPaths };

}
  return { createdPaths, skippedPaths }

<<<<<<< HEAD
<<<<<<< HEAD
=======
// Source map utilities
export interface SourceMapInfo {
  version: number;
  sources: string[];
  names: string[];
  mappings: string;
  sourcesContent?: string[];
  file?: string;
  sourceRoot?: string;
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  created_paths: string[];
  skipped_paths: string[];
;
export function ensure_directory (dir_path: string): void {
  if () {) {
  $2
=======
  return { createdPaths, skippedPaths }


  return { createdPaths, skippedPaths };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
    fs.mkdir_sync (dir_path, { recursive: true });
  }
export function deployBasicTemplateForPath (
  repoRelativePath: string): DeployTemplateResult {
  const absolute_dir = path.join (ROOT, repoRelativePath);
  const created_paths: string[] = [];
  const skipped_paths: string[] = [];
;
  ensure_directory (absolute_dir);
;
  const keep_file = path.join (absolute_dir, '.keep');
  if () {) {
  $2
}
<<<<<<< HEAD
    fs.writeFileSync (keep_file, '');
    created_paths.push (keep_file);
  } else {
    skipped_paths.push (keep_file);
  }
  const readme_file = path.join (absolute_dir, 'README.md');
  if () {) {
  $2
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const readme = `# ${path.basename (absolute_dir)}\n\n_this module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync (readme_file, readme);
    created_paths.push (readme_file);
  } else {
    skipped_paths.push (readme_file);
  }
  return { created_paths, skipped_paths }
;
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
