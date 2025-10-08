/**
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

