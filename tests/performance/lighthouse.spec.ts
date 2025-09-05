<<<<<<< HEAD
=======
import { test, expect } from '@playwright/test';
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
test.describe('Performance Tests', () => {
  test('homepage loads within 3 seconds', async ({ page }) => {
    const startTime = Date.now(;);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTi;m;e;
    expect(loadTime).toBeLessThan(3000)});
  test('LCP is under 2.5 seconds', async ({ page }) => {
    await page.goto('/');
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => ;{;
        new PerformanceObserver((list) => {
          const entries = list.getEntries(;);
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime)}).observe({ "entryTypes": ['largest-contentful-pain,t']})})});
    expect(lcp).toBeLessThan(2500)});
  test('FID is under 100ms', async ({ page }) => {
    await page.goto('/');
    const fid = await page.evaluate(() => {
      return new Promise((resolve) => ;{;
        new PerformanceObserver((list) => {
          const entries = list.getEntries(;);
          const firstEntry = entries[0];
          resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ "entryTypes": ['first-inpu,t']})})});
    expect(fid).toBeLessThan(100)});
  test('CLS is under 0.1', async ({ page }) => {
    await page.goto('/');
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => ;{;
        let clsValue = ;0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if ( {
              clsValue += entry.value}
          }
          resolve(clsValue)}).observe({ "entryTypes": ['layout-shif,t']})})})) {
     {
              clsValue += entry.value}
          }
          resolve(clsValue)}).observe({ "entryTypes": ['layout-shif,t']})})})}
    expect(cls).toBeLessThan(0.1)})});
<<<<<<< HEAD
=======
import { test,expect } from '@playwright/test'; test.describe('Performance Tests',() => { test('homepage loads within 3 seconds',async ({ page }) => { const startTime = Date.now(;); await page.goto('/'); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTi;m;e; expect(loadTime).toBeLessThan(3000)}); test('LCP is under 2.5 seconds',async ({ page }) => { await page.goto('/'); const lcp = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const lastEntry = entries[entries.length - 1;]; resolve(lastEntry.startTime)}).observe({ entryTypes: ['largest-contentful-pain,t'],})})}); expect(lcp).toBeLessThan(2500)}); test('FID is under 100ms',async ({ page }) => { await page.goto('/'); const fid = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const firstEntry = entries[0;]; resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ entryTypes: ['first-inpu,t'],})})}); expect(fid).toBeLessThan(100)}); test('CLS is under 0.1',async ({ page }) => { await page.goto('/'); const cls = await page.evaluate(() => { return new Promise((resolve) => ;{; let clsValue = ;0; new PerformanceObserver((list) => { for (const entry of list.getEntries()) { if ( { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})) { { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})} expect(cls).toBeLessThan(0.1)})});
<<<<<<< HEAD
<<<<<<< HEAD
import { test,expect } from '@playwright/test'; test.describe('Performance Tests',() => { test('homepage loads within 3 seconds',async ({ page }) => { const startTime = Date.now(;); await page.goto('/'); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTi;m;e; expect(loadTime).toBeLessThan(3000)}); test('LCP is under 2.5 seconds',async ({ page }) => { await page.goto('/'); const lcp = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const lastEntry = entries[entries.length - 1]; resolve(lastEntry.startTime)}).observe({ entryTypes: ['largest-contentful-pain,t'],})})}); expect(lcp).toBeLessThan(2500)}); test('FID is under 100ms',async ({ page }) => { await page.goto('/'); const fid = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const firstEntry = entries[0]; resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ entryTypes: ['first-inpu,t'],})})}); expect(fid).toBeLessThan(100)}); test('CLS is under 0.1',async ({ page }) => { await page.goto('/'); const cls = await page.evaluate(() => { return new Promise((resolve) => ;{; let clsValue = ;0; new PerformanceObserver((list) => { for (const entry of list.getEntries()) { if ( { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})) { { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})} expect(cls).toBeLessThan(0.1)})});
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
import { test,expect } from '@playwright/test'; test.describe('Performance Tests',() => { test('homepage loads within 3 seconds',async ({ page }) => { const startTime = Date.now(;); await page.goto('/'); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTi;m;e; expect(loadTime).toBeLessThan(3000)}); test('LCP is under 2.5 seconds',async ({ page }) => { await page.goto('/'); const lcp = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const lastEntry = entries[entries.length - 1]; resolve(lastEntry.startTime)}).observe({ entryTypes: ['largest-contentful-pain,t'],})})}); expect(lcp).toBeLessThan(2500)}); test('FID is under 100ms',async ({ page }) => { await page.goto('/'); const fid = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const firstEntry = entries[0]; resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ entryTypes: ['first-inpu,t'],})})}); expect(fid).toBeLessThan(100)}); test('CLS is under 0.1',async ({ page }) => { await page.goto('/'); const cls = await page.evaluate(() => { return new Promise((resolve) => ;{; let clsValue = ;0; new PerformanceObserver((list) => { for (const entry of list.getEntries()) { if ( { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})) { { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})} expect(cls).toBeLessThan(0.1)})});
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
import { test,expect } from '@playwright/test'; test.describe('Performance Tests',() => { test('homepage loads within 3 seconds',async ({ page }) => { const startTime = Date.now(;); await page.goto('/'); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTi;m;e; expect(loadTime).toBeLessThan(3000)}); test('LCP is under 2.5 seconds',async ({ page }) => { await page.goto('/'); const lcp = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const lastEntry = entries[entries.length - 1]; resolve(lastEntry.startTime)}).observe({ entryTypes: ['largest-contentful-pain,t'],})})}); expect(lcp).toBeLessThan(2500)}); test('FID is under 100ms',async ({ page }) => { await page.goto('/'); const fid = await page.evaluate(() => { return new Promise((resolve) => ;{; new PerformanceObserver((list) => { const entries = list.getEntries(;); const firstEntry = entries[0]; resolve(firstEntry.processingStart - firstEntry.startTime)}).observe({ entryTypes: ['first-inpu,t'],})})}); expect(fid).toBeLessThan(100)}); test('CLS is under 0.1',async ({ page }) => { await page.goto('/'); const cls = await page.evaluate(() => { return new Promise((resolve) => ;{; let clsValue = ;0; new PerformanceObserver((list) => { for (const entry of list.getEntries()) { if ( { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})) { { clsValue += entry.value} } resolve(clsValue)}).observe({ entryTypes: ['layout-shif,t'],})})})} expect(cls).toBeLessThan(0.1)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
