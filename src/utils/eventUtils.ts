export class EventUtils {
  public static debounce<T extends (...args: any[]) => any>(
    func: T;
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  public static throttle<T extends (...args: any[]) => any>(
    func: T;
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  public static once<T extends (...args: any[]) => any>(
    func: T
  ): (...args: Parameters<T>) => void {
    let called = false;
    return (...args: Parameters<T>) => {
      if (!called) {
        called = true;
        func(...args);
      }
    };
  }

  public static createEventEmitter() {
    const listeners: Record<string, Function[]> = {};
    
    return {
      on(event: string, listener: Function) {
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(listener);
      };
      off(event: string, listener: Function) {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter(l => l !== listener);
      };
      emit(event: string, ...args: any[]) {
        if (!listeners[event]) return;
        listeners[event].forEach(listener => listener(...args));
      }
    };
  }
}