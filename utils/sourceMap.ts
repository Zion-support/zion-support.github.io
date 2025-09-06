// Source map utilities
export interface SourceMapInfo {
  version: number;
  sources: string[];
  names: string[];
  mappings: string;
  sourcesContent?: string[];
  file?: string;
  sourceRoot?: string;
}

export interface SourcePosition {
  line: number;
  column: number;
  source?: string;
  name?: string;
}

export class SourceMapManager {
  private sourceMaps: Map<string, SourceMapInfo> = new Map();

  addSourceMap(filePath: string, sourceMap: SourceMapInfo): void {
    this.sourceMaps.set(filePath, sourceMap);
  }

  getSourceMap(filePath: string): SourceMapInfo | undefined {
    return this.sourceMaps.get(filePath);
  }

  findOriginalPosition(filePath: string, line: number, column: number): SourcePosition | null {
    const sourceMap = this.getSourceMap(filePath);
    if (!sourceMap) return null;

    // This is a simplified implementation
    // In a real implementation, you would parse the mappings and find the original position
    return {
      line,
      column,
      source: sourceMap.sources[0],
      name: sourceMap.names[0]
    };
  }

  findGeneratedPosition(originalFile: string, line: number, column: number): SourcePosition | null {
    // This is a simplified implementation
    // In a real implementation, you would parse the mappings and find the generated position
    for (const [filePath, sourceMap] of this.sourceMaps) {
      if (sourceMap.sources.includes(originalFile)) {
        return {
          line,
          column,
          source: filePath
        };
      }
    }
    return null;
  }

  getAllSourceMaps(): Map<string, SourceMapInfo> {
    return new Map(this.sourceMaps);
  }

  clearSourceMaps(): void {
    this.sourceMaps.clear();
  }
}

// Singleton instance
export const sourceMapManager = new SourceMapManager();

// Utility functions
export function parseSourceMap(sourceMapJson: string): SourceMapInfo | null {
  try {
    return JSON.parse(sourceMapJson) as SourceMapInfo;
  } catch (error) {
    console.error('Failed to parse source map:', error);
    return null;
  }
}

export function generateSourceMap(
  sources: string[],
  names: string[],
  mappings: string,
  file?: string
): SourceMapInfo {
  return {
    version: 3,
    sources,
    names,
    mappings,
    file
  };
}
