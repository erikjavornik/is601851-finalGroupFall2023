const { test, expect } = require('@playwright/test');

test('Navbar "Home" button navigation test', async ({ page }) => {
  // Navigate to a different page or the homepage itself
  await page.goto('http://localhost:3000/about'); // Replace '/about' with an appropriate path

  // Click on the "Home" button in the navbar
  await page.click('text=Home');

  // Check if the URL is the homepage URL
  await expect(page).toHaveURL('http://localhost:3000/');

  // Alternatively, if there's unique content or a unique element on the homepage, assert its presence
  // await expect(page.locator('unique-homepage-element-selector')).toBeVisible();
});
