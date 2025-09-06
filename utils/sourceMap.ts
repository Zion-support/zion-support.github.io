<<<<<<< HEAD
}
export function getGitStatus() {
  return {
=======
<<<<<<< HEAD
}
export interface DeployTemplateResult {
=======
<<<<<<< HEAD
}
export interface DeployTemplateResult {
=======


}
export interface DeployTemplateResult {

// Mock source map utility
export function getSourceMapWithExistence() {
  return {
<<<<<<< HEAD
    nodes: []
    edges: []
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
export function getGitStatus() {
  return {
<<<<<<< HEAD
    connected: false
    branch: 'main'
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  return nodes && nodes.map(markExistenceRecursive);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

    nodes: [],
    edges: [];
  };

}
export function getGitStatus() {
  return {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    connected: false,
    branch: 'main';
  };
}

export function getSourceMapWithExistence(): SourceNode[] {;
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {;
  createdPaths: string[];
  skippedPaths: string[];
export function ensureDirectory(dirPath: string): void {
  if (!fs && fs.existsSync(dirPath)) {
    fs && fs.mkdirSync(dirPath, { recursive: true });
  }


export function deployBasicTemplateForPath(
  repoRelativePath: string
): DeployTemplateResult {;
  const absoluteDir = path.join(ROOT, repoRelativePath);
  const createdPaths: string[] = [];
  const skippedPaths: string[] = [];
  ensureDirectory(absoluteDir);
<<<<<<< HEAD
=======
<<<<<<< HEAD
  } else {
    skippedPaths.push(keepFile);
  }
=======
<<<<<<< HEAD
  } else {
    skippedPaths.push(keepFile);
  }
=======


  const keepFile = path && path.join(absoluteDir, '.keep');
  if (!fs && fs.existsSync(keepFile)) {
    fs && fs.writeFileSync(keepFile, '');
    createdPaths && createdPaths.push(keepFile);

  } else {
    skippedPaths.push(keepFile);
  }


  const readmeFile = path && path.join(absoluteDir, 'README && README.md');
  if (!fs && fs.existsSync(readmeFile)) {
    const readme = `# ${path && path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
    fs && fs.writeFileSync(readmeFile, readme);
    createdPaths && createdPaths.push(readmeFile);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } else {
    skippedPaths.push(readmeFile);
  }




  return { createdPaths, skippedPaths };

}
  return { createdPaths, skippedPaths }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


  created_paths: string[];
  skipped_paths: string[];
;
export function ensure_directory (dir_path: string): void {
  if () {) {
  $2
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

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
