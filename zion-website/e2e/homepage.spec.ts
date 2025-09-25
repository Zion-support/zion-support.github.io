import { test, expect } from '@playwright/test'
test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  // Check if the page title is correct
  await expect(page).toHaveTitle(/Zion Tech Group/)
  // Check if main navigation is present
  await expect(page.locator('nav')).toBeVisible()
  // Check if hero section is present
  await expect(page.locator('h1')).toBeVisible()})
test('navigation works correctly', async ({ page }) => {
  await page.goto('/')
  // Test navigation to services page
  await page.click('a[href="/services"]')
  await expect(page).toHaveURL(/.*services/)
  // Test navigation to contact page
  await page.click('a[href="/contact"]')
  await expect(page).toHaveURL(/.*contact/)})
test('contact form works', async ({ page }) => {
  await page.goto('/contact')
  // Fill out the contact form
  await page.fill('input[name="name"]Test User')
  await page.fill('input[name="email"]test@example.com')
  await page.fill('textarea[name="message"]This is a test message')
  // Submit the form
  await page.click('button[type="submit"]')
  // Check for success message
  await expect(page.locator('.success-message')).toBeVisible()})