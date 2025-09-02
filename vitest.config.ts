import { defineConfig } from, vitest/config'
import path from
  'node: path'

export default defineConfig({
  resolve: {
    alias: {
  '@: path.resolve(__dirname, './src'), '@/pages': path.resolve(__dirname, , ./src/pages')}}, test: {
    environment:
  'jsdom, setupFiles:
  './tests/setup.ts', globals: true, coverage: {
ursor/automate-test-fix-improve-and-merge-code-48f3
      ]}}})