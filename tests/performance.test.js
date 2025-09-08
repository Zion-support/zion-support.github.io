
test('Performance test - Page load time', async ({ page }) => {
  const startTime = Date.now();
  await page.goto(/');
  const loadTime = Date.now() - startTime;
  // Expect page to load within 3 seconds;
  expect(loadTime).toBeLessThan(3000);
  // Check for performance metrics;

  const metrics = await page.evaluate(() => {
    return {
      loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart}

      consoleErrors.push(msg.text())}
  });
  await page.waitForLoadState(networkidle');
  expect(consoleErrors.length).toBe(0)});


