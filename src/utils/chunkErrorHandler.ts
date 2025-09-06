/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

import { logErrorToProduction } from './productionLogger';
interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string
class ChunkErrorHandler {
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          margin-right: 1rem;
        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        ">
          Go Home
        </button>
      </div>
    `
    document.body.appendChild(errorDiv)
  }
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  private getSessionKey(): string {
    return `${navigator.userAgent}_${window.location.origin}`
  }
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0
        lastErrorTime: 0
        userAgent: navigator.userAgent
        url: window.location.href
      })
    }
    return this.errorStats.get(sessionKey)!
  }
  // Public method to manually trigger recovery
  public triggerRecovery(): void {
    this.clearCaches().then(() => {
      this.reloadPage()
    }) }
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this.getSessionKey()
    const stats = this.errorStats.get(sessionKey)
    return stats ? stats.errorCount > 0 : false
  }
  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this.getSessionKey()
    this.errorStats.delete(sessionKey)
  }
// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler()
// Export for manual usage
export default chunkErrorHandler;
