// Temporary shim to satisfy JSX intrinsic element typing in isolated files
// This should be safe with Next.js and will be ignored if proper JSX types are present
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

