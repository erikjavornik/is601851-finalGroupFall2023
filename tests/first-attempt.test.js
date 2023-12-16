// tests/homepage-content.spec.js
const { test, expect } = require('@playwright/test');

test('Homepage should display "soothing" from Markdown file', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Check for the presence of the word "soothing" on the page
  await expect(page.locator('text=soothing')).toBeVisible();
});
