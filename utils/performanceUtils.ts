export interface PerformanceMetrics {
loadTime: number;
renderTime: number;
memoryUsage: number;
fps: number;
}

export class PerformanceUtils {
private metrics: PerformanceMetrics = {
loadTime: 0,
renderTime: 0,
memoryUsage: 0,
fps: 0;
};

}
}

measureMemoryUsage() {
if (typeof window !== 'undefined'';
)