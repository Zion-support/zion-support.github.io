import { test, expect } from '@playwright/test';

test('security headers are present', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.headers()['x-frame-options']).toBeDefined();
});