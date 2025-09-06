// Source map utilities for development
export interface SourceMapInfo {
  file: string;
  line: number;
  column: number;
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
  if (!sourceMap || !sourceMap.sources || !sourceMap.mappings) {
    return null;
  }

  // This is a simplified implementation
  // In a real implementation, you'd parse the mappings field
  return {
    file: sourceMap.sources[0] || 'unknown',
    line: line,
    column: column
  };
}