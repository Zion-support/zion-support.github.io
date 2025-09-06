// Source map utility functions
export interface SourceMapInfo {
  version: number;
  sources: string[];
  names: string[];
  mappings: string;
  sourcesContent?: string[];
}

export function parseSourceMap(sourceMap: string): SourceMapInfo | null {
  try {
    return JSON.parse(sourceMap);
  } catch {
    return null;
  }
}

export function generateSourceMap(sources: string[], mappings: string): SourceMapInfo {
  return {
    version: 3,
    sources,
    names: [],
    mappings,
    sourcesContent: sources
  };
}