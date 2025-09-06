import { test, expect } from '@playwright/test'
test.describe('Performance Tests'
  test('homepage loads within 3 seconds'
    await page.goto('/'
    await page.waitForLoadState('networkidle'
  test('LCP is under 2.5 seconds'
    await page.goto('/'
          resolve(lastEntry.startTime)}).observe({ "entryTypes"
          resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ "entryTypes"
          resolve(clsValue)}).observe({ "entryTypes"
          resolve(clsValue)}).observe({ "entryTypes"