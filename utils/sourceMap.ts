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
  // In a real implementation, you would parse the mappings field
  // which contains base64 VLQ encoded source location mappings
  
  return {
    file: sourceMap.sources[0] || 'unknown',
    line: line,
    column: column
  };
}

export function formatErrorWithSourceMap(
  error: Error,
  sourceMap: any,
  line: number,
  column: number
): string {
  const original = getOriginalPosition(sourceMap, line, column);
  
  if (original) {
    return `${error.message}\n  at ${original.file}:${original.line}:${original.column}`;
  }
  
  return error.message;
}