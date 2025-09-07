// Source map utilities for development
export interface SourceMapInfo {
  line: number;
  column: number;
  source: string;
  name?: string;
}

export function parseSourceMap(sourceMap: string): any {
  try {
    return JSON.parse(sourceMap);
  } catch (error) {
    console.error('Failed to parse source map:', error);
    return null;
  }
}

export function getOriginalPosition(
  sourceMap: any,
  line: number,
  column: number
): SourceMapInfo | null {
  if (!sourceMap || !sourceMap.mappings) {
    return null;
  }

  // Simplified source map parsing
  // In a real implementation, you'd use a proper source map library
  return {
    line: line,
    column: column,
    source: sourceMap.sources?.[0] || 'unknown'
  };
}

export function generateSourceMap(
  sources: string[],
  mappings: string
): string {
  return JSON.stringify({
    version: 3,
    sources,
    mappings,
    names: []
  });
}