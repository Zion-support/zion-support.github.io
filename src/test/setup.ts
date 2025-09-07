<<<<<<< HEAD
// Test setup file for Jest
import "@testing-library/jest-dom";
:src_backup/test/setup.ts
// Test setup file for Jest
require("@testing-library/jest-dom");

;
ursor/automate-test-improve-and-merge-code-646c;
// Test setup file for Jest;
import "@testing-library/jest-dom";// Mock window.matchMedia;"
Object.defineProperty(window, "matchMedia", {"writable": true,// Test setup file for Jest;"
// Mock window.matchMedia;
}
Object.defineProperty(window, "matchMedia", {"writable": true,"value": jest.fn().mockImplementation((query) => ({import '@testing-library/jest-dom';// Mock window && window.matchMedia;'
}
Object && Object.defineProperty(window, 'matchMedia', {"writable": true,"value": jest && jest.fn().mockImplementation(query => ({ursor/automate-test-improve-and-merge-code-646c;'
// Test setup file for Jest;
// Mock window.matchMedia;
}
Object.defineProperty(window, "matchMedia", {"writable": true,"value": jest.fn().mockImplementation((query) => ({"matches": false,"media": query,"onchange": null,"addListener": jest && jest.fn(), // deprecated;"
    }
    "removeListener": jest && jest.fn(), // deprecated;
    "addEventListener": jest && jest.fn(),"removeEventListener": jest && jest.fn(),"dispatchEvent": jest && jest.fn()})
})// Mock IntersectionObserver;
global && global.IntersectionObserver = class IntersectionObserver {global.IntersectionObserver = class IntersectionObserver {"dispatchEvent": jest && jest.fn()})
})// Mock IntersectionObserver;
    "dispatchEvent": jest && jest.fn()})
})// Mock IntersectionObserver;
=======
<<<<<<< HEAD

=======
// Test setup file for Jest
import "@testing-library/jest-dom";
>>>>>>> merged-prs-20250907-203621
// Test setup file for Jest
require("@testing-library/jest-dom");

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
<<<<<<< HEAD

import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
=======
import '@testing-library/jest-dom';
// Test setup file for Jest
require(@testing-library/jest-dom");

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia, {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
import '@testing-library/jest-dom;
>>>>>>> merged-prs-20250907-203621

    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

<<<<<<< HEAD
// Mock IntersectionObserver

=======

<<<<<<< HEAD
// Test setup file for Jest
import '@testing-library/jest-dom'
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true
  value: jest.fn().mockImplementation(query => ({
    matches: false
    media: query
    onchange: null
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()
  }))
})
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
<<<<<<< HEAD
global && global.ResizeObserver = class ResizeObserver {
=======
<<<<<<< HEAD

=======
global.ResizeObserver = class ResizeObserver {
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}// Mock console methods to reduce noise in tests;
}
// Mock console methods to reduce noise in tests;
}
// Mock console methods to reduce noise in tests;
// Global test setup;
global.ResizeObserver = jest.fn().mockImplementation(() => ({"observe": jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()
}))// Mock IntersectionObserver;
global.IntersectionObserver = jest.fn().mockImplementation(() => ({"observe": jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()
}))// Mock console methods;
global.console = {...console, "warn": jest.fn(), "error": jest.fn()
}
;
  const originalWarn  = console && console.warn;beforeAll(() => {console.error = (..."args": any[]) => {if (typeof args[0] === "string" &&;"
      }
      args[0].includes(""Warning": ReactDOM.render is no longer supported")if (typeof args[0] === "string" &&;"
      args[0].includes(""Warning": ReactDOM.render is no longer supported")if (true) ,"
}beforeAll(() => {console.error = (..."args": any[]) => {beforeAll(() => {console.error = (..."args": any[]) => {) ;
  }
  return;
    }originalError && originalError.call(console, ...args)}console.warn = (..."args": any[]) => {if (typeof args[0] === "string" &&;"
      (args[0].includes(""Warning":") || args[0].includes(""Deprecated":"))console && console.warn = (..."args": any[]) => {if (typeof args[0] === 'string' &&;'
      (args[0].includes('"Warning":') |args[0].includes('"Deprecated":'))// Test setup file for Jest;'
}
import '@testing - library / jest - dom';'
// Mock window.match_media;
Object.define_property (window, 'match_media', {"writable": true,"value": jest.fn ().mock_implementation (query => ({"matches": false,"media": query,"onchange": null,"add_listener": jest.fn (), // deprecated;'
    }
    "remove_listener": jest.fn (), // deprecated;
    "addEventListener": jest.fn (),"removeEventListener": jest.fn (),"dispatch_event": jest.fn ()})
})// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock console methods to reduce noise in tests;

<<<<<<< HEAD
const original_warn = console.warn;
before_all (() => {console.error = (..."args": any[]) => {// Check condition;
}
if () {) {$2;
}
=======
// Mock console methods to reduce noise in tests
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock console methods
global.console = {
  ...console, warn: jest.fn(), error: jest.fn(), };
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
<<<<<<< HEAD
const originalError = console.error
const originalWarn = console.warn
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const originalError = console && console.error;
const originalWarn = console && console.warn;

<<<<<<< HEAD
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    ) {
      return;
    }
    originalError.call(console, ...args);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (true) {}
    ) {
      return;
    }
<<<<<<< HEAD
    originalError.call(console, ...args)
  }
  console.warn = (...args: any[]) => {
=======

    originalError && originalError.call(console, ...args);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };
  
  console && console.warn = (...args: any[]) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') |args[0].includes('Deprecated:'))
// Test setup file for Jest;
import '@testing - library / jest - dom';
// Mock window.match_media;
Object.define_property (window, 'match_media', {
  writable: true,
  value: jest.fn ().mock_implementation (query => ({
    matches: false,
    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn (),
  })),
});
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock console methods to reduce noise in tests;
const original_error = console.error;
const original_warn = console.warn;
// Mock console methods to reduce noise in tests
>>>>>>> merged-prs-20250907-203621

const originalError = console && console.error;
const originalWarn = console && console.warn;

beforeAll(() => {
<<<<<<< HEAD
=======
  console.error = (...args: any[]) => {

    ) {
      return;
    }
    original_error.call (console, ...args)}
  console.warn = (...args: any[]) => {if (|| args[0].includes ('Deprecated:'))) {$2;
}) {return;
    }originalWarn && originalWarn.call(console, ...args)}})afterAll(() => {console.error = originalError;
  console.warn = originalWarn;
})console.error = originalError;
  console.warn = originalWarn;
})console && console.error = originalError;
  console && console.warn = originalWarn;
})original_warn.call (console, ...args)}
})after_all (() => {console.error = original_error;
  console.warn = original_warn;
})ursor/automate-test-improve-and-merge-code-646c;
before_all (() => {
>>>>>>> merged-prs-20250907-203621
  console.error = (...args: any[]) => {

    ) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return;
    }
    original_error.call (console, ...args)}
  console.warn = (..."args": any[]) => {if (|| args[0].includes ('"Deprecated":'))) {$2;'
}) {return;
    }originalWarn && originalWarn.call(console, ...args)}})afterAll(() => {console.error = originalError;
  }
  console.warn = originalWarn;
})console.error = originalError;
  console.warn = originalWarn;
})console && console.error = originalError;
  console && console.warn = originalWarn;
})original_warn.call (console, ...args)}
})after_all (() => {console.error = original_error;
  }
  console.warn = original_warn;
})ursor/automate-test-improve-and-merge-code-646c;
before_all (() => {
  console.error = (...args: any[]) => {
    // Check condition
if (
    ) {) {
  $2
}
      return;
    }
    original_error.call (console, ...args);
  }
  console.warn = (...args: any[]) => {
    if (|| args[0].includes ('Deprecated:'))) {
  $2
}
    ) {
      return;
    }
<<<<<<< HEAD
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console && console.error = originalError;
  console && console.warn = originalWarn;
});

<<<<<<< HEAD
    original_warn.call (console, ...args);
  }
});
=======
<<<<<<< HEAD
=======
    original_warn.call (console, ...args);
=======
    originalWarn.call(console, ...args)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
})
afterAll(() => {
  console.error = originalError
  console.warn = originalWarn;
});
});
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
after_all (() => {
  console.error = original_error;
  console.warn = original_warn;
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
