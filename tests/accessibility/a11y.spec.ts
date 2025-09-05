<<<<<<< HEAD
const { test,expect } from "@playwright/test"; import AxeBuilder from "@axe-core/playwright"; test.describe("Accessibility Tests",() => { test("homepage is accessible",async ({ page }) => { await page.goto("/"); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test("contact form is accessible",async ({ page }) => { await page.goto("/contact"); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test("has proper heading hierarchy",async ({ page }) => { await page.goto("/"); const h1 = await page.locator("h1").count(;); const h2 = await page.locator("h2").count(;); const h3 = await page.locator("h3").count(;); expect(h1).toBeGreaterThan(0); expect(h2).toBeGreaterThanOrEqual(0); expect(h3).toBeGreaterThanOrEqual(0)}); test("forms have proper labels",async ({ page }) => { await page.goto("/contact"); const inputs = await page.locator("input,textarea,select").count(;); const labels = await page.locator("label").count(;); expect(labels).toBeGreaterThanOrEqual(inputs)}); test("has proper color contrast",async ({ page }) => { await page.goto("/"); const accessibilityScanResults = await new AxeBuilder({ page };); .withTags(["color-contrast"]); .analyze(); expect(accessibilityScanResults.violations).toEqual([])}); test("keyboard navigation works",async ({ page }) => { await page.goto("/"); await page.keyboard.press("Tab"); await page.keyboard.press("Tab"); await page.keyboard.press("Tab"); await expect(page.locator(":focus")).toBeVisible()})});''"
import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
>>>>>>> pr-11914
=======
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
>>>>>>> pr-11913

interface A11y.specProps {
  // Add props here as needed
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
interface A11y.specProps {
  // Add props here as needed
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
interface A11y.specProps {
  // Add props here as needed
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> pr-11913
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
<<<<<<< HEAD
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
>>>>>>> pr-11914
import { test,expect } from '@playwright/test'; import AxeBuilder from '@axe-core/playwright'; test.describe('Accessibility Tests',() => { test('homepage is accessible',async ({ page }) => { await page.goto('/'); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test('contact form is accessible',async ({ page }) => { await page.goto('/contact'); const accessibilityScanResults = await new AxeBuilder({ page }).analyze(;); expect(accessibilityScanResults.violations).toEqual([])}); test('has proper heading hierarchy',async ({ page }) => { await page.goto('/'); const h1 = await page.locator('h1').count(;); const h2 = await page.locator('h2').count(;); const h3 = await page.locator('h3').count(;); expect(h1).toBeGreaterThan(0); expect(h2).toBeGreaterThanOrEqual(0); expect(h3).toBeGreaterThanOrEqual(0)}); test('forms have proper labels',async ({ page }) => { await page.goto('/contact'); const inputs = await page.locator('input,textarea,select').count(;); const labels = await page.locator('label').count(;); expect(labels).toBeGreaterThanOrEqual(inputs)}); test('has proper color contrast',async ({ page }) => { await page.goto('/'); const accessibilityScanResults = await new AxeBuilder({ page };); .withTags(['color-contrast']); .analyze(); expect(accessibilityScanResults.violations).toEqual([])}); test('keyboard navigation works',async ({ page }) => { await page.goto('/'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await expect(page.locator(':focus')).toBeVisible()})});
=======
>>>>>>> pr-11913
export default function A11y.spec({ }: A11y.specProps) {
  return (
    <div>
      <h1>A11y.spec</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
