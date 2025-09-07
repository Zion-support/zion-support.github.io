// Sync worker utilities
export class SyncWorker {
  private isRunning = false;

  start(): void {
    this.isRunning = true;
  }

  stop(): void {
    this.isRunning = false;
  }

  isActive(): boolean {
    return this.isRunning;
  }
}