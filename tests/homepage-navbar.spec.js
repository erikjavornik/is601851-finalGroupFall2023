// tests/homepage-navbar.spec.js
const { test, expect } = require('@playwright/test');

test('Navbar should have an About link', async ({ page }) => {
  // Replace with the correct URL if your local development environment has a different one
  await page.goto('http://localhost:3000/');

  // Select the "About" link in the navbar and check if it is visible
  // The text content should match exactly, including capitalization
  const aboutLink = page.locator('text=About');
  await expect(aboutLink).toBeVisible();
});
