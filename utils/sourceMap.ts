export interface SourceMapInfo {
  file: string;
  line: number;
  column: number;
  source: string;
}

export function parseSourceMap(sourceMap: string): SourceMapInfo | null {
  try {
    const parsed = JSON.parse(sourceMap);
    return {
      file: parsed.file || '',
      line: parsed.line || 0,
      column: parsed.column || 0,
      source: parsed.source || ''
    };
  } catch {
    return null;
  }
}

export function generateSourceMap(file: string, line: number, column: number, source: string): string {
  return JSON.stringify({
    file,
    line,
    column,
    source
  });
}