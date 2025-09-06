// Versioning utilities for sync operations
export interface VersionInfo {
  version: string;
  timestamp: number;
  hash: string;
  previousHash?: string;
}

export interface VersionedData {
  data: any;
  version: VersionInfo;
}

export function createVersion(data: any, previousHash?: string): VersionInfo {
  const timestamp = Date.now();
  const hash = createDataHash(data);
  
  return {
    version: `v${timestamp}`,
    timestamp,
    hash,
    previousHash
  };
}

export function createDataHash(data: any): string {
  const json = JSON.stringify(data, Object.keys(data).sort());
  // Simple hash function - in production, use crypto.createHash
  let hash = 0;
  for (let i = 0; i < json.length; i++) {
    const char = json.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(16);
}

export function validateVersionChain(versions: VersionInfo[]): boolean {
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
  
  return versions.reduce((latest, current) => 
    current.timestamp > latest.timestamp ? current : latest
  );
}