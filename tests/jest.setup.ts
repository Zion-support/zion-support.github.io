<<<<<<< HEAD
// Polyfill fetch and enable fetch mocks;

fetch_mock.enable_mocks (),

before_each (() => {

  fetch_mock.reset_mocks ();
}),

import { TextEncoder, TextDecoder } from 'util',;
// Polyfill TextEncoder and TextDecoder for JSDOM environment;

global.TextEncoder = TextEncoder,
// @ts - expect - error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests;
global.TextDecoder = TextDecoder,

import 'whatwg-fetch',;
import fetchMock from 'jest-fetch-mock',;
fetchMock.enableMocks(),;
;
// Reset fetch mocks before each test to ensure isolation;
// Jest - DOM matchers;
// Polyfill TextEncoder and TextDecoder for JSDOM environment;
global.TextEncoder = TextEncoder,;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests;
global.TextDecoder = TextDecoder,;
global.TextEncoder = TextEncoder,
// @ts - expect - error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests;

// Set up a mock for Vite environment variables accessed via import.meta.env;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;'
// or that import.meta itself is transformed into an object where 'env' can be populated.;

    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn ()}))}),

// global.import = {

//   // @ts - expect - error;
//   meta: {}
//     env: {'
//       VITE_SUPABASE_URL: 'mock_supabase_url','
//       VITE_SUPABASE_ANON_KEY: 'mock_supabase_anon_key','
//       MODE: 'test',
//     },
//   },
// },

      // Add any other specific methods from supabase.auth if they get called;
    },
    // Add other top - level Supabase client methods if they get called;
    // e.g., from: jest.fn (), rpc: jest.fn (), etc.;
    // For now, keeping it minimal.;
  }})),

  initialize_app: jest.fn (),
  // Add other app - level exports if needed, e.g., get_apps, get_app;
})),'
jest.mock ('firebase / firestore', () => {}
  // Mock collection function to be available on the db instance (for v8 style);
  // and as a top - level export (for v9 style).;
  const mock_collection = jest.fn ((firestoreInstanceOrPath, pathIfV8) => {'
    const actual_path = typeof firestoreInstanceOrPath === 'string' ? firestoreInstanceOrPath : pathIfV8,

        get: jest.fn (() => Promise.resolve ({ exists: () => false, data: () => undefined })),
        set: jest.fn (() => Promise.resolve ()),
        update: jest.fn (() => Promise.resolve ()),
        delete: jest.fn (() => Promise.resolve ()),
        on_snapshot: jest.fn (() => jest.fn ()), // Returns an unsubscribe function;

    // For v9 style: doc (db, 'pathdoc_id');
    get_doc: jest.fn (() => Promise.resolve ({ exists: () => false, data: () => undefined })),
    set_doc: jest.fn (() => Promise.resolve ()),
    update_doc: jest.fn (() => Promise.resolve ()),
    delete_doc: jest.fn (() => Promise.resolve ()),
    on_snapshot: jest.fn (() => jest.fn ()), // Returns an unsubscribe function for document / query snapshots;
    query: jest.fn ((collection_ref, ...constraints) => ({ ref: collection_ref, constraints })),'
    where: jest.fn ((field_path, op_str, value) => ({ type: 'where', field_path, op_str, value })),'
    order_by: jest.fn ((field_path, direction_str) => ({ type: 'order_by', field_path, direction_str })),'
    limit: jest.fn ((count) => ({ type: 'limit', count })),

    // Mock Auth instance properties / methods if needed, e.g., current_user;
    current_user: null,)
    onAuthStateChanged: jest.fn (() => jest.fn ()), // Returns an unsubscribe function;

  signInWithEmailAndPassword: jest.fn (() => Promise.resolve ({ user: { uid: 'mock - uid', email: 'mock@example.com' } })),
  sendEmailVerification: jest.fn (() => Promise.resolve ()),
  sendPasswordResetEmail: jest.fn (() => Promise.resolve ()),
  sign_out: jest.fn (() => Promise.resolve ()),
  // Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.);
  // For example:;

  get: jest.fn (() => Promise.resolve ({ data: {} })),
  post: jest.fn (() => Promise.resolve ({ data: {} })),
  // Add other axios methods if used (e.g., put, delete, request);
// Mock ResizeObserver for Radix UI components and other libraries that might use it;

  observe: jest.fn (),
  unobserve: jest.fn (),
  disconnect: jest.fn ()})),
// Polyfill for URL.revokeObjectURL;

// Check condition
if ( {) {
  $2
}

  URL.revokeObjectURL = jest.fn ();

process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup',;
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321',;
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key',;
// Jest-axe matchers for accessibility;
import { toHaveNoViolations } from 'jest-axe',;
expect.extend(toHaveNoViolations),;
;
// Mock window.matchMedia for Jest;
Object.defineProperty(window, 'matchMedia', {;
  writable:true,;
  value:jest.fn().mockImplementation(query => ({;
    matches:false, // Default to false (light theme);
    media:query,;
    onchange:null,;
    addListener:jest.fn(), // deprecated;
    removeListener:jest.fn(), // deprecated;
    addEventListener:jest.fn(),;
    removeEventListener:jest.fn(),;
    dispatchEvent:jest.fn()}))}),;
;
// Mock import.meta.env for Jest - This was ineffective for the SyntaxError;
// global.import = {
//   // @ts - expect - error;
//   meta: {
//     env: {
//       VITE_SUPABASE_URL: 'mock_supabase_url',
//       VITE_SUPABASE_ANON_KEY: 'mock_supabase_anon_key',
//       MODE: 'test',
//     },
//   },
// },
// Mock the supabase client module to prevent import.meta.env parsing errors;
      // Add any other specific methods from supabase.auth if they get called;
    // Add other top - level Supabase client methods if they get called;
    // e.g., from: jest.fn (), rpc: jest.fn (), etc.;
    // For now, keeping it minimal.;
// Mock Firebase / Firestore;
  // Add other app - level exports if needed, e.g., get_apps, get_app;
  // Mock collection function to be available on the db instance (for v8 style);
  // and as a top - level export (for v9 style).;
  // TODO: Implement
  id: doc_id,`;
    // Check condition;
  // TODO: Implement
  // TODO: Implement
      // For v8 style: db.collection ('path');',
      // For v8 style: db.doc ('path / doc_id');',
      // Add any other methods directly on db if used, e.g. batch, run_transaction;
    // For v9 style: collection (db, 'path');
    // For v9 style: doc (db, 'pathdoc_id');
    // Add other Firestore exports your code uses;
    // Mock Auth instance properties / methods if needed, e.g., current_user;
  // Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.);
  // For example:;
  // GoogleAuthProvider: jest.fn (),
  // signInWithPopup: jest.fn (() => Promise.resolve ({ user: { uid: 'mock - uid' } }))})),
    // Mock Storage instance properties / methods if needed;)
    // Mock StorageReference;)
    // Add methods like upload_bytes, getDownloadURL, delete, etc.;
    // Mock UploadResult;
  // Add other Storage exports your code uses;
// Mock axios;
  // Add other axios methods if used (e.g., put, delete, request);
// Mock ResizeObserver for Radix UI components and other libraries that might use it;
// Polyfill for URL.revokeObjectURL;

if (typeof URL.revokeObjectURL === 'undefined') {;
  URL.revokeObjectURL = jest.fn(),;
}
// Polyfill for BroadcastChannel;

if ( {) {
  $2

}
  URL.revokeObjectURL = jest.fn ();
}
// Polyfill for BroadcastChannel;
}
// Polyfill for BroadcastChannel;

// Check condition
if ( {) {
  $2
}
// Polyfill for BroadcastChannel;
// Check condition;
  // @ts - expect - error - BroadcastChannel polyfill for test environment;

      // @ts - expect - error - Mock name property assignment;

      this.name = name;
    post_message = jest.fn (),
    close = jest.fn (),
    onmessage = null,
    onmessageerror = null,
    addEventListener = jest.fn (),
    removeEventListener = jest.fn (),
    dispatch_event = jest.fn ();
// Polyfill for window.scroll_to;
// Check condition;

  window.scroll_to = jest.fn ();
// Mock axios.create to return axios itself;

// @ts - ignore;

    }
    post_message = jest.fn (),
    close = jest.fn (),
    onmessage = null,
    onmessageerror = null,
    addEventListener = jest.fn (),
    removeEventListener = jest.fn (),
    dispatch_event = jest.fn ();
=======
// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  fetchMock.resetMocks();
});

// Jest-DOM matchers
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

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
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Mock window.matchMedia for Jest
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock the supabase client module to prevent import.meta.env parsing errors
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } }
      })),
      // Add any other specific methods from supabase.auth if they get called
    },
    // Add other top-level Supabase client methods if they get called
    // e.g., from: jest.fn(), rpc: jest.fn(), etc.
    // For now, keeping it minimal.
  }
}));

// Mock Firebase/Firestore
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  // Add other app-level exports if needed, e.g., getApps, getApp
}));

jest.mock('firebase/firestore', () => {
  // Mock collection function to be available on the db instance (for v8 style)
  // and as a top-level export (for v9 style).
  const mockCollection = jest.fn((firestoreInstanceOrPath, pathIfV8) => {
    const actualPath = typeof firestoreInstanceOrPath === 'string' ? firestoreInstanceOrPath : pathIfV8;
    return {
      path: actualPath,
      doc: jest.fn((docId) => ({
        id: docId,
        path: `${actualPath}/${docId}`,
        get: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
        set: jest.fn(() => Promise.resolve()),
        update: jest.fn(() => Promise.resolve()),
        delete: jest.fn(() => Promise.resolve()),
        onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
      })),
      getDocs: jest.fn(() => Promise.resolve({ docs: [] })),
      addDoc: jest.fn(() => Promise.resolve({ id: 'mockedDocId' })),
      onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
    }
  });

  const mockDoc = jest.fn((firestoreInstanceOrCollectionRef, pathOrId, ...pathSegments) => {
    let basePath = '';
    if (firestoreInstanceOrCollectionRef && firestoreInstanceOrCollectionRef.path) {
      basePath = firestoreInstanceOrCollectionRef.path;
    }
    const fullPath = [basePath, pathOrId, ...pathSegments].filter(Boolean).join('/');
    return {
      id: pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : pathOrId,
      path: fullPath,
      get: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
      set: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
    }
  });

  return {
    getFirestore: jest.fn(() => ({
      // For v8 style: db.collection('path')
      collection: mockCollection,
      // For v8 style: db.doc('path/docId')
      doc: mockDoc,
      // Add any other methods directly on db if used, e.g. batch, runTransaction
    })),
    // For v9 style: collection(db, 'path')
    collection: mockCollection,
    // For v9 style: doc(db, 'path/docId')
    doc: mockDoc,
    getDoc: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
    setDoc: jest.fn(() => Promise.resolve()),
    updateDoc: jest.fn(() => Promise.resolve()),
    deleteDoc: jest.fn(() => Promise.resolve()),
    onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function for document/query snapshots
    query: jest.fn((collectionRef, ...constraints) => ({ ref: collectionRef, constraints })),
    where: jest.fn((fieldPath, opStr, value) => ({ type: 'where', fieldPath, opStr, value })),
    orderBy: jest.fn((fieldPath, directionStr) => ({ type: 'orderBy', fieldPath, directionStr })),
    limit: jest.fn((count) => ({ type: 'limit', count })),
    Timestamp: {
      now: jest.fn(() => ({ toDate: () => new Date() })),
      fromDate: jest.fn((date) => ({ toDate: () => date }))
    },
    // Add other Firestore exports your code uses
  }
});

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    // Mock Auth instance properties/methods if needed, e.g., currentUser
    currentUser: null,
    onAuthStateChanged: jest.fn(() => jest.fn()), // Returns an unsubscribe function
  })),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
  // Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.)
  // For example:
  // GoogleAuthProvider: jest.fn(),
  // signInWithPopup: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid' } }))
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(() => ({
    // Mock Storage instance properties/methods if needed
  })),
  ref: jest.fn((storageInstance, path) => ({
    // Mock StorageReference
    name: path ? path.substring(path.lastIndexOf('/') + 1) : 'mockfile.txt',
    fullPath: path || 'mock/full/path/mockfile.txt',
    // Add methods like uploadBytes, getDownloadURL, delete, etc.
  })),
  uploadBytes: jest.fn((storageRef, data, metadata) => Promise.resolve({
    // Mock UploadResult
    metadata: { fullPath: storageRef.fullPath, ...metadata },
    ref: storageRef
  })),
  getDownloadURL: jest.fn((storageRef) => Promise.resolve(`https://mockstorage.com/${storageRef.fullPath}`)),
  deleteObject: jest.fn(() => Promise.resolve()),
  // Add other Storage exports your code uses
}));

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  // Add other axios methods if used (e.g., put, delete, request)
}));

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = jest.fn();
}

// Polyfill for BroadcastChannel
if (typeof BroadcastChannel === 'undefined') {
  // @ts-expect-error - BroadcastChannel polyfill for test environment
  global.BroadcastChannel = class BroadcastChannelMock {
    constructor(name: string) {
      // @ts-expect-error - Mock name property assignment
      this.name = name;
    }
    postMessage = jest.fn();
    close = jest.fn();
    onmessage = null;
    onmessageerror = null;
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    dispatchEvent = jest.fn();
>>>>>>> merged-prs-20250907-203621
  }
}
// Polyfill for window.scroll_to;
// Check condition;
// Mock axios.create to return axios itself;
import axios from 'axios',;
// @ts-ignore;
axios.create = jest.fn(() => axios),;
;

<<<<<<< HEAD
// Vitest Compatibility Layer for Jest;
// -----------------------------;'
// Some test files were originally written for Vitest and import utilities from 'vitest'.;
// To keep migrating gradually while still running the Jest suite successfully, we create;

// a lightweight shim that re - maps the most common Vitest helpers to their Jest equivalents.;
// This avoids individual test failures like &quot;Vitest cannot be imported in a CommonJS module & quot;.;
//;
// NOTE: When the test suite is fully migrated to Vitest this shim can be removed together;`

// with the associated `moduleNameMapper` entry in `jest.config.cjs`.;
// ---------------------------------------------------------------------------;'
jest.mock ('vitest', () => {}
  const jest_fn = (...args: unknown[]) =>: any jest.fn (...(args as [])),

    // Named export expected in `import { vi } from 'vitest'` statements;

      fn: jest_fn,
    vi: {,
  fn: jest_fn,
      spy_on: jest.spy_on.bind (jest),
      mock: jest.mock.bind (jest),
      clearAllMocks: jest.clearAllMocks,
      resetAllMocks: jest.resetAllMocks,
      restoreAllMocks: jest.restoreAllMocks,
      useFakeTimers: jest.useFakeTimers.bind (jest),
      useRealTimers: jest.useRealTimers.bind (jest),
      runAllTimers: jest.runAllTimers.bind (jest),

      // (no - op implementations because Jest already handles env vars via `process.env`).;
      import_actual: jest.require_actual,;
      mockResolvedValue: <T = unknown>(value: T) => jest.fn ().mockResolvedValue (value),

    after_all: global.after_all} as unknown as Record < string unknown>;
// -----------------------------;
// Lightweight Context & Redux mocks to avoid provider runtime errors;
// -----------------------------;
// Auth Context;'
jest.mock ('@/context / auth / AuthProvider', () => {}
  const use_auth = () =>: any ({}
    is_authenticated: false,
    is_loading: false,
    user: null,)
    login: jest.fn (),
    logout: jest.fn (),
    sign_up: jest.fn ()}),
  const AuthProvider = ({ children }: any) =>: any children,

    __esModule: true,
    AuthProvider,
    default: AuthProvider,
    use_auth}

    ...actual_redux,
    use_dispatch: () => jest.fn (),'
    // Provide predictable data for selectors so components don't explode;
    use_selector: jest.fn ((selector: any) => {}
      const mock_state = {}
        cart: { items: [] },
        wishlist: { items: [] }},'
      return typeof selector === 'function' ? selector (mock_state) : mock_state;
    })}

  const use_wishlist = () =>: any ({ items: [] as string[], toggle: jest.fn (), is_wishlisted: () => false }),
  return { __esModule: true, use_wishlist, default: use_wishlist }
// Polyfill IntersectionObserver for components that use it (e.g., embla - carousel);
// Check condition;

    constructor () {}
    observe () {}
    unobserve () {}
    disconnect () {}
    take_records () { return [] }
  // @ts - ignore;
  window.IntersectionObserver = MockIntersectionObserver,
  // @ts - ignore;

  global.IntersectionObserver = MockIntersectionObserver;

  global.IntersectionObserver = MockIntersectionObserver;

// Ensure all code paths use the mock implementation;
// Some services import the global fetch reference before jest - fetch - mock is enabled.;
// Override it explicitly so those modules receive the mocked version.;

// @ts - ignore;
global.fetch = fetch_mock,
// Polyfill window.window.window.performance.getEntriesByType for JSDOM (used in production_logger);

}

  // @ts - ignore;
  window.window.window.performance.getEntriesByType = () => [];
}'
jest.mock ('@supabase / ssr', () => ({}
  supabase: {}
    auth: {}
      onAuthStateChange: jest.fn (() => ({}
        data: { subscription: { unsubscribe: jest.fn () } }}))}}})),
// Provide minimal mocks for other @supabase / ssr helpers referenced by auth - js;'
jest.mock ('@supabase / ssr / dist / main / cookies', () => ({}

  get_all: () => ({}),
  set_item: jest.fn (),
  get_item: jest.fn ()})),'
// When a module imports '@/context' root index (e.g., useEnqueueSnackbar);'
jest.mock ('@/context', () => {}
  const useEnqueueSnackbar = () =>: any jest.fn (),
  return { __esModule: true, useEnqueueSnackbar }
// Extend Vitest shim with restoreAllMocks for suites that call it;
// @ts - ignore - vi is added by the vitest mock above;
// Check condition;

jest.mock ('msw / node', () => ({ setup_server: () => ({ listen: jest.fn (), reset_handlers: jest.fn (), close: jest.fn () }) })),
// Provide mock for missing component;'
jest.mock ('@/components / search / FilterSidebar', () => ({ FilterSidebar: () => null })),
// Extend Vitest shim with timer helpers if not present;
// @ts - ignore - vi is added by the vitest mock above;
// Check condition;

  // @ts - ignore;
// Provide minimal mocks for other @supabase / ssr helpers referenced by auth - js;
// When a module imports '@/context' root index (e.g., useEnqueueSnackbar);
// Extend Vitest shim with restoreAllMocks for suites that call it;
// @ts - ignore - vi is added by the vitest mock above;
// Check condition;
  // @ts - ignore;
// Mock @supabase / ssr createBrowserClient so components don't crash in tests;
// Ensure hooks / use - toast exports usable toast fn;
// Minimal MSW mocks to satisfy tests without parsing ESM bundles;
// Provide mock for missing component;
// Extend Vitest shim with timer helpers if not present;
// @ts - ignore - vi is added by the vitest mock above;
// Check condition;
  // @ts - ignore;
  // @ts - ignore;
  // @ts - ignore;
  // @ts - ignore;

}) );
//Add any other specific methods from supabase.auth if they get called;
};
//Add other top-level Supabase client methods if they get called //e.g., from: jest.fn (), rpc: jest.fn (), etc. //For now, keeping it minimal. 
//Mock Firebase/Firestore jest.mock ('firebase/firestore', () => {
  //Mock collection function to be available on the db instance (for v8 style) //and as a top-level export (for v9 style) . return {
  // TODO: Implement
  path: actualPath, doc: jest.fn ( (docId) => ({,`;
  id: docId, path: `$ {
  actualPath;
}/$ {
  docId;)`;
}`, get: jest.fn ( () => Promise.resolve ({,)
  exists: () => false, data: () => undefined;
set: jest.fn ( () => Promise.resolve () );,
  update: jest.fn ( () => Promise.resolve () );
delete: jest.fn ( () => Promise.resolve () );,
  onSnapshot: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function;
  // TODO: Implement
  getFirestore: jest.fn ( () => ({)
  //For v8 style: db.collection ('path') collection: mockCollection, //For v8 style: db.doc ('path/docId') doc: mockDoc, //Add any other methods directly on db if used, e.g. batch, runTransaction;
//For v9 style: collection (db, 'path') collection: mockCollection;
//For v9 style: doc (db, 'pathdocId') doc: mockDoc;',
  getDoc: jest.fn ( () => Promise.resolve ({)
setDoc: jest.fn ( () => Promise.resolve () );,
  updateDoc: jest.fn ( () => Promise.resolve () );
deleteDoc: jest.fn ( () => Promise.resolve () );,
  onSnapshot: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function for document/query snapshots query: jest.fn ( (collectionRef, ...constraints) => ({
  ref: collectionRef, constraints;)
where: jest.fn ( (fieldPath, opStr, value) => ({
  type: 'where', fieldPath, opStr, value;')
orderBy: jest.fn ( (fieldPath, directionStr) => ({
  type: 'orderBy', fieldPath, directionStr;')
limit: jest.fn ( (count) => ({,
  type: 'limit', count;')
  now: jest.fn ( () => ({)
  toDate: () => new Date () 
fromDate: jest.fn ( (date) => ({,)
  toDate: () => date;
}) ) 
//Add other Firestore exports your code uses;
});
jest.mock ('firebase/auth', () => ({')
  getAuth: jest.fn ( () => ({)
  //Mock Auth instance properties/methods if needed, e.g., currentUser currentUser: null, onAuthStateChanged: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function;
createUserWithEmailAndPassword: jest.fn ( () => Promise.resolve ({,
  user: {
  uid: 'mock-uid', email: 'mock@example.com
})
signInWithEmailAndPassword: jest.fn ( () => Promise.resolve ({,
sendEmailVerification: jest.fn ( () => Promise.resolve () );,
  sendPasswordResetEmail: jest.fn ( () => Promise.resolve () );
signOut: jest.fn ( () => Promise.resolve () );
//Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.) //For example: //GoogleAuthProvider: jest.fn ();
jest.mock ('firebase/storage', () => ({')
  getStorage: jest.fn ( () => ({
  //Mock Storage instance properties/methods if needed;)
ref: jest.fn ( (storageInstance, path) => ({)
  //Mock StorageReference name: path ? path.substring (path.lastIndexOf ('/') + 1) : 'mockfile.txt', fullPath: path || 'mock/full/path/mockfile.txt', //Add methods like uploadBytes, getDownloadURL, delete, etc.
uploadBytes: jest.fn ( (storageRef, data, metadata) => Promise.resolve ({
  //Mock UploadResult metadata: {,
  fullPath: storageRef.fullPath, ...metadata;
ref: storageRef;)
}) );`;
getDownloadURL: jest.fn ( (storageRef) => Promise.resolve (`https://mockstorage.com/$ {
  storageRef.fullPath;)`;
}`) );
deleteObject: jest.fn ( () => Promise.resolve () );
//Add other Storage exports your code uses;
//Mock axios jest.mock ('axios', () => ({')
  get: jest.fn ( () => Promise.resolve ({,
  data: {
  
post: jest.fn ( () => Promise.resolve ({,
  
//Add other axios methods if used (e.g., put, delete, request) 
//Mock ResizeObserver for Radix UI components and other libraries that might use it //Polyfill for BroadcastChannel if (typeof BroadcastChannel === 'undefined') {
  //@ts-expect-error - BroadcastChannel polyfill for test environment global.BroadcastChannel = class BroadcastChannelMock {
  // TODO: Implement
  //@ts-expect-error - Mock name property assignment //Mock axios.create to return axios itself import {
  // TODO: Implement
  {
  axios from 'axios';`;
//@ts-ignore //----------------------------- //Vitest Compatibility Layer for Jest //----------------------------- //Some test files were originally written for Vitest and import utilities from 'vitest'. //To keep migrating gradually while still running the Jest suite successfully, we create //a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents. //This avoids individual test failures like "Vitest cannot be imported in a CommonJS module" . // //NOTE: When the test suite is fully migrated to Vitest this shim can be removed together //with the associated `moduleNameMapper` entry in `jest.config.cjs`. //--------------------------------------------------------------------------- return {"
  // TODO: Implement
  //Named export expected in `import {
  // TODO: Implement
  vi;"`;
}from 'vitest'` statements vi: {',`;
  fn: jestFn, spyOn: jest.spyOn.bind (jest), mock: jest.mock.bind (jest), clearAllMocks: jest.clearAllMocks, resetAllMocks: jest.resetAllMocks, restoreAllMocks: jest.restoreAllMocks, useFakeTimers: jest.useFakeTimers.bind (jest), useRealTimers: jest.useRealTimers.bind (jest), runAllTimers: jest.runAllTimers.bind (jest), advanceTimersByTime: jest.advanceTimersByTime.bind (jest), //Provide a simple implementation of `import.meta` mocking helpers //frequently used in Vitest examples // (no-op implementations because Jest already handles env vars via `process.env`) . importActual: jest.requireActual, mockResolvedValue: <T = unknown> (value: T) => jest.fn () .mockResolvedValue (value), mockRejectedValue: <T = unknown> (value: T) => jest.fn () .mockRejectedValue (value)
=======
// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  window.scrollTo = jest.fn();
}

// Mock axios.create to return axios itself
import axios from 'axios';
// @ts-ignore
axios.create = jest.fn(() => axios);

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
jest.mock('vitest', () => {
  const jestFn = (...args: unknown[]): any => jest.fn(...(args as []));

  return {
    // Named export expected in `import { vi } from 'vitest'` statements
    vi: {
      fn: jestFn,
      spyOn: jest.spyOn.bind(jest),
      mock: jest.mock.bind(jest),
      clearAllMocks: jest.clearAllMocks,
      resetAllMocks: jest.resetAllMocks,
      restoreAllMocks: jest.restoreAllMocks,
      useFakeTimers: jest.useFakeTimers.bind(jest),
      useRealTimers: jest.useRealTimers.bind(jest),
      runAllTimers: jest.runAllTimers.bind(jest),
      advanceTimersByTime: jest.advanceTimersByTime.bind(jest),
      // Provide a simple implementation of `import.meta` mocking helpers
      // frequently used in Vitest examples
      // (no-op implementations because Jest already handles env vars via `process.env`).
      importActual: jest.requireActual,
      mockResolvedValue: <T = unknown>(value: T) => jest.fn().mockResolvedValue(value),
      mockRejectedValue: <T = unknown>(value: T) => jest.fn().mockRejectedValue(value)
    },
    // Re-export common testing globals so that `import { expect, test } from 'vitest'`
    // continues to work inside the Jest environment.
    describe: global.describe,
    it: global.it,
    test: global.test,
    expect: expect, // Use expect from jest-dom/jest instead of global.expect
    beforeEach: global.beforeEach,
    afterEach: global.afterEach,
    beforeAll: global.beforeAll,
    afterAll: global.afterAll
  } as unknown as Record<string, unknown>;
});

// -----------------------------
// Lightweight Context & Redux mocks to avoid provider runtime errors
// -----------------------------
// Auth Context
jest.mock('@/context/auth/AuthProvider', () => {
  const useAuth = () => ({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
    signUp: jest.fn()
  });
  const AuthProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    AuthProvider,
    default: AuthProvider,
    useAuth
  };
});

// Analytics Context
jest.mock('@/context/AnalyticsContext', () => {
  const useAnalytics = () => ({
    trackEvent: jest.fn(),
    trackPageView: jest.fn()
  });
  const AnalyticsProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    AnalyticsProvider,
    default: AnalyticsProvider,
    useAnalytics
  };
});

// Whitelabel Context
jest.mock('@/context/WhitelabelContext', () => {
  const useWhitelabel = () => ({
    brand: 'default',
    theme: 'light'
  });
  const WhitelabelProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    WhitelabelProvider,
    default: WhitelabelProvider,
    useWhitelabel
  };
});

// Feedback Context
jest.mock('@/context/FeedbackContext', () => {
  const useFeedback = () => ({
    open: jest.fn()
  });
  const FeedbackProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    FeedbackProvider,
    default: FeedbackProvider,
    useFeedback
  };
});

// react-redux hooks
jest.mock('react-redux', () => {
  const actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux,
    useDispatch: () => jest.fn(),
    // Provide predictable data for selectors so components don't explode
    useSelector: jest.fn((selector: any) => {
      const mockState = {
        cart: { items: [] },
        wishlist: { items: [] }
      };
      return typeof selector === 'function' ? selector(mockState) : mockState;
    })
  };
});

// Cart Context – simple noop implementation for tests
jest.mock('@/context/CartContext', () => {
  const useCart = () => ({ items: [], dispatch: jest.fn() });
  const CartProvider = ({ children }: { children: React.ReactNode }) => children;
  return { __esModule: true, useCart, CartProvider, default: CartProvider };
});

// Wishlist hook – return empty list helpers
jest.mock('@/hooks/useWishlist', () => {
  const useWishlist = () => ({ items: [] as string[], toggle: jest.fn(), isWishlisted: () => false });
  return { __esModule: true, useWishlist, default: useWishlist };
});

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
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

// Polyfill window.performance.getEntriesByType for JSDOM (used in production_logger)
if (typeof window.performance.getEntriesByType === 'undefined') {
  // @ts-ignore
  window.performance.getEntriesByType = () => [];
}

jest.mock('@supabase/ssr', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } }
      }))
    }
  }
}));

// Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js
jest.mock('@supabase/ssr/dist/main/cookies', () => ({
  getAll: () => ({}),
  setItem: jest.fn(),
  getItem: jest.fn()
}));

// When a module imports '@/context' root index (e.g., useEnqueueSnackbar)
jest.mock('@/context', () => {
  const useEnqueueSnackbar = () => jest.fn();
  return { __esModule: true, useEnqueueSnackbar };
});

// Extend Vitest shim with restoreAllMocks for suites that call it
// @ts-ignore - vi is added by the vitest mock above
if (!global.vi) {
  // @ts-ignore
  global.vi = {};
}
// @ts-ignore
if (!global.vi.restoreAllMocks) {
  // @ts-ignore
  global.vi.restoreAllMocks = jest.restoreAllMocks;
}

// Mock @supabase/ssr createBrowserClient so components don't crash in tests
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: () => ({
    auth: { onAuthStateChange: jest.fn(), signInWithPassword: jest.fn(), signUp: jest.fn() }
  })
}));

// Ensure hooks/use-toast exports usable toast fn
jest.mock('@/hooks/use-toast', () => {
  const toastFn = jest.fn();
  return { __esModule: true, toast: toastFn, useToast: () => ({ toast: toastFn }) };
});

// Minimal MSW mocks to satisfy tests without parsing ESM bundles
jest.mock('msw', () => ({ rest: { get: jest.fn(), post: jest.fn(), put: jest.fn(), delete: jest.fn() } }));
jest.mock('msw/node', () => ({ setupServer: () => ({ listen: jest.fn(), resetHandlers: jest.fn(), close: jest.fn() }) }));

// Provide mock for missing component
jest.mock('@/components/search/FilterSidebar', () => ({ FilterSidebar: () => null }));

// Extend Vitest shim with timer helpers if not present
// @ts-ignore - vi is added by the vitest mock above
if (!global.vi) {
  // @ts-ignore
  global.vi = {};
}
// @ts-ignore
if (!global.vi.useFakeTimers) {
  // @ts-ignore
  global.vi.useFakeTimers = jest.useFakeTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.useRealTimers) {
  // @ts-ignore
  global.vi.useRealTimers = jest.useRealTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.runAllTimers) {
  // @ts-ignore
  global.vi.runAllTimers = jest.runAllTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.advanceTimersByTime) {
  // @ts-ignore
  global.vi.advanceTimersByTime = jest.advanceTimersByTime.bind(jest);
}
>>>>>>> merged-prs-20250907-203621
