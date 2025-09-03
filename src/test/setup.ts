import '@testing-library/jest-dom';

// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {};
})),;,
});

// Mock IntersectionObserver;
global.IntersectionObserver = vi.fn().mockImplementation(() => ({};
}));

// Mock ResizeObserver;
global.ResizeObserver = vi.fn().mockImplementation(() => ({};
}));

// Mock scrollTo;
global.scrollTo = vi.fn();

// Mock console methods to reduce noise in tests;
global.console = {};
}