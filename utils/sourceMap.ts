// Mock source map utility
export function getSourceMapWithExistence() {
  return {
    nodes: [],
    edges: []
  };
}

export function getGitStatus() {
  return {
    connected: false,
    branch: 'main'
  };
}

export function deployBasicTemplateForPath(path: string) {
  return {
    path,
    deployed: true,
    template: 'basic'
  };
}