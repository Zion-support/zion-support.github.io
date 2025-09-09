// Polyfill fetch and enable fetch mocks;
global.TextEncoder = TextEncoder,;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests;
global.TextDecoder = TextDecoder,;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;
// or that import.meta itself is transformed into an object where 'env' can be populated.;
axios.create = jest.fn (() => axios),      this.name = name;
}
}) );
//Add any other specific methods from supabase.auth if they get called 
};
//Add other top-level Supabase client methods if they get called //e.g., from: jest.fn (), rpc: jest.fn (), etc. //For now, keeping it minimal. 
}
}) );
//Mock Firebase/Firestore jest.mock ('firebase/firestore', () => {
  //Mock collection function to be available on the db instance (for v8 style) //and as a top-level export (for v9 style) . return {
  path: actualPath, doc: jest.fn ( (docId) => ({
  id: docId, path: `$ {
  actualPath 
}/$ {
  docId 
}`, get: jest.fn ( () => Promise.resolve ({
  exists: () => false, data: () => undefined 
}) );
set: jest.fn ( () => Promise.resolve () );
update: jest.fn ( () => Promise.resolve () );
delete: jest.fn ( () => Promise.resolve () );
onSnapshot: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function 
}) );
return {
  getFirestore: jest.fn ( () => ({
  //For v8 style: db.collection ('path') collection: mockCollection, //For v8 style: db.doc ('path/docId') doc: mockDoc, //Add any other methods directly on db if used, e.g. batch, runTransaction 
}) );
//For v9 style: collection (db, 'path') collection: mockCollection;
//For v9 style: doc (db, 'pathdocId') doc: mockDoc;
getDoc: jest.fn ( () => Promise.resolve ({
  exists: () => false, data: () => undefined 
}) );
setDoc: jest.fn ( () => Promise.resolve () );
updateDoc: jest.fn ( () => Promise.resolve () );
deleteDoc: jest.fn ( () => Promise.resolve () );
onSnapshot: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function for document/query snapshots query: jest.fn ( (collectionRef, ...constraints) => ({
  ref: collectionRef, constraints 
}) );
where: jest.fn ( (fieldPath, opStr, value) => ({
  type: 'where', fieldPath, opStr, value 
}) );
orderBy: jest.fn ( (fieldPath, directionStr) => ({
  type: 'orderBy', fieldPath, directionStr 
}) );
limit: jest.fn ( (count) => ({
  type: 'limit', count 
}) );
Timestamp: {
  now: jest.fn ( () => ({
  toDate: () => new Date () 
}) );
fromDate: jest.fn ( (date) => ({
  toDate: () => date 
}) ) 
};
//Add other Firestore exports your code uses 
}
});
jest.mock ('firebase/auth', () => ({
  getAuth: jest.fn ( () => ({
  //Mock Auth instance properties/methods if needed, e.g., currentUser currentUser: null, onAuthStateChanged: jest.fn ( () => jest.fn () ), //Returns an unsubscribe function 
}) );
createUserWithEmailAndPassword: jest.fn ( () => Promise.resolve ({
  user: {
  uid: 'mock-uid', email: 'mock@example.com' 
}
}) );
signInWithEmailAndPassword: jest.fn ( () => Promise.resolve ({
  user: {
  uid: 'mock-uid', email: 'mock@example.com' 
}
}) );
sendEmailVerification: jest.fn ( () => Promise.resolve () );
sendPasswordResetEmail: jest.fn ( () => Promise.resolve () );
signOut: jest.fn ( () => Promise.resolve () );
//Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.) //For example: //GoogleAuthProvider: jest.fn ();
jest.mock ('firebase/storage', () => ({
  getStorage: jest.fn ( () => ({
  //Mock Storage instance properties/methods if needed 
}) );
ref: jest.fn ( (storageInstance, path) => ({
  //Mock StorageReference name: path ? path.substring (path.lastIndexOf ('/') + 1) : 'mockfile.txt', fullPath: path || 'mock/full/path/mockfile.txt', //Add methods like uploadBytes, getDownloadURL, delete, etc. 
}) );
uploadBytes: jest.fn ( (storageRef, data, metadata) => Promise.resolve ({
  //Mock UploadResult metadata: {
  fullPath: storageRef.fullPath, ...metadata 
};
ref: storageRef 
}) );
getDownloadURL: jest.fn ( (storageRef) => Promise.resolve (`https://mockstorage.com/$ {
  storageRef.fullPath 
}`) );
deleteObject: jest.fn ( () => Promise.resolve () );
//Add other Storage exports your code uses 
}) );
//Mock axios jest.mock ('axios', () => ({
  get: jest.fn ( () => Promise.resolve ({
  data: {
  
}
}) );
post: jest.fn ( () => Promise.resolve ({
  data: {
  
}
}) );
//Add other axios methods if used (e.g., put, delete, request) 
}) );
//Mock ResizeObserver for Radix UI components and other libraries that might use it //Polyfill for BroadcastChannel if (typeof BroadcastChannel === 'undefined') {
  //@ts-expect-error - BroadcastChannel polyfill for test environment global.BroadcastChannel = class BroadcastChannelMock {
  constructor (name: string) {
  //@ts-expect-error - Mock name property assignment //Mock axios.create to return axios itself import {
  {
  axios from 'axios';
//@ts-ignore //----------------------------- //Vitest Compatibility Layer for Jest //----------------------------- //Some test files were originally written for Vitest and import utilities from 'vitest'. //To keep migrating gradually while still running the Jest suite successfully, we create //a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents. //This avoids individual test failures like "Vitest cannot be imported in a CommonJS module" . // //NOTE: When the test suite is fully migrated to Vitest this shim can be removed together //with the associated `moduleNameMapper` entry in `jest.config.cjs`. //--------------------------------------------------------------------------- return {
  //Named export expected in `import {
  vi 
}from 'vitest'` statements vi: {
  fn: jestFn, spyOn: jest.spyOn.bind (jest), mock: jest.mock.bind (jest), clearAllMocks: jest.clearAllMocks, resetAllMocks: jest.resetAllMocks, restoreAllMocks: jest.restoreAllMocks, useFakeTimers: jest.useFakeTimers.bind (jest), useRealTimers: jest.useRealTimers.bind (jest), runAllTimers: jest.runAllTimers.bind (jest), advanceTimersByTime: jest.advanceTimersByTime.bind (jest), //Provide a simple implementation of `import.meta` mocking helpers //frequently used in Vitest examples // (no-op implementations because Jest already handles env vars via `process.env`) . importActual: jest.requireActual, mockResolvedValue: <T = unknown> (value: T) => jest.fn () .mockResolvedValue (value), mockRejectedValue: <T = unknown> (value: T) => jest.fn () .mockRejectedValue (value) 
};
//Re-export common testing globals so that `import {
  {
  {
  expect, test 
}from 'vitest'` //continues to work inside the Jest environment. describe: global.describe;
it: global.it;
test: global.test;
expect: expect, //Use expect from jest-dom/jest instead of global.expect beforeEach: global.beforeEach;
afterEach: global.afterEach;
beforeAll: global.beforeAll;
afterAll: global.afterAll 
}as unknown as Record<string unknown> 
});
//----------------------------- //Lightweight Context & Redux mocks to avoid provider runtime errors //----------------------------- //Auth Context //Polyfill IntersectionObserver for components that use it (e.g., embla-carousel) if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
  constructor () {
  
}observe () {
  
}unobserve () {
  
}disconnect () {
  
}
}//@ts-ignore window.IntersectionObserver = MockIntersectionObserver;
//@ts-ignore global.IntersectionObserver = MockIntersectionObserver 
}//Ensure all code paths use the mock implementation //Some services import the global fetch reference before jest-fetch-mock is enabled. //Override it explicitly so those modules receive the mocked version. //@ts-ignore jest.mock ('@supabase/ssr', () => ({
  supabase: {
  auth: {
  onAuthStateChange: jest.fn ( () => ({
  //Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js jest.mock ('@supabase/ssr/dist/main/cookies', () => ({
  getAll: () => ({
  
});
setItem: jest.fn ();
getItem: jest.fn () 
}) );
//When a module imports '@/context' root index (e.g., useEnqueueSnackbar) //@ts-ignore if (!global.vi.useRealTimers) global.vi.useRealTimers = jest.useRealTimers.bind (jest);
//@ts-ignore if (!global.vi.runAllTimers) global.vi.runAllTimers = jest.runAllTimers.bind (jest);
// @ts-ignore 
