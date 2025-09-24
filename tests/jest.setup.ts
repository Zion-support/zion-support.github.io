// Jest setup for jsdom environment
import 'whatwg-fetch'
import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'
import { TextEncoder, TextDecoder } from 'util'

fetchMock.enableMocks()

beforeEach(() => {
	fetchMock.resetMocks()
})

// Polyfill TextEncoder/TextDecoder for JSDOM
// @ts-expect-error acceptable for tests
global.TextEncoder = TextEncoder
// @ts-expect-error acceptable for tests
global.TextDecoder = TextDecoder

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
