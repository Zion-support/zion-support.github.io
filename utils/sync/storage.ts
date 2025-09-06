<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
let state: SyncState = { ...defaultState }
export function readState(): SyncState {
  return { ...state }
}
export function updateState(updates: Partial<SyncState>): void {
  state = { ...state, ...updates }
};
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


    );
  }

  return events;export function resetState(): void {
  state = { ...defaultState }

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452


export function readState(): SyncState {;
  return { ...state };
}

export function updateState(updates: Partial<SyncState>): void {;
  state = { ...state, ...updates };
}
export function upsertEvent(
  state: MultiverseState
  event: SyncEvent
): MultiverseState {;
  if (state.seenEventIds[event.eventId]) return state;
  const entityId = getEntityId(event);
  const currentVersion = state.latestVersionByEntityId[entityId] |0;
  const isNewer = event.version > currentVersion;
  if (event.type === 'proposal' && event.merkleRoot && isNewer) {
    state.proposalMerkleById[entityId] = event.merkleRoot;
  }
  if (isNewer) {
    state.latestVersionByEntityId[entityId] = event.version;
  }
  state.events.push(event);
  state.seenEventIds[event.eventId] = true;
  state.lastSyncedAt = Math.max(state.lastSyncedAt |0, event.timestamp |0);
  return state;
export function getEntityId(event: SyncEvent): string {
  switch (event.type) {
    case 'proposal':;
      return (event.payload as any).proposalId;
    case 'token_transfer':
      return (event.payload as any).txId;
    case 'talent_mobility':
      return (
        (event.payload as any).personId + ':' + (event.payload as any).startDate
      );
    case 'dao_endorsement':
      return (event.payload as any).resolutionId;
    case 'leaderboard_entry':
      return (
        (event.payload as any).subjectId + ':' + (event.payload as any).period
      );
    default:
      return (event.payload as any).id |event.eventId;
import fs from 'fs';
import path from 'path';
import { MultiverseState, InstanceConfig, SyncEvent } from './types';
  }
  if (isNewer) {
    state && state.latestVersionByEntityId[entityId] = event && event.version;
  }
  return state;
export function getEntityId(event: SyncEvent): string {
  switch (event && event.type) {
    case 'proposal':
      return (event && event.payload as any).proposalId;
    case 'token_transfer':
      return (event && event.payload as any).txId;
    case 'talent_mobility':
      return (
        (event && event.payload as any).personId + ':' + (event && event.payload as any).startDate
      );
    case 'dao_endorsement':
      return (event && event.payload as any).resolutionId;
    case 'leaderboard_entry':
      return (
        (event && event.payload as any).subjectId + ':' + (event && event.payload as any).period
      );
    default:
  }
export function filterEventsByScope(
  events: SyncEvent[]
  scope: InstanceConfig['scope']
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}



<<<<<<< HEAD
): SyncEvent[] {
  if (scope === 'full') return events;
  if (scope === 'dao') {
    );
  }
  if (scope === 'marketplace') {
    return events && events.filter(
      e =>
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
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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

<<<<<<< HEAD
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const default_state: SyncState = {
  config: {
    instance_id: 'default - instance',
    peers: [],
    scope: 'global',
    opt_in: false,
    paused: false;
  },
  lastSyncedAt: new Date ().toISOString ();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  return events;export function resetState(): void {;
  state = { ...defaultState };
}

<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

}
}
}
  const entity_id = getEntityId (event);
  const current_version = state.latestVersionByEntityId[entity_id] || 0;
  const is_newer = event.version > current_version;
;
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
    state.proposalMerkleById[entity_id] = event.merkle_root;
  }
  // Check condition
if ( {) {
  $2
}
    state.latestVersionByEntityId[entity_id] = event.version;
  }
  state.events.push (event);
  state.seenEventIds[event.event_id] = true;
  state.lastSyncedAt = Math.max (state.lastSyncedAt || 0, event.timestamp || 0);
  return state;
;
export function getEntityId (event: SyncEvent): string {
  switch (event.type) {
    case 'proposal':;
      return (event.payload as any).proposal_id;
    case 'token_transfer':;
      return (event.payload as any).tx_id;
    case 'talent_mobility':;
      return (
        (event.payload as any).person_id + ':' + (event.payload as any).start_date);
    case 'dao_endorsement':;
      return (event.payload as any).resolution_id;
    case 'leaderboard_entry':;
      return (
        (event.payload as any).subject_id + ':' + (event.payload as any).period);
    default:;
      return (event.payload as any).id || event.event_id;
  }
export function filterEventsByScope (
  events: SyncEvent[],
  scope: InstanceConfig['scope']): SyncEvent[] {
  // Check condition
if (return events) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Check condition
if ( {) {
  $2
}
    return events.filter (
      e => e.type === 'proposal' || e.type === 'dao_endorsement');
  }
  // Check condition
if ( {) {
  $2
}
    return events.filter (
      e =>;
        e.type === 'token_transfer' ||;
        e.type === 'talent_mobility' ||;
        e.type === 'leaderboard_entry');
  }
  return events;export function reset_state (): void {
  state = { ...default_state }
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  return events;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
