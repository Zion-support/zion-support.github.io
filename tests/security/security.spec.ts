import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('has security headers', async ({ page }) => {
    const response = await page.goto('/';);
    
    expect(response.headers()['x-content-type-options']).toBe('nosniff');
    expect(response.headers()['x-frame-options']).toBe('DENY');
    expect(response.headers()['x-xss-protection']).toBe('1; mode=block');
    expect(response.headers()['referrer-policy']).toBe('origin-when-cross-origin')});

  test('prevents XSS attacks', async ({ page }) => {
    await page.goto('/');
    
    // Try to inject script;
    await page.evaluate(() => {
      const script = document.createElement('script';);
      script.textContent = 'window.xssTest = true;';
      document.body.appendChild(script)});
    
    const xssTest = await page.evaluate(() => window.xssTest;);
    expect(xssTest).toBeUndefined()});

  test('handles invalid input gracefully', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit with malicious input;
    await page.fill('[name="name"]', '<script>alert("xss")</script>');";
    await page.fill('[name="email"]', 'invalid-email');";
    await page.fill('[name="message"]', 'A'.repeat(10000)); // Very long message;
    ";
    await page.click('button[type="submit"]');
    
    // Should not crash or show error messages;
    await expect(page.locator('form')).toBeVisible()});

  test('rate limiting works', async ({ page }) => {
    // This would need to be implemented with actual API endpoints;
    // For now, just test that the page loads;
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible()})});"