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
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES;
