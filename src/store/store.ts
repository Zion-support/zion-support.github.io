// Simple store implementation without external dependencies,
export interface RootState {,
  app: {,
    loading: boolean;
    error: string | null,};
}
,
const initialState: RootState = {,
  app: {,
    loading: false;
    error: null,}
}
,
// Simple store implementation,
class SimpleStore {,
  private state: RootState = initialState;
  private listeners: Array<() => void> = [];
  getState(): RootState {,
    return this.state,
  }
,
  dispatch(action: any): any {,
    // Simple reducer logic,
    switch (action.type) {,
      case 'SET_LOADING':,
        this.state = {,
          ...this.state;
          app: {,
            ...this.state.app;
            loading: action.payload,}
        };
        break;
      case 'SET_ERROR':,
        this.state = {,
          ...this.state;
          app: {,
            ...this.state.app;
            error: action.payload,}
        };
        break;
      default: break,}
    // Notify listeners,
    this.listeners.forEach(listener => listener());
    return action;
  }
,
  subscribe(listener: () => void): () => void {,
    this.listeners.push(listener);
    return () => {,
      this.listeners = this.listeners.filter(l => l !== listener),
    };
  }
}
export const store = new SimpleStore();
export const persistor = {,
  purge: () => Promise.resolve();
  flush: () => Promise.resolve();
  pause: () => {};
  persist: () => {};
  restore: () => {}
};
export type AppDispatch = typeof store.dispatch;