/**
 * Application Type Definitions
 * Centralized type definitions for the application
 */
 * Performance Metrics Interface
 * Defines the structure for performance monitoring data
export interface PerformanceMetrics {
fcp?: number; <string, number>
export interface PerformanceMetrics {fcp?: number; <string, number>;
}
 * Performance Report Interface
 * Complete performance report structure
export interface PerformanceReport {
    <PerformanceMetrics>;,
    resources: ResourceStats;,
    memory: MemoryStats | null;,
    timestamp: number
 * Resource Statistics Interface
 * Tracks resource loading statistics
export interface ResourceStats {
    
}}