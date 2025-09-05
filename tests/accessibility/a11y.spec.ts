>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  test('contact form is accessible', async ({ page }) => {
    await page.goto('/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;);
    
    expect(accessibilityScanResults.violations).toEqual([])});

  test('has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    const h1 = await page.locator('h1').count(;);
    const h2 = await page.locator('h2').count(;);
    const h3 = await page.locator('h3').count(;);
    
    expect(h1).toBeGreaterThan(0);
    expect(h2).toBeGreaterThanOrEqual(0);
    expect(h3).toBeGreaterThanOrEqual(0)});

  test('forms have proper labels', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = await page.locator('input, textarea, select').count(;);
    const labels = await page.locator('label').count(;);
    
    expect(labels).toBeGreaterThanOrEqual(inputs)});

  test('has proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page };);
      .withTags(['color-contrast']);
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([])});

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation;
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to navigate without errors;
    await expect(page.locator(':focus')).toBeVisible()})});
import { test,expect } from '@playwright/test'; import AxeBuilder from '@axe-core/playwright'; test.describe('Accessibility Tests',() => { test('homepage is accessible',async ({ page }) => { await page.goto('/'); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test('contact form is accessible',async ({ page }) => { await page.goto('/contact'); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test('has proper heading hierarchy',async ({ page }) => { await page.goto('/'); const h1 = await page.locator('h1').count(;); const h2 = await page.locator('h2').count(;); const h3 = await page.locator('h3').count(;); expect(h1).toBeGreaterThan(0); expect(h2).toBeGreaterThanOrEqual(0); expect(h3).toBeGreaterThanOrEqual(0)}); test('forms have proper labels',async ({ page }) => { await page.goto('/contact'); const inputs = await page.locator('input,textarea,select').count(;); const labels = await page.locator('label').count(;); expect(labels).toBeGreaterThanOrEqual(inputs)}); test('has proper color contrast',async ({ page }) => { await page.goto('/'); const accessibilityScanResults = await new AxeBuilder({ page };); .withTags(['color-contrast']); .analyze(); expect(accessibilityScanResults.violations).toEqual([])}); test('keyboard navigation works',async ({ page }) => { await page.goto('/'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await expect(page.locator(':focus')).toBeVisible()})});
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
export default function A11y.spec({ }: A11y.specProps) {
  return (
    <div>
      <h1>A11y.spec</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
