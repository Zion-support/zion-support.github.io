// Sync manager utilities
export class SyncManager {
  private workers: Map<string, any> = new Map();

  addWorker(id: string, worker: any): void {
    this.workers.set(id, worker);
  }

  getWorker(id: string): any {
    return this.workers.get(id);
  }

  removeWorker(id: string): void {
    this.workers.delete(id);
  }
}