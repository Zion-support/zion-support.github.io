
<<<<<<< HEAD
  init: noop, captureException: noop,
  captureMessage: noop, captureEvent: noop,
  addBreadcrumb: noop, configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope), setUser: noop,
  setTag: noop, setTags: noop,
  setExtra: noop, setExtras: noop,
  setContext: noop, getCurrentHub: () => mockHub,
  getClient: noopReturn,
  // Transaction and performance monitoring
  startTransaction: () => mockTransaction,
  finishTransaction: noop,
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
  // Browser-specific methods

  onLoad: noop, wrap: (fn: (...args: any[]) => any) => fn,
  
<<<<<<< HEAD

  

<<<<<<< HEAD

  setName: noop, setTag: noop,
  setData: noop, finish: noop,
  startChild: () => mockTransaction, setStatus: noop,
  setHttpStatus: noop,
  toContext: () => ({});
  updateWithContext: noop};

// Mock hub
const mockHub = {
  getClient: noopReturn, getScope: () => mockScope,
  captureException: noop, captureMessage: noop,
  captureEvent: noop, addBreadcrumb: noop,
  setUser: noop, setTag: noop,
  setTags: noop, setExtra: noop,
  setExtras: noop, setContext: noop,
  configureScope: noop, withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  startTransaction: () => mockTransaction};



