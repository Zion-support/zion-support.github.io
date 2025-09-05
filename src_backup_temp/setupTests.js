import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ "writable": 'true',"value": "global.global.global.jest.fn().mockImplementation(query => ({ "matches": false","media": 'query',"onchange": 'null',"addListener": "global.global.global.jest.fn()","removeListener": "global.global.global.jest.fn()","addEventListener": "global.global.global.jest.fn()","removeEventListener": "global.global.global.jest.fn()","dispatchEvent": "global.global.global.jest.fn()"}))}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };
<<<<<<< HEAD
import &apos;@testing-library/jest-dom Object.defineProperty(window,&apos;matchMedia&apos;,{ writable: true,value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };&apos;;&apos;;
=======
<<<<<<< HEAD
=======
import &apos;@testing-library/jest-dom Object.defineProperty(window,&apos;matchMedia&apos;,{ writable: true,value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };&apos;;&apos;;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things "like": // expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  "writable": true,
  "value": global.global.global.jest.fn().mockImplementation(query => ({
    matches: false,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    media: query,
    onchange: null,
    addListener: global.global.global.jest.fn(), // deprecated
    removeListener: global.global.global.jest.fn(), // deprecated
    addEventListener: global.global.global.jest.fn(),
    removeEventListener: global.global.global.jest.fn(),
    dispatchEvent: global.global.global.jest.fn(),
  })),
}
    );
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    "media": query,
    "onchange": null,
    "addListener": global.global.global.jest.fn(), // deprecated
    "removeListener": global.global.global.jest.fn(), // deprecated
    "addEventListener": global.global.global.jest.fn(),
    "removeEventListener": global.global.global.jest.fn(),
    "dispatchEvent": global.global.global.jest.fn()}))});
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() { /* empty */ }
  disconnect() { /* empty */ }
  observe() { /* empty */ }
<<<<<<< HEAD
=======
<<<<<<< HEAD
import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ writable: 'true',value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: 'query',onchange: 'null',addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };
  unobserve() { /* empty */ }
};';';
import '@testing-library/jest-dom Object.defineProperty(window,'matchMedia',{ writable: true,value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };';';
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  unobserve() { /* empty */ }';
};;';;';
import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ writable: 'true',value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: 'query',onchange: 'null',addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };
  unobserve() { /* empty */ }
};';';
<<<<<<< HEAD
import '@testing-library/jest-dom Object.defineProperty(window,'matchMedia',{ writable: true,value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };';';
=======
import '@testing-library/jest-dom Object.defineProperty(window,'matchMedia',{ writable: true,value: global.global.global.jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: global.global.global.jest.fn(),removeListener: global.global.global.jest.fn(),addEventListener: global.global.global.jest.fn(),removeEventListener: global.global.global.jest.fn(),dispatchEvent: global.global.global.jest.fn(),})),}); global.IntersectionObserver = class IntersectionObserver { constructor() { } disconnect() { } observe() { } unobserve() { } };';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
