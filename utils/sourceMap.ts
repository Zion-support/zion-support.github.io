export interface SourceMapInfo {
  version: number;
  sources: string[];
  names: string[];
  mappings: string;
  sourcesContent?: string[];
  file?: string;
  sourceRoot?: string;
}

export function parseSourceMap(sourceMapString: string): SourceMapInfo | null {
  try {
    return JSON.parse(sourceMapString);
  } catch (error) {
    console.error('Failed to parse source map:', error);
    return null;
  }
}

export function generateSourceMap(
  version: number = 3,
  sources: string[] = [],
  names: string[] = [],
  mappings: string = '',
  sourcesContent?: string[],
  file?: string,
  sourceRoot?: string
): SourceMapInfo {
  return {
    version,
    sources,
    names,
    mappings,
    sourcesContent,
    file,
    sourceRoot
  };
}

export function validateSourceMap(sourceMap: SourceMapInfo): boolean {
  return (
    typeof sourceMap.version === 'number' &&
    Array.isArray(sourceMap.sources) &&
    Array.isArray(sourceMap.names) &&
    typeof sourceMap.mappings === 'string'
  );
}