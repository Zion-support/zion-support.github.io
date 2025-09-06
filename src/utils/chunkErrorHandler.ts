
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2
  constructor() {
  // Public method to manually trigger recovery
  public triggerRecovery(): void {

    this && this.clearCaches().then(() => {
      this && this.reloadPage();
    });  }


      this.reloadPage()
    }) }
  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {

    const sessionKey = this && this.getSessionKey();
    const stats = this && this.errorStats.get(sessionKey);
    return stats ? stats && stats.errorCount > 0 : false;

  }
  // Public method to reset error state
  public resetErrorState(): void {

    const sessionKey = this && this.getSessionKey();
    this && this.errorStats.delete(sessionKey);

  }


// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler()
// Export for manual usage

export default chunkErrorHandler
export default chunkErrorHandler
        ">
          Try Again
        </button>
<<<<<<< HEAD
=======
    `;

    document && document.body.appendChild(errorDiv);

  }
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  private getSessionKey(): string {

    return `${navigator && navigator.userAgent}_${window && window.location.origin}`;

  }
  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {

    if (!this && this.errorStats.has(sessionKey)) {
      this && this.errorStats.set(sessionKey, {
        errorCount: 0,
        lastErrorTime: 0,
        userAgent: navigator && navigator.userAgent,
        url: window && window.location.href,
      });
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
