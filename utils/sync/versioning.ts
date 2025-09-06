// Versioning utilities for DAO operations
export interface VersionInfo {
  version: string;
  timestamp: number;
  hash: string;
  previousHash?: string;
  changes: string[];
}

export interface VersionedData {
  data: any;
  version: VersionInfo;
  signature?: string;
}

export function createVersion(data: any, previousVersion?: VersionInfo): VersionInfo {
  const timestamp = Date.now();
  const dataHash = hashData(data);
  const changes = extractChanges(data, previousVersion);
  
  return {
    version: generateVersionNumber(previousVersion),
    timestamp,
    hash: dataHash,
    previousHash: previousVersion?.hash,
    changes
  };
}

export function generateVersionNumber(previousVersion?: VersionInfo): string {
  if (!previousVersion) {
    return '1.0.0';
  }
  
  const [major, minor, patch] = previousVersion.version.split('.').map(Number);
  
  // Simple versioning logic - increment patch for data changes
  if (previousVersion.changes.length > 0) {
    return `${major}.${minor}.${patch + 1}`;
  }
  
  // Increment minor for structural changes
  return `${major}.${minor + 1}.0`;
}

export function hashData(data: any): string {
  const jsonString = JSON.stringify(data, Object.keys(data).sort());
  return require('crypto')
    .createHash('sha256')
    .update(jsonString)
    .digest('hex');
}

export function extractChanges(data: any, previousVersion?: VersionInfo): string[] {
  if (!previousVersion) {
    return ['Initial version'];
  }
  
  const changes: string[] = [];
  
  // Simple change detection - in a real app, this would be more sophisticated
  const currentHash = hashData(data);
  if (currentHash !== previousVersion.hash) {
    changes.push('Data modified');
  }
  
  return changes;
}

export function validateVersionChain(versions: VersionInfo[]): boolean {
  if (versions.length === 0) return true;
  
  // Check that each version references the previous one correctly
  for (let i = 1; i < versions.length; i++) {
    const current = versions[i];
    const previous = versions[i - 1];
    
    if (current.previousHash !== previous.hash) {
      return false;
    }
  }
  
  return true;
}

export function getLatestVersion(versions: VersionInfo[]): VersionInfo | null {
  if (versions.length === 0) return null;
  
  return versions.reduce((latest, current) => {
    return current.timestamp > latest.timestamp ? current : latest;
  });
}

export function compareVersions(version1: string, version2: string): number {
  const v1Parts = version1.split('.').map(Number);
  const v2Parts = version2.split('.').map(Number);
  
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || 0;
    const v2Part = v2Parts[i] || 0;
    
    if (v1Part > v2Part) return 1;
    if (v1Part < v2Part) return -1;
  }
  
  return 0;
}

export function isVersionNewer(version1: string, version2: string): boolean {
  return compareVersions(version1, version2) > 0;
}

export function createVersionedData(data: any, previousVersion?: VersionInfo): VersionedData {
  const version = createVersion(data, previousVersion);
  
  return {
    data,
    version
  };
}

export function validateVersionedData(versionedData: VersionedData): boolean {
  const expectedHash = hashData(versionedData.data);
  return expectedHash === versionedData.version.hash;
}

export function mergeVersions(versions: VersionInfo[]): VersionInfo | null {
  if (versions.length === 0) return null;
  
  // Find the latest version
  const latest = getLatestVersion(versions);
  if (!latest) return null;
  
  // Validate the chain
  if (!validateVersionChain(versions)) {
    throw new Error('Invalid version chain');
  }
  
  return latest;
}

export function getVersionHistory(versions: VersionInfo[], limit?: number): VersionInfo[] {
  const sorted = versions.sort((a, b) => b.timestamp - a.timestamp);
  return limit ? sorted.slice(0, limit) : sorted;
}