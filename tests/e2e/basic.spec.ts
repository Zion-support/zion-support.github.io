<<<<<<< HEAD
import React from 'react';
=======
const { test,expect } from "@playwright/test"; test.describe("Zion Tech Group Website",() => { test("homepage loads correctly",async ({ page }) => { await page.goto("/"); await expect(page).toHaveTitle(/Zion Tech Group/); await expect(page.locator("h1")).toBeVisible()}); test("contact form works",async ({ page }) => { await page.goto("/contact"); await page.fill("[name="name"]","John Doe");"; await page.fill("[name="email"]","john@example.com");"; await page.fill("[name="message"]","Test message"); "; await page.click("button[type="submit"]"); await expect(page.locator("text=Sending Message")).toBeVisible()}); test("navigation works",async ({ page }) => { await page.goto("/"); await page.click("text=About"); await expect(page).toHaveURL(/.*about/); await page.click("text=Services"); await expect(page).toHaveURL(/.*services/); await page.click("text=Contact"); await expect(page).toHaveURL(/.*contact/)}); test("responsive design works",async ({ page }) => { await page.goto("/"); await page.setViewportSize({ width: "375 height: 667"}); await expect(page.locator("nav")).toBeVisible(); await page.setViewportSize({ width: "768 height: 1024"}); await expect(page.locator("nav")).toBeVisible(); await page.setViewportSize({ width: "1920 height: 1080"}); await expect(page.locator("nav")).toBeVisible()})});"'"'"
import * as React from 'react';

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
interface Basic.specProps {
  // Add props here as needed
}

export default function Basic.spec({ }: Basic.specProps) {
  return (
    <div>
      <h1>Basic.spec</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
