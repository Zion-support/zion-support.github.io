

    );
  }

  return events;export function resetState(): void {
  state = { ...defaultState }

}
// Singleton instance
export const syncStorage = new SyncStorage();

// Main functions for external use
export async function createJob(job: Omit<SyncJob, 'id' | 'createdAt' | 'updatedAt' | 'progress'>): Promise<SyncJob> {
  return syncStorage.createJob(job);
}

export async function getJob(id: string): Promise<SyncJob | null> {
  return syncStorage.getJob(id);
}

export async function updateJob(id: string, updates: Partial<SyncJob>): Promise<SyncJob | null> {
  return syncStorage.updateJob(id, updates);
}

export async function startJob(id: string): Promise<boolean> {
  return syncStorage.startJob(id);
}

export async function completeJob(id: string, error?: string): Promise<boolean> {
  return syncStorage.completeJob(id, error);
}

export async function updateJobProgress(id: string, progress: Partial<SyncJob['progress']>): Promise<boolean> {
  return syncStorage.updateJobProgress(id, progress);
}

export async function createConnection(connection: Omit<SyncConnection, 'id' | 'createdAt' | 'updatedAt'>): Promise<SyncConnection> {
  return syncStorage.createConnection(connection);
}

export async function getConnection(id: string): Promise<SyncConnection | null> {
  return syncStorage.getConnection(id);
}

export async function updateConnection(id: string, updates: Partial<SyncConnection>): Promise<SyncConnection | null> {
  return syncStorage.updateConnection(id, updates);
}

export async function createMapping(mapping: Omit<SyncMapping, 'id' | 'createdAt' | 'updatedAt'>): Promise<SyncMapping> {
  return syncStorage.createMapping(mapping);
}

export async function getMapping(id: string): Promise<SyncMapping | null> {
  return syncStorage.getMapping(id);
}

export async function updateMapping(id: string, updates: Partial<SyncMapping>): Promise<SyncMapping | null> {
  return syncStorage.updateMapping(id, updates);
}

export async function createLog(log: Omit<SyncLog, 'id' | 'timestamp'>): Promise<SyncLog> {
  return syncStorage.createLog(log);
}

export async function getLogsByJob(jobId: string, limit?: number): Promise<SyncLog[]> {
  return syncStorage.getLogsByJob(jobId, limit);
}

// Utility functions
export function createSyncJob(
  type: SyncJob['type'],
  source: string,
  destination: string,
  config?: SyncJob['config']
): Omit<SyncJob, 'id' | 'createdAt' | 'updatedAt' | 'progress'> {
  return {
    type,
    status: 'pending',
    source,
    destination,
    config: config || {}
  };
}

export function createSyncConnection(
  name: string,
  type: SyncConnection['type'],
  config: SyncConnection['config']
): Omit<SyncConnection, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    name,
    type,
    config,
    isActive: true
  };
}

export function createSyncMapping(
  name: string,
  sourceConnectionId: string,
  destinationConnectionId: string,
  fieldMappings: Record<string, string>
): Omit<SyncMapping, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    name,
    sourceConnectionId,
    destinationConnectionId,
    fieldMappings,
    isActive: true
  };
}

export function generateJobId(): string {
  return `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConnectionId(): string {
  return `conn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateMappingId(): string {
  return `mapping_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function calculateProgress(processed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((processed / total) * 100);
}

export function formatDuration(startTime: string, endTime?: string): string {
  const start = new Date(startTime);
  const end = endTime ? new Date(endTime) : new Date();
  const duration = end.getTime() - start.getTime();
  
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}



const default_state: SyncState = {
  config: {
    instance_id: 'default - instance',
    peers: [],
    scope: 'global',
    opt_in: false,
    paused: false;
  },
  lastSyncedAt: new Date ().toISOString ();
  return events;export function resetState(): void {;
  state = { ...defaultState };
}

}
}
}
}
}
