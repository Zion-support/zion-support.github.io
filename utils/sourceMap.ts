export interface SourceMapInfo {
  file: string;
  line: number;
  column: number;
  source: string;
}

export function parseSourceMap(sourceMap: string): SourceMapInfo[] {
  try {
    const parsed = JSON.parse(sourceMap);
    return parsed.sources?.map((source: string, index: number) => ({
      file: source,
      line: 1,
      column: 0,
      source: parsed.sourcesContent?.[index] || ''
    })) || [];
  } catch (error) {
    console.error('Error parsing source map:', error);
    return [];
  }
}

export function findSourceLocation(sourceMap: string, line: number, column: number): SourceMapInfo | null {
  const sourceMapInfo = parseSourceMap(sourceMap);
  return sourceMapInfo.find(info => info.line === line && info.column === column) || null;
}