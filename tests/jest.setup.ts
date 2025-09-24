// Jest setup for jsdom environment
import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { jest } from '@jest/globals'
import { TextEncoder, TextDecoder } from 'util'


// Polyfill TextEncoder/TextDecoder for JSDOM
// Note: In jsdom these may be missing; assign Node's util versions if absent.
if (typeof (global as unknown as { TextEncoder?: unknown }).TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const util = require('util') as { TextEncoder: typeof TextEncoder; TextDecoder: typeof TextDecoder }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(global as any).TextEncoder = util.TextEncoder
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(global as any).TextDecoder = util.TextDecoder
}

// matchMedia mock for components using media queries
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()}))})

if (typeof URL.revokeObjectURL === 'undefined') {
	// @ts-ignore
	URL.revokeObjectURL = jest.fn()
}

// Minimal ResizeObserver mock
// @ts-ignore
global.ResizeObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
}
