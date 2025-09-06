
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
  return events;export function resetState(): void {;
  state = { ...defaultState };
}

}
}
}

