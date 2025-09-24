import fs from 'fs';
import path from 'path';

export interface SourceNode {
	id: string;
	name: string;
	type: 'directory' | 'file';
	path: string;
	exists?: boolean;
	children?: SourceNode[];
}

export interface SourceMapInfo {
	version: number;
	sources: string[];
	names: string[];
	mappings: string;
	file?: string;
}

function buildZionSourceMap(): SourceNode[] {
	return [
		{
			id: 'src',
			name: 'src',
			type: 'directory',
			path: 'src',
			exists: false,
			children: [
				{ id: 'components', name: 'components', type: 'directory', path: 'src/components', exists: false },
				{ id: 'pages', name: 'pages', type: 'directory', path: 'src/pages', exists: false },
				{ id: 'utils', name: 'utils', type: 'directory', path: 'src/utils', exists: false }
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

export function getSourceMapWithExistence(): SourceNode[] {
	const nodes = buildZionSourceMap();
	return nodes.map(markExistenceRecursive);
}

export interface DeployTemplateResult {
	createdPaths: string[];
	skippedPaths: string[];
}

export function ensureDirectory(dirPath: string): void {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

export function deployBasicTemplateForPath(repoRelativePath: string): DeployTemplateResult {
	const absoluteDir = path.join(process.cwd(), repoRelativePath);
	const createdPaths: string[] = [];
	const skippedPaths: string[] = [];
	ensureDirectory(absoluteDir);

	const keepFile = path.join(absoluteDir, '.keep');
	if (!fs.existsSync(keepFile)) {
		fs.writeFileSync(keepFile, '');
		createdPaths.push(keepFile);
	} else {
		skippedPaths.push(keepFile);
	}

	const readmeFile = path.join(absoluteDir, 'README.md');
	if (!fs.existsSync(readmeFile)) {
		const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`;
		fs.writeFileSync(readmeFile, readme);
		createdPaths.push(readmeFile);
	} else {
		skippedPaths.push(readmeFile);
	}

	return { createdPaths, skippedPaths };
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
		return { line, column, source: sourceMap.sources[0], name: sourceMap.names[0] };
	}

	findGeneratedPosition(originalFile: string, line: number, column: number): SourcePosition | null {
		for (const [filePath, sourceMap] of this.sourceMaps) {
			if (sourceMap.sources.includes(originalFile)) {
				return { line, column, source: filePath };
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

export const sourceMapManager = new SourceMapManager();

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
	return { version: 3, sources, names, mappings, file };
}
