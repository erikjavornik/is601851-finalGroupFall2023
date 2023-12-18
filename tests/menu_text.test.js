const { test, expect } = require('@playwright/test');

test('Check for specific text on the main page', async ({ page }) => {
  // Navigate to the main page
  await page.goto('http://localhost:3000');

  // The specific text to check for
  const specificText = "A harmonious blend of rich espresso and velvety milk foam, this cappucino is a true coffee lover's delight.";

  // Assert that the specific text is present and visible on the page
  await expect(page.locator(`text=${specificText}`)).toBeVisible();
});

test('Check for another specific text on the main page', async ({ page }) => {
    // Navigate to the main page
    await page.goto('http://localhost:3000');
  
    // The specific text to check for
    const specificText = "Right next to the market, we offer personalized fruit drinks. Pick your fruits, and we'll create a unique, refreshing cup just for you.";
  
    // Assert that the specific text is present and visible on the page
    await expect(page.locator(`text=${specificText}`)).toBeVisible();
  });