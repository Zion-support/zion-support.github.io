import { test, expect } from '@playwright/test';
test.describe('Performance Tests', () => {
  test('homepage loads within 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('LCP is under 2.5 seconds', async ({ page }) => {
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
    expect(lcp).toBeLessThan(2500);

  test('FID is under 100ms', async ({ page }) => {
    const fid = await page.evaluate(() => {
          const firstEntry = entries[0];
          resolve(firstEntry.processingStart - firstEntry.startTime);
        }).observe({ entryTypes: ['first-input'] });
    expect(fid).toBeLessThan(100);

  test('CLS is under 0.1', async ({ page }) => {
    const cls = await page.evaluate(() => {
        let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
    expect(cls).toBeLessThan(0.1);
