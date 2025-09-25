// Vitest setup: minimal, valid TypeScript setup for RTL and jest-compat
import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// next/router mock (basic shape used in tests)
vi.mock('next/router', () => ({
	useRouter: () => ({
		route: '/',
		pathname: '/',
		query: {},
		asPath: '/',
		push: vi.fn(),
		pop: vi.fn(),
		reload: vi.fn(),
		back: vi.fn(),
		prefetch: vi.fn(),
		beforePopState: vi.fn(),
		events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() },
	})
}));

// matchMedia mock for components relying on it
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

// Observers shims
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IntersectionObserver = class IntersectionObserver {
	disconnect() { /* noop */ }
	observe() { /* noop */ }
	unobserve() { /* noop */ }
} as unknown as IntersectionObserver;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).ResizeObserver = class ResizeObserver {
	disconnect() { /* noop */ }
	observe() { /* noop */ }
	unobserve() { /* noop */ }
} as unknown as ResizeObserver;

// Ensure React Testing Library cleans up between tests
afterEach((): void => {
	cleanup();
	vi.restoreAllMocks();
});

// Jest-compatibility shim for legacy calls
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).jest = {
	fn: vi.fn.bind(vi),
	mock: vi.mock.bind(vi),
	spyOn: vi.spyOn.bind(vi),
	useFakeTimers: vi.useFakeTimers.bind(vi),
	useRealTimers: vi.useRealTimers.bind(vi),
	advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
	runAllTimers: vi.runAllTimers.bind(vi),
	resetAllMocks: vi.resetAllMocks.bind(vi),
	restoreAllMocks: vi.restoreAllMocks.bind(vi),
	clearAllMocks: vi.clearAllMocks.bind(vi),
};