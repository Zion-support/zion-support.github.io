
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
    timeout?: number;
    filters?: Record<string, any>;
    mappings?: Record<string, string>;
  };
  progress: {
    total: number;
    processed: number;
    failed: number;
    skipped: number;
  };
  startedAt?: string;
  completedAt?: string;
  error?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface SyncConnection {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'cloud' | 'custom';
  config: {
    url?: string;
    credentials?: Record<string, string>;
    options?: Record<string, any>;
  };
  isActive: boolean;
  lastSyncAt?: string;
  createdAt: string;
  updatedAt: string;
}
origin/cursor/expand-services-advertise-and-build-project-c28b

export interface SyncMapping {
  id: string;
  name: string;
  sourceConnectionId: string;
  destinationConnectionId: string;
  sourceTable?: string;
  destinationTable?: string;
  fieldMappings: Record<string, string>;
  transformations?: Array<{
    field: string;
    type: 'format' | 'convert' | 'calculate' | 'filter';
    config: Record<string, any>;
  }>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SyncLog {
  id: string;
  jobId: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  details?: Record<string, any>;
  timestamp: string;
}

class SyncStorage {
}


export function readState(): SyncState {;
  return { ...state };

export function updateState(updates: Partial<SyncState>): void {;

    filters?: Record<string, any>;
</string>
    mappings?: Record<string, string>;
  metadata?: Record<string, any>;
    credentials?: Record<string, string>;
    options?: Record<string, any>;
  fieldMappings: Record<string, string>;
  transformations?: Array<{
    field: string;,
  type: 'format' | 'convert' | 'calculate' | 'filter';
    config: Record<string, any>;
  details?: Record<string, any>;
pr-12325
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
    return this.jobs.get(id) || null;
  }

  async updateJob(id: string, updates: Partial<SyncJob>): Promise<SyncJob | null> {
    const job = this.jobs.get(id);
    if (!job) return null;

    const updatedJob = {
      ...job,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.jobs.set(id, updatedJob);
    return updatedJob;
  }

  async deleteJob(id: string): Promise<boolean> {
    return this.jobs.delete(id);
  }

  async getJobsByStatus(status: SyncJob['status']): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).filter(job => job.status === status);
  }

  async getJobsByType(type: SyncJob['type']): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).filter(job => job.type === type);
  }

  async getAllJobs(): Promise<SyncJob[]> {
    return Array.from(this.jobs.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
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

export async function deleteJob(id: string): Promise<boolean> {
  return syncStorage.deleteJob(id);
}

export async function getJobsByStatus(status: SyncJob['status']): Promise<SyncJob[]> {
  return syncStorage.getJobsByStatus(status);
}

export async function getJobsByType(type: SyncJob['type']): Promise<SyncJob[]> {
  return syncStorage.getJobsByType(type);
}

export async function getAllJobs(): Promise<SyncJob[]> {
  return syncStorage.getAllJobs();
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

export function generateJobId(): string {
  return `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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

