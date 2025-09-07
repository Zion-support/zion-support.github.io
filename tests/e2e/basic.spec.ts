import { test, expect } from '@playwright/test';'

test('basic page load', async ({ page }) => {'
  }
  await page.goto('/');'
  await expect(page).toHaveTitle(/Zion Tech Group/);
});

test('navigation works', async ({ page }) => {'
  }
  await page.goto('/');'
  
  // Test navigation links,
await page.click('text=Services');'
  await expect(page).toHaveURL(/.*services/);
  
  await page.click('text=About');'
  await expect(page).toHaveURL(/.*about/);
  
  await page.click('text=Contact');'
  await expect(page).toHaveURL(/.*contact/);
});

test('contact form submission', async ({ page }) => {'
  }
  await page.goto('/contact');'
  
  // Fill out the contact form,
await page.fill('input[name='name']', 'Test User');'
  await page.fill('input[name='email']', 'test@example.com');'
  await page.fill('textarea[name='message']', 'This is a test message');'
  
  // Submit the form,
await page.click('button[type='submit']');'
  
  // Check for success message or redirect,
await expect(page.locator('text=Thank you')).toBeVisible();'
});