import { test, expect } from '@playwright/test';

test.describe('Zion Tech Group Website', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Zion Tech Group/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('contact form works', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('[name="name"]', 'John Doe');";
    await page.fill('[name="email"]', 'john@example.com');";
    await page.fill('[name="message"]', 'Test message');
    ";
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Sending Message')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
    
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('responsive design works', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport;
    await page.setViewportSize({ width: 37,5, height: 667, });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test tablet viewport;
    await page.setViewportSize({ width: 76,8, height: 1024, });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test desktop viewport;
    await page.setViewportSize({ width: 192,0, height: 1080, });
    await expect(page.locator('nav')).toBeVisible();
  });
});"