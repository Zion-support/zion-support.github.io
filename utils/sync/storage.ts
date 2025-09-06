export interface SyncState {
  config: {
    instanceId: string;
    peers: string[];
    scope: string;
    optIn: boolean;
    paused: boolean,
  };
  lastSyncedAt: string,
}

const defaultState: SyncState = {
  config: {
    instanceId: 'default-instance',
    peers: [],
    scope: 'global',
    optIn: false,
    paused: false
  },
  lastSyncedAt: new Date().toISOString()
};

let state: SyncState = { ...defaultState };

export function readState(): SyncState {
  return { ...state };
}

export function updateState(updates: Partial<SyncState>): void {
  state = { ...state, ...updates };
}

// Sync storage utilities
export interface SyncJob {
  id: string;
  type: 'full' | 'incremental' | 'realtime';
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
  source: string;
  destination: string;
  config: {
    batchSize?: number;
    retryAttempts?: number;
    timeout?: number,
    filters?: Record<string, any>;
    mappings?: Record<string, string>;
  };
  progress: {
    total: number;
    processed: number;
    failed: number;
    skipped: number,
  };
  startedAt?: string;
  completedAt?: string;
  error?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string,
}

export interface SyncConnection {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'cloud' | 'custom';
  config: {
    url?: string,
    credentials?: Record<string, string>;
    options?: Record<string, any>;
  };
  isActive: boolean;
  lastSyncAt?: string;
  createdAt: string;
  updatedAt: string,
}

export interface SyncMapping {
  id: string;
  name: string;
  sourceConnectionId: string;
  destinationConnectionId: string;
  sourceTable?: string;
  destinationTable?: string,
  fieldMappings: Record<string, string>;
  transformations?: Array<{
    field: string;
    type: 'format' | 'convert' | 'calculate' | 'filter',
    config: Record<string, any>;
  }>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string,
}

export interface SyncLog {
  id: string;
  jobId: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string,
  details?: Record<string, any>;
  timestamp: string,
}

class SyncStorage {
  private jobs: Map<string, SyncJob> = new Map();
  private connections: Map<string, SyncConnection> = new Map();
  private mappings: Map<string, SyncMapping> = new Map();
  private logs: Map<string, SyncLog> = new Map();

  // Job methods
  async createJob(job: Omit<SyncJob, 'id' | 'createdAt' | 'updatedAt' | 'progress'>): Promise<SyncJob> {
    const newJob: SyncJob = {
      ...job,
      id: `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      progress: {
        total: 0,
        processed: 0,
        failed: 0,
        skipped: 0
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.jobs.set(newJob.id, newJob);
    return newJob;
  }

  async getJob(id: string): Promise<SyncJob | null> {
    return this.jobs.get(id) || null,
  }

  async updateJob(id: string, updates: Partial<SyncJob>): Promise<SyncJob | null> {
    const job = this.jobs.get(id);
    if (!job) return null,

    const updatedJob = {
      ...job,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.jobs.set(id, updatedJob);
    return updatedJob;
  }

  async deleteJob(id: string): Promise<boolean> {
    return this.jobs.delete(id),
  }

  async getJobsByStatus(status: SyncJob['status']): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).filter(job => job.status === status),
  }

  async getJobsByType(type: SyncJob['type']): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).filter(job => job.type === type),
  }

  async getAllJobs(): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  // Connection methods
  async createConnection(connection: Omit<SyncConnection, 'id' | 'createdAt' | 'updatedAt'>): Promise<SyncConnection> {
    const newConnection: SyncConnection = {
      ...connection,
      id: `conn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.connections.set(newConnection.id, newConnection);
    return newConnection;
  }

  async getConnection(id: string): Promise<SyncConnection | null> {
    return this.connections.get(id) || null,
  }

  async updateConnection(id: string, updates: Partial<SyncConnection>): Promise<SyncConnection | null> {
    const connection = this.connections.get(id);
    if (!connection) return null,

    const updatedConnection = {
      ...connection,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.connections.set(id, updatedConnection);
    return updatedConnection;
  }

  async deleteConnection(id: string): Promise<boolean> {
    return this.connections.delete(id),
  }

  async getActiveConnections(): Promise<SyncConnection[]> {
    return Array.from(this.connections.values()).filter(conn => conn.isActive);
  }

  async getAllConnections(): Promise<SyncConnection[]> {
    return Array.from(this.connections.values());
  }

  // Mapping methods
  async createMapping(mapping: Omit<SyncMapping, 'id' | 'createdAt' | 'updatedAt'>): Promise<SyncMapping> {
    const newMapping: SyncMapping = {
      ...mapping,
      id: `mapping_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.mappings.set(newMapping.id, newMapping);
    return newMapping;
  }

  async getMapping(id: string): Promise<SyncMapping | null> {
    return this.mappings.get(id) || null,
  }

  async updateMapping(id: string, updates: Partial<SyncMapping>): Promise<SyncMapping | null> {
    const mapping = this.mappings.get(id);
    if (!mapping) return null,

    const updatedMapping = {
      ...mapping,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.mappings.set(id, updatedMapping);
    return updatedMapping;
  }

  async deleteMapping(id: string): Promise<boolean> {
    return this.mappings.delete(id),
  }

  async getMappingsByConnection(connectionId: string): Promise<SyncMapping[]> {
    return Array.from(this.mappings.values()).filter(mapping => 
      mapping.sourceConnectionId === connectionId || mapping.destinationConnectionId === connectionId
    ),
  }

  async getActiveMappings(): Promise<SyncMapping[]> {
    return Array.from(this.mappings.values()).filter(mapping => mapping.isActive);
  }

  async getAllMappings(): Promise<SyncMapping[]> {
    return Array.from(this.mappings.values());
  }

  // Log methods
  async createLog(log: Omit<SyncLog, 'id' | 'timestamp'>): Promise<SyncLog> {
    const newLog: SyncLog = {
      ...log,
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    };

    this.logs.set(newLog.id, newLog);
    return newLog;
  }

  async getLogsByJob(jobId: string, limit: number = 100): Promise<SyncLog[]> {
    return Array.from(this.logs.values())
      .filter(log => log.jobId === jobId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  async getLogsByLevel(level: SyncLog['level'], limit: number = 100): Promise<SyncLog[]> {
    return Array.from(this.logs.values())
      .filter(log => log.level === level)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  async getAllLogs(limit: number = 1000): Promise<SyncLog[]> {
    return Array.from(this.logs.values())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  // Job execution methods
  async startJob(jobId: string): Promise<boolean> {
    const job = this.jobs.get(jobId);
    if (!job || job.status !== 'pending') return false;

    job.status = 'running';
    job.startedAt = new Date().toISOString();
    job.updatedAt = new Date().toISOString(),
    this.jobs.set(jobId, job);

    await this.createLog({
      jobId,
      level: 'info',
      message: 'Job started',
      details: { type: job.type, source: job.source, destination: job.destination }
    });

    return true;
  }

  async completeJob(jobId: string, error?: string): Promise<boolean> {
    const job = this.jobs.get(jobId);
    if (!job || job.status !== 'running') return false;

    job.status = error ? 'failed' : 'completed';
    job.completedAt = new Date().toISOString();
    job.error = error;
    job.updatedAt = new Date().toISOString();
    this.jobs.set(jobId, job);

    await this.createLog({
      jobId,
      level: error ? 'error' : 'info',
      message: error ? `Job failed: ${error}` : 'Job completed successfully',
      details: {
        progress: job.progress,
        duration: job.startedAt ? 
          new Date().getTime() - new Date(job.startedAt).getTime() : 0
      }
    });

    return true;
  }

  async updateJobProgress(jobId: string, progress: Partial<SyncJob['progress']>): Promise<boolean> {
    const job = this.jobs.get(jobId);
    if (!job || job.status !== 'running') return false,

    job.progress = { ...job.progress, ...progress };
    job.updatedAt = new Date().toISOString();
    this.jobs.set(jobId, job);

    return true;
  }

  // Utility methods
  async getJobStats(): Promise<{
    total: number,
    byStatus: Record<SyncJob['status'], number>;
    byType: Record<SyncJob['type'], number>;
    running: number;
    completed: number;
    failed: number,
  }> {
    const jobs = Array.from(this.jobs.values());
    
    const byStatus: Record<SyncJob['status'], number> = {
      pending: 0,
      running: 0,
      completed: 0,
      failed: 0,
      cancelled: 0
    };

    const byType: Record<SyncJob['type'], number> = {
      full: 0,
      incremental: 0,
      realtime: 0
    };

    for (const job of jobs) {
      byStatus[job.status]++;
      byType[job.type]++;
    }

    return {
      total: jobs.length,
      byStatus,
      byType,
      running: byStatus.running,
      completed: byStatus.completed,
      failed: byStatus.failed
    };
  }

  async getConnectionStats(): Promise<{
    total: number;
    active: number,
    byType: Record<SyncConnection['type'], number>;
  }> {
    const connections = Array.from(this.connections.values());
    
    const byType: Record<SyncConnection['type'], number> = {
      database: 0,
      api: 0,
      file: 0,
      cloud: 0,
      custom: 0
    };

    let active = 0;

    for (const connection of connections) {
      byType[connection.type]++;
      if (connection.isActive) active++;
    }

    return {
      total: connections.length,
      active,
      byType
    };
  }

  async cleanupOldLogs(olderThanDays: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);
    
    let removedCount = 0,
    for (const [id, log] of this.logs) {
      if (new Date(log.timestamp) < cutoffDate) {
        this.logs.delete(id);
        removedCount++;
      }
    }

    return removedCount;
  }

  async clearAll(): Promise<void> {
    this.jobs.clear();
    this.connections.clear();
    this.mappings.clear();
    this.logs.clear();
  }
}

// Singleton instance
export const syncStorage = new SyncStorage();

// Main functions for external use
export async function createJob(job: Omit<SyncJob, 'id' | 'createdAt' | 'updatedAt' | 'progress'>): Promise<SyncJob> {
  return syncStorage.createJob(job);
}

export async function getJob(id: string): Promise<SyncJob | null> {
  return syncStorage.getJob(id),
}

export async function updateJob(id: string, updates: Partial<SyncJob>): Promise<SyncJob | null> {
  return syncStorage.updateJob(id, updates);
}

export async function startJob(id: string): Promise<boolean> {
  return syncStorage.startJob(id),
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
  return syncStorage.getConnection(id),
}

export async function updateConnection(id: string, updates: Partial<SyncConnection>): Promise<SyncConnection | null> {
  return syncStorage.updateConnection(id, updates);
}

export async function createMapping(mapping: Omit<SyncMapping, 'id' | 'createdAt' | 'updatedAt'>): Promise<SyncMapping> {
  return syncStorage.createMapping(mapping);
}

export async function getMapping(id: string): Promise<SyncMapping | null> {
  return syncStorage.getMapping(id),
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
  return Math.round((processed / total) * 100),
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
export function resetState(): void {
  state = { ...defaultState };
}
