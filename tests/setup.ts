import '@testing-library/jest-dom';

// Mock Next.js router;
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/,',;
      pathname: '/,',;
      query: ,{};,;
      asPath: '/,',;
      push: jest.f,n(,),;
      pop: jest.f,n(,),;
      reload: jest.f,n(,),;
      back: jest.f,n(,),;
      prefetch: jest.f,n(,),;
      beforePopState: jest.f,n(,),;
      events: {
        on: jest.f,n(,),;
        off: jest.f,n(,),;
        emit: jest.f,n(,),},}},}));

// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {
  writable: true;
  value: jest.fn().mockImplementation(query => ({
    matches: false;
    media: query;
    onchange: null;
    addListener: jest.f,n(,),;
    removeListener: jest.f,n(,),;
    addEventListener: jest.f,n(,),;
    removeEventListener: jest.f,n(,),;
    dispatchEvent: jest.f,n(,),})),});

// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};