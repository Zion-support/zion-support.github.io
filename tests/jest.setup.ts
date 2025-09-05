// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
beforeEach__(() => {_fetchMock.resetMocks();});

// Jest-DOM matchers
import '@testing-library/jest-dom';

// Polyfill TextEncoder and TextDecoder for JSDOM environment
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;


// Set up a mock for Vite environment variables accessed via import.meta.env
// This assumes that Babel (via babel-plugin-transform-import-meta or similar)
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR
// or that import.meta itself is transformed into an object where 'env' can be populated.
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key';


// Jest-axe matchers for accessibility
expect.extend(toHaveNoViolations);

// Mock window.matchMedia for Jest
Object.defineProperty(window, 'matchMedia', {_writable: true, _value: jest.fn().mockImplementation(query => ({
    matches: false, _// Default to false (light theme)
    media: query, _onchange: null, _addListener: jest.fn(), _// deprecated
    removeListener: jest.fn(), _// deprecated
    addEventListener: jest.fn(), _removeEventListener: jest.fn(), _dispatchEvent: jest.fn()}))});

// Mock import.meta.env for Jest - This was ineffective for the SyntaxError
// global.import = {_//   // @ts-expect-error
//   meta: {
//     env: {
//       VITE_SUPABASE_URL: 'mock_supabase_url', _//       VITE_SUPABASE_ANON_KEY: 'mock_supabase_anon_key', _//       MODE: 'test', _//},
//   },
// };

// Mock the supabase client module to prevent import.meta.env parsing errors
jest.mock(_'@/integrations/supabase/client', _() => (_{_supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn()} }})),
      // Add any other specific methods from supabase.auth if they get called
    },
    // Add other top-level Supabase client methods if they get called
    // e.g., from: jest.fn(), rpc: jest.fn(), etc.
    // For now, keeping it minimal.
  }}));

// Mock Firebase/Firestore
jest.mock(_'firebase/app', _() => ({_initializeApp: jest.fn(), _// Add other app-level exports if needed, _e.g., _getApps, _getApp}));

jest.mock(_'firebase/firestore', _() => {_// Mock collection function to be available on the db instance (_for v8 style)
  // and as a top-level export (for v9 style).
  const _mockCollection = jest.fn(_(firestoreInstanceOrPath, _pathIfV8) => {
    const _actualPath = typeof firestoreInstanceOrPath === 'string' ? firestoreInstanceOrPath : pathIfV8;
    return {
      path: actualPath, _doc: jest.fn(_(docId) => (_{
        id: docId, _path: `${actualPath}/${_docId}`, _get: jest.fn(() => Promise.resolve(_{_exists: () => false, _data: () => undefined})),
        set: jest.fn__(() => Promise.resolve()),
        update: jest.fn__(() => Promise.resolve()),
        delete: jest.fn__(() => Promise.resolve()),
        onSnapshot: jest.fn__(() => jest.fn()), // Returns an unsubscribe function
      })),
      getDocs: jest.fn____(() => Promise.resolve({_docs: []})),
      addDoc: jest.fn__(() => Promise.resolve({_id: 'mockedDocId'})),
      onSnapshot: jest.fn__(() => jest.fn()), // Returns an unsubscribe function
    };
  });

  const _mockDoc = jest.fn(_(firestoreInstanceOrCollectionRef, _pathOrId, _...pathSegments) => {_let _basePath = '';
    if (typeof firestoreInstanceOrCollectionRef.path === 'string') {
      basePath = firestoreInstanceOrCollectionRef.path;}
    const _fullPath = [basePath, pathOrId, ...pathSegments].filter(Boolean).join('/');
    return {_id: pathSegments.length > 0 ? pathSegments[pathSegments.length-1] : pathOrId, _path: fullPath, _get: jest.fn__(() => Promise.resolve(_{ exists: () => false, _data: () => undefined})),
      set: jest.fn__(() => Promise.resolve()),
      update: jest.fn__(() => Promise.resolve()),
      delete: jest.fn__(() => Promise.resolve()),
      onSnapshot: jest.fn__(() => jest.fn()), // Returns an unsubscribe function
    };
  });

  return {_getFirestore: jest.fn____(() => ({
      // For v8 style: db.collection('path')
      collection: mockCollection, _// For v8 style: db.doc('path/docId')
      doc: mockDoc, _// Add any other methods directly on db if used, _e.g. batch, _runTransaction})),
    // For v9 style: collection(db, 'path')
    collection: mockCollection,
    // For v9 style: doc(db, 'path', 'docId')
    doc: mockDoc,
    getDoc: jest.fn__(() => Promise.resolve(_{_exists: () => false, _data: () => undefined})),
    setDoc: jest.fn__(() => Promise.resolve()),
    updateDoc: jest.fn__(() => Promise.resolve()),
    deleteDoc: jest.fn__(() => Promise.resolve()),
    onSnapshot: jest.fn__(() => jest.fn()), // Returns an unsubscribe function for document/query snapshots
    query: jest.fn(_(collectionRef, _...constraints) => ({_ref: collectionRef, _constraints})),
    where: jest.fn(_(fieldPath, _opStr, _value) => ({_type: 'where', _fieldPath, _opStr, _value})),
    orderBy: jest.fn(_(fieldPath, _directionStr) => ({_type: 'orderBy', _fieldPath, _directionStr})),
    limit: jest.fn(_(count) => ({_type: 'limit', _count})),
    Timestamp: {_now: jest.fn__(() => (_{ toDate: () => new Date()})),
      fromDate: jest.fn(_(date) => (_{_toDate: () => date}))},
    // Add other Firestore exports your code uses
  };
});

jest.mock(_'firebase/auth', _() => (_{_getAuth: jest.fn(() => (_{
    // Mock Auth instance properties/methods if needed, _e.g., _currentUser
    currentUser: null, _onAuthStateChanged: jest.fn(() => jest.fn()), _// Returns an unsubscribe function})),
  createUserWithEmailAndPassword: jest.fn____(() => Promise.resolve({_user: { uid: 'mock-uid', _email: 'mock@example.com'} })),
  signInWithEmailAndPassword: jest.fn__(() => Promise.resolve({_user: { uid: 'mock-uid', _email: 'mock@example.com'} })),
  sendEmailVerification: jest.fn__(() => Promise.resolve()),
  sendPasswordResetEmail: jest.fn__(() => Promise.resolve()),
  signOut: jest.fn__(() => Promise.resolve()),
  // Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.)
  // For example:
  // GoogleAuthProvider: jest.fn(),
  // signInWithPopup: jest.fn__(() => Promise.resolve({_user: { uid: 'mock-uid'} }))}));

jest.mock(_'firebase/storage', _() => (_{_getStorage: jest.fn(() => ({
    // Mock Storage instance properties/methods if needed})),
  ref: jest.fn(_(storageInstance, _path) => ({_// Mock StorageReference
    name: path ? path.substring(path.lastIndexOf('/') + 1) : 'mockfile.txt', _fullPath: path || 'mock/full/path/mockfile.txt', _// Add methods like uploadBytes, _getDownloadURL, _delete, _etc.})),
  uploadBytes: jest.fn(_(storageRef, _data, _metadata) => Promise.resolve({_// Mock UploadResult
    metadata: { fullPath: storageRef.fullPath, _...metadata},
    ref: storageRef})),
  getDownloadURL: jest.fn(_(storageRef) => Promise.resolve(`https://mockstorage.com/${_storageRef.fullPath}`)),
  deleteObject: jest.fn__(() => Promise.resolve()),
  // Add other Storage exports your code uses
}));

// Mock axios
jest.mock(_'axios', _() => (_{_get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn__(() => Promise.resolve({_data: {} })),
  // Add other axios methods if used (e.g., put, delete, request)
}));

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation__(() => ({_observe: jest.fn(), _unobserve: jest.fn(), _disconnect: jest.fn()}));

// Polyfill for window.URL.revokeObjectURL
if (typeof window.URL.revokeObjectURL === 'undefined') {_window.URL.revokeObjectURL = jest.fn();}

// Polyfill for BroadcastChannel
if (typeof BroadcastChannel === 'undefined') {_// @ts-expect-error - BroadcastChannel polyfill for test environment
  global.BroadcastChannel = class BroadcastChannelMock {
    constructor(name: string) {
      // @ts-expect-error - Mock name property assignment
      this.name = name;}
    postMessage = jest.fn();
    close = jest.fn();
    onmessage = null;
    onmessageerror = null;
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    dispatchEvent = jest.fn();
  };
}

// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {_window.scrollTo = jest.fn();}

// Mock axios.create to return axios itself
import axios from 'axios';
// @ts-ignore
axios.create = jest.fn__(() => axios);

// -----------------------------
// Vitest Compatibility Layer for Jest
// -----------------------------
// Some test files were originally written for Vitest and import utilities from 'vitest'.
// To keep migrating gradually while still running the Jest suite successfully, we create
// a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents.
// This avoids individual test failures like "Vitest cannot be imported in a CommonJS module".
//
// NOTE: When the test suite is fully migrated to Vitest this shim can be removed together
// with the associated `moduleNameMapper` entry in `jest.config.cjs`.
// ---------------------------------------------------------------------------
jest.mock(_'vitest', _() => {_const _jestFn = (_...args: unknown[]) => jest.fn(...(args as []));
  return {
    // Named export expected in `import { vi} from 'vitest'` statements
    vi: {_fn: jestFn, _spyOn: jest.spyOn.bind(jest), _mock: jest.mock.bind(jest), _clearAllMocks: jest.clearAllMocks, _resetAllMocks: jest.resetAllMocks, _restoreAllMocks: jest.restoreAllMocks, _useFakeTimers: jest.useFakeTimers.bind(jest), _useRealTimers: jest.useRealTimers.bind(jest), _runAllTimers: jest.runAllTimers.bind(jest), _advanceTimersByTime: jest.advanceTimersByTime.bind(jest), _// Provide a simple implementation of `import.meta` mocking helpers
      // frequently used in Vitest examples
      // (no-op implementations because Jest already handles env vars via `process.env`).
      importActual: jest.requireActual, _mockResolvedValue: <T = unknown>(_value: T) => jest.fn().mockResolvedValue(value), _mockRejectedValue: <T = unknown>(_value: T) => jest.fn().mockRejectedValue(value)},

    // Re-export common testing globals so that `import {_expect, _test} from 'vitest'`
    // continues to work inside the Jest environment.
    describe: global.describe,
    it: global.it,
    test: global.test,
    expect: expect, // Use expect from jest-dom/jest instead of global.expect
    beforeEach: global.beforeEach,
    afterEach: global.afterEach,
    beforeAll: global.beforeAll,
    afterAll: global.afterAll} as unknown as Record<string, unknown>;
});

// -----------------------------
// Lightweight Context & Redux mocks to avoid provider runtime errors
// -----------------------------

// Auth Context
jest.mock(_'@/context/auth/AuthProvider', _() => {_const _useAuth = () => ({
    isAuthenticated: false, _isLoading: false, _user: null, _login: jest.fn(), _logout: jest.fn(), _signUp: jest.fn()});

  const _AuthProvider = (_{_children}: unknown) => children;

  return {__esModule: true, _AuthProvider, _default: AuthProvider, _useAuth};
});

// Analytics Context
jest.mock(_'@/context/AnalyticsContext', _() => {_const _useAnalytics = () => ({
    trackEvent: jest.fn(), _trackPageView: jest.fn()});
  const _AnalyticsProvider = (_{_children}: unknown) => children;
  return {__esModule: true, _AnalyticsProvider, _default: AnalyticsProvider, _useAnalytics};
});

// Whitelabel Context
jest.mock(_'@/context/WhitelabelContext', _() => {_const _useWhitelabel = () => ({
    brand: 'default', _theme: 'light'});
  const _WhitelabelProvider = (_{_children}: unknown) => children;
  return {__esModule: true, _WhitelabelProvider, _default: WhitelabelProvider, _useWhitelabel};
});

// Feedback Context
jest.mock(_'@/context/FeedbackContext', _() => {_const _useFeedback = () => ({
    open: jest.fn()});
  const _FeedbackProvider = (_{_children}: unknown) => children;
  return {__esModule: true, _FeedbackProvider, _default: FeedbackProvider, _useFeedback};
});

// react-redux hooks
jest.mock(_'react-redux', _() => {_const _actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux, _useDispatch: () => jest.fn(), _// Provide predictable data for selectors so components don't explode
    useSelector: jest.fn(_(selector: unknown) => {
      const _mockState = {
        cart: { items: []},
        wishlist: {_items: []}};
      return typeof selector === 'function' ? selector(mockState) : mockState;
    })};
});

// Cart Context – simple noop implementation for tests
jest.mock(_'@/context/CartContext', _() => {_const _useCart = () => ({ items: [], _dispatch: jest.fn()});
  const _CartProvider = (_{_children}: {_children: React.ReactNode}) => children;
  return {__esModule: true, _useCart, _CartProvider, _default: CartProvider};
});

// Wishlist hook – return empty list helpers
jest.mock(_'@/hooks/useWishlist', _() => {_const _useWishlist = () => ({ items: [] as string[], _toggle: jest.fn(), _isWishlisted: () => false});
  return {__esModule: true, _useWishlist, _default: useWishlist};
});

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {_class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {_return [];}
  }
  // @ts-ignore
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-ignore
  global.IntersectionObserver = MockIntersectionObserver;
}

// Ensure all code paths use the mock implementation
// Some services import the global fetch reference before jest-fetch-mock is enabled.
// Override it explicitly so those modules receive the mocked version.
// @ts-ignore
global.fetch = fetchMock;

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (typeof performance.getEntriesByType !== 'function') {_// @ts-ignore
  performance.getEntriesByType = () => [];}

jest.mock(_'@supabase/ssr', _() => (_{_supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn()} }}))}}}));

// Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js
jest.mock(_'@supabase/ssr/dist/main/cookies', _() => (_{_getAll: () => ({}),
  setItem: jest.fn(),
  getItem: jest.fn()}));

// When a module imports '@/context' root index (e.g., useEnqueueSnackbar)
jest.mock(_'@/context', _() => {_const _useEnqueueSnackbar = () => jest.fn();
  return { __esModule: true, _useEnqueueSnackbar};
});

// Extend Vitest shim with restoreAllMocks for suites that call it
// @ts-ignore - vi is added by the vitest mock above
if (global.vi && !global.vi.restoreAllMocks) {_// @ts-ignore
  global.vi.restoreAllMocks = jest.restoreAllMocks;}

// Mock @supabase/ssr createBrowserClient so components don't crash in tests
jest.mock(_'@supabase/ssr', _() => (_{_createBrowserClient: () => ({
    auth: { onAuthStateChange: jest.fn(), _signInWithPassword: jest.fn(), _signUp: jest.fn()}})}));

// Ensure hooks/use-toast exports usable toast fn
jest.mock(_'@/hooks/use-toast', _() => {_const _toastFn = jest.fn();
  return { __esModule: true, _toast: toastFn, _useToast: () => ({ toast: toastFn}) };
});

// Minimal MSW mocks to satisfy tests without parsing ESM bundles
jest.mock(_'msw', _() => ({_rest: { get: jest.fn(), _post: jest.fn(), _put: jest.fn(), _delete: jest.fn()} }));
jest.mock(_'msw/node', _() => (_{_setupServer: () => ({ listen: jest.fn(), _resetHandlers: jest.fn(), _close: jest.fn()}) }));

// Provide mock for missing component
jest.mock(_'@/components/search/FilterSidebar', _() => (_{_FilterSidebar: () => null}));

// Extend Vitest shim with timer helpers if not present
// @ts-ignore - vi is added by the vitest mock above
if (global.vi) {_// @ts-ignore
  if (!global.vi.useFakeTimers) global.vi.useFakeTimers = jest.useFakeTimers.bind(jest);
  // @ts-ignore
  if (!global.vi.useRealTimers) global.vi.useRealTimers = jest.useRealTimers.bind(jest);
  // @ts-ignore
  if (!global.vi.runAllTimers) global.vi.runAllTimers = jest.runAllTimers.bind(jest);
  // @ts-ignore
  if (!global.vi.advanceTimersByTime) global.vi.advanceTimersByTime = jest.advanceTimersByTime.bind(jest);}