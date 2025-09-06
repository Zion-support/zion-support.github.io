

}
export interface DeployTemplateResult {

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

  return nodes && nodes.map(markExistenceRecursive);


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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }


export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {
  const absoluteDir = path && path.join(ROOT, repoRelativePath);
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
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  return { createdPaths, skippedPaths };

}
=======
  return { createdPaths, skippedPaths }

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


  created_paths: string[];
  skipped_paths: string[];
;
export function ensure_directory (dir_path: string): void {
  if () {) {
  $2
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
    fs.writeFileSync (keep_file, '');
    created_paths.push (keep_file);
  } else {
    skipped_paths.push (keep_file);
  }
  const readme_file = path.join (absolute_dir, 'README.md');
  if () {) {
  $2
}
    const readme = `# ${path.basename (absolute_dir)}\n\n_this module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs.writeFileSync (readme_file, readme);
    created_paths.push (readme_file);
  } else {
    skipped_paths.push (readme_file);
  }
  return { created_paths, skipped_paths }
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
