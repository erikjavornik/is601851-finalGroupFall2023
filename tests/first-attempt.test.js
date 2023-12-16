// tests/homepage-content.spec.js
const { test, expect } = require('@playwright/test');

test('Homepage should have the word "soothing"', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Check if the word "soothing" is present on the page
  await expect(page.locator('text=soothing')).toBeVisible();
});
