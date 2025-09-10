import { test, expect } from '@playwright/test';

test('basic functionality works', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Zion Tech Group/);
});