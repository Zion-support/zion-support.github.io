// Sync queue utilities
export class SyncQueue {
  private queue: any[] = [];

  add(item: any): void {
    this.queue.push(item);
  }

  process(): any[] {
    const items = [...this.queue];
    this.queue = [];
    return items;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}