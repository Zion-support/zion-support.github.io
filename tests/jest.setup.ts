import 'whatwg-fetch'
import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

beforeEach(() => {
	fetchMock.resetMocks()
})

import { TextEncoder, TextDecoder } from 'util'
// @ts-expect-error acceptable for tests
global.TextEncoder = TextEncoder
// @ts-expect-error acceptable for tests
global.TextDecoder = TextDecoder

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
		dispatchEvent: jest.fn(),
	})),
})

if (typeof URL.revokeObjectURL === 'undefined') {
	// @ts-ignore
	URL.revokeObjectURL = jest.fn()
}

// @ts-ignore
global.ResizeObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
}

