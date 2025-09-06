<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
export interface DeployTemplateResult {
=======
<<<<<<< HEAD
}
export interface DeployTemplateResult {
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


}
export interface DeployTemplateResult {

// Mock source map utility
export function getSourceMapWithExistence() {
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
origin/cursor/automate-test-improve-and-merge-code-2533
  return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export interface DeployTemplateResult {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    nodes: []
    edges: []
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
}
export function getGitStatus() {
  return {
    connected: false
    branch: 'main'
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  return nodes && nodes.map(markExistenceRecursive);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  return nodes && nodes.map(markExistenceRecursive);

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap();
  return nodes.map(markExistenceRecursive);
}
export interface DeployTemplateResult {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    nodes: [],
    edges: [];
  };

}
export function getGitStatus() {
  return {

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  createdPaths: string[];
  skippedPaths: string[];
  createdPaths: string[];
  skippedPaths: string[];
=======

ursor/fix-website-loading-errors-and-merge-6662
  createdPaths: string[];
  skippedPaths: string[];

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  } else {
    skippedPaths.push(keepFile);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  } else {
    skippedPaths.push(keepFile);
  }
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  } else {
    skippedPaths.push(readmeFile);
  }

<<<<<<< HEAD
<<<<<<< HEAD



  return { createdPaths, skippedPaths };

}
  return { createdPaths, skippedPaths }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
  return { createdPaths, skippedPaths }

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc



ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  return { createdPaths, skippedPaths };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
