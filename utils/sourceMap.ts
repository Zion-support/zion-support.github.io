<<<<<<< HEAD

<<<<<<< HEAD
}
export function getGitStatus() {
  return {

=======

}
export interface DeployTemplateResult {

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Mock source map utility
export function getSourceMapWithExistence() {
  return {
<<<<<<< HEAD
    nodes: []
    edges: []
  }
<<<<<<< HEAD

=======
=======
    nodes: [],
    edges: [];
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export function getGitStatus() {
  return {
<<<<<<< HEAD
    connected: false
    branch: 'main'
  }
}
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
=======
<<<<<<< HEAD

    nodes: [],
    edges: [];
  };

}
export function getGitStatus() {
  return {

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    connected: false,
    branch: 'main';
  };
}
<<<<<<< HEAD

export function getSourceMapWithExistence(): SourceNode[] {;
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  createdPaths: string[];
  skippedPaths: string[];
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }


=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {;
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } else {
    skippedPaths.push(keepFile);
  }
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } else {
    skippedPaths.push(readmeFile);
  }
<<<<<<< HEAD

  return { createdPaths, skippedPaths }

<<<<<<< HEAD
=======


  return { createdPaths, skippedPaths };

}
=======
  return { createdPaths, skippedPaths }

=======
  return { createdPaths, skippedPaths }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

<<<<<<< HEAD

  created_paths: string[];
  skipped_paths: string[];
;
export function ensure_directory (dir_path: string): void {
  if () {) {
  $2
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  return { createdPaths, skippedPaths };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
}
}
<<<<<<< HEAD
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
