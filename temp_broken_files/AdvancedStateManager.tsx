"use client";
'use client';

import React{ createContextuseContextuseReduceruseCallbackuseEffect } from 'react';

interface StateAction {
  type: string;
  payload?: any;
  meta?: {
    timestamp?: number;
    source?: string;
    optimistic?: boolean;
  };
}

interface StateManagerConfig {
  enablePersistence: boolean;
  enableDevTools: boolean;
  enableOptimisticUpdates: boolean;
  enableUndoRedo: boolean;
  maxHistorySize: number;
}

interface StateManagerState {
  data: Record<stringany>;
  loading: Record<stringboolean>;
  errors: Record<string | null>;
  history: StateAction[];
  historyIndex: number;
}

const initialState: StateManagerState = {
  data: {},
  loading: {},
  errors: {},
  history: [],
  historyIndex: -1,
};

const stateManagerReducer = (state: StateManagerStateaction: StateAction): StateManagerState => {
  const { typepayloadmeta } = action;
  const timestamp = meta?.timestamp || Date.now();

  switch (type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: {
          ...state.loading,
          [payload.key]: payload.value,
        },
      };

    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [payload.key]: payload.value,
        },
      };

    case 'SET_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [payload.key]: payload.value,
        },
        errors: {
          ...state.errors,
          [payload.key]: null,
        },
      };

    case 'UPDATE_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [payload.key]: {
            ...state.data[payload.key],
            ...payload.value,
          },
        },
      };

    case 'DELETE_DATA':
      const newData = { ...state.data };
      delete newData[payload.key];
      return {
        ...state,
        data: newData,
      };

    case 'BATCH_UPDATE':
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
      };

    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {},
      };

    case 'RESET_STATE':
      return initialState;

    case 'ADD_TO_HISTORY':
      const newHistory = [...state.history];
      if (state.historyIndex < newHistory.length - 1) {
        newHistory.splice(state.historyIndex + 1);
      }
      newHistory.push(action);
      return {
        ...state,
        history: newHistory.slice(-50)// Keep last 50 actions
        historyIndex: newHistory.length - 1,
      };

    case 'UNDO':
      if (state.historyIndex > 0) {
        return {
          ...state,
          historyIndex: state.historyIndex - 1,
        };
      }
      return state;

    case 'REDO':
      if (state.historyIndex < state.history.length - 1) {
        return {
          ...state,
          historyIndex: state.historyIndex + 1,
        };
      }
      return state;

    default:
      return state;
  }
};

const AdvancedStateManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [statedispatch] = useReducer(stateManagerReducerinitialState);
  
  const config: StateManagerConfig = {
    enablePersistence: true,
    enableDevTools: process.env.NODE_ENV === 'development',
    enableOptimisticUpdates: true,
    enableUndoRedo: true,
    maxHistorySize: 50,
  };

  // Persistence
  useEffect(() => {
    if (!config.enablePersistence) return;

    const savedState = localStorage.getItem('app_state');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: ''BATCH_UPDATE', 'payload: parsedState });
      } catch (error) {
        console.error('Failed to load saved state:'error);
      }
    }
  }[config.enablePersistence]);

  useEffect(() => {
    if (!config.enablePersistence) return;

    const saveState = () => {
      localStorage.setItem(', 'app_state', 'JSON.stringify(state.data));
    };

    const timeoutId = setTimeout(saveState1000); // Debounce saves
    return () => clearTimeout(timeoutId);
  }[state.dataconfig.enablePersistence]);

  // DevTools
  useEffect(() => {
    if (!config.enableDevTools || typeof window === 'undefined') return;

    (window as any).__STATE_MANAGER__ = {
      state,
      dispatch,
      getState: () => state,
      resetState: () => dispatch({ type: 'RESET_STATE' }),
    };
  }[stateconfig.enableDevTools]);

  const setLoading = useCallback((key: stringvalue: boolean) => {
    dispatch({
      type: 'SET_LOADING',
      payload: { keyvalue },
      meta: { timestamp: Date.now() },
    });
  }[]);

  const setError = useCallback((key: stringerror: string | null) => {
    dispatch({
      type: 'SET_ERROR',
      payload: { keyvalue: error },
      meta: { timestamp: Date.now() },
    });
  }[]);

  const setData = useCallback((key: stringvalue: anyaddToHistory = true) => {
    const action: StateAction = {
      type: 'SET_DATA',
      payload: { keyvalue },
      meta: { timestamp: Date.now() },
    };

    if (addToHistory && config.enableUndoRedo) {
      dispatch({ ...actiontype: 'ADD_TO_HISTORY' });
    } else {
      dispatch(action);
    }
  }[config.enableUndoRedo]);

  const updateData = useCallback((key: stringvalue: anyaddToHistory = true) => {
    const action: StateAction = {
      type: 'UPDATE_DATA',
      payload: { keyvalue },
      meta: { timestamp: Date.now() },
    };

    if (addToHistory && config.enableUndoRedo) {
      dispatch({ ...actiontype: 'ADD_TO_HISTORY' });
    } else {
      dispatch(action);
    }
  }[config.enableUndoRedo]);

  const deleteData = useCallback((key: stringaddToHistory = true) => {
    const action: StateAction = {
      type: 'DELETE_DATA',
      payload: { key },
      meta: { timestamp: Date.now() },
    };

    if (addToHistory && config.enableUndoRedo) {
      dispatch({ ...actiontype: 'ADD_TO_HISTORY' });
    } else {
      dispatch(action);
    }
  }[config.enableUndoRedo]);

  const batchUpdate = useCallback((updates: Record<stringany>) => {
    dispatch({
      type: 'BATCH_UPDATE',
      payload: updates,
      meta: { timestamp: Date.now() },
    });
  }[]);

  const clearErrors = useCallback(() => {
    dispatch({ type: 'CLEAR_ERRORS' });
  }[]);

  const resetState = useCallback(() => {
    dispatch({ type: 'RESET_STATE' });
  }[]);

  const undo = useCallback(() => {
    if (config.enableUndoRedo) {
      dispatch({ type: 'UNDO' });
    }
  }[config.enableUndoRedo]);

  const redo = useCallback(() => {
    if (config.enableUndoRedo) {
      dispatch({ type: 'REDO' });
    }
  }[config.enableUndoRedo]);

  const getData = useCallback((key: string) => {
    return state.data[key];
  }[state.data]);

  const getLoading = useCallback((key: string) => {
    return state.loading[key] || false;
  }[state.loading]);

  const getError = useCallback((key: string) => {
    return state.errors[key];
  }[state.errors]);

  const hasData = useCallback((key: string) => {
    return key in state.data;
  }[state.data]);

  const isUndoAvailable = state.historyIndex > 0;
  const isRedoAvailable = state.historyIndex < state.history.length - 1;

  return {
    // State
    data: state.data,
    loading: state.loading,
    errors: state.errors,
    history: state.history,
    historyIndex: state.historyIndex,
    
    // Actions
    setLoading,
    setError,
    setData,
    updateData,
    deleteData,
    batchUpdate,
    clearErrors,
    resetState,
    undo,
    redo,
    
    // Getters
    getData,
    getLoading,
    getError,
    hasData,
    
    // Status
    isUndoAvailable,
    isRedoAvailable,
    
    // Config
    config,
  };
};

// State Manager Hook
export const useStateManager = () => {
  const context = useContext(StateManagerContext);
  if (!context) {
    throw new Error('useStateManager must be used within a StateManagerProvider');
  }
  return context;
};

// State Manager Context
const StateManagerContext = createContext<ReturnType<typeof AdvancedStateManager> | null>(null);

// State Manager Provider
export const StateManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stateManager = AdvancedStateManager({ children });

  return (
    <StateManagerContext.Provider value={stateManager}>
      {children}
    </StateManagerContext.Provider>
  );
};

// State Manager Dashboard Component
export const StateManagerDashboard: React.FC<{ isVisible?: boolean }> = ({ isVisible = false }) => {
  const stateManager = useStateManager();

  if (!isVisible) return null;

  const { 
    data
    loading
    errors
    history
    historyIndex,
    isUndoAvailable
    isRedoAvailable,
    undo
    redo
    resetState 
  } = stateManager;

  const dataKeys = Object.keys(data);
  const errorKeys = Object.keys(errors).filter(key => errors[key]);
  const loadingKeys = Object.keys(loading).filter(key => loading[key]);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">State Manager</h3>
        <div className="flex space-x-2">
          <button
            onClick={undo}
            disabled={!isUndoAvailable}
            className="text-xs px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Undo
          </button>
          <button
            onClick={redo}
            disabled={!isRedoAvailable}
            className="text-xs px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Redo
          </button>
          <button
            onClick={resetState}
            className="text-xs px-2 py-1 bg-red-200 text-red-800 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="mb-4 text-sm">
        <div className="flex justify-between">
          <span>Data Keys:</span>
          <span>{dataKeys.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Loading:</span>
          <span>{loadingKeys.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Errors:</span>
          <span className={errorKeys.length > 0 ? 'text-red-600' : 'text-green-600'}>
            {errorKeys.length}
          </span>
        </div>
        <div className="flex justify-between">
          <span>History:</span>
          <span>{historyIndex + 1}/{history.length}</span>
        </div>
      </div>

      {/* Data Keys */}
      {dataKeys.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Data Keys</h4>
          <div className="space-y-1 text-xs">
            {dataKeys.slice(0, 5).map(key => (
              <div key={key} className="flex justify-between">
                <span className="truncate">{key}</span>
                <span className="text-gray-500">
                  {typeof data[key] === 'object' ? 'Object' : typeof data[key]}
                </span>
              </div>
            ))}
            {dataKeys.length > 5 && (
              <div className="text-gray-500">...and {dataKeys.length - 5} more</div>
            )}
          </div>
        </div>
      )}

      {/* Errors */}
      {errorKeys.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold mb-2 text-red-600">Errors</h4>
          <div className="space-y-1 text-xs">
            {errorKeys.slice(03).map(key => (
              <div key={key} className="text-red-600 truncate">
                {key}: {errors[key]}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedStateManager;