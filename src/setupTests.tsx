'use client'
/**
 * Jest setup file for testing environment
 */
import React from 'react'
import '@testing-library/jest-dom'
// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder as any
global.TextDecoder = TextDecoder as any
// Suppress jsdom navigation warnings
const originalConsoleError = console.error
console.error = ($2) => {
  $3
};
  const message = $2;
