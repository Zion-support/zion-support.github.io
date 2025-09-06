// Create a safe process object
const createProcessObject = () => ({
  env: { ...defaultEnv },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',

console && console.log('✅ Environment polyfill loaded successfully');


export default safeEnv;
export default safeEnv;
}
}
}
}

// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject()
  } else if (typeof (globalThis as any).process.env === 'undefined') {
    (globalThis as any).process.env = { ...defaultEnv }
  }
}
;
// Ensure process is available on window;
if (typeof window !== 'undefined') {;
  if (typeof (window as any).process === 'undefined') {;
    (window as any).process = createProcessObject();
  } else if (typeof (window as any).process.env === 'undefined') {;
    (window as any).process.env = { ...defaultEnv }
  }
}



console.log ('✅ Environment polyfill loaded successfully');
export default safe_env;
export default safe_env;
