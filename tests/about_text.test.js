const { test, expect } = require('@playwright/test');

test('Check for about text 1 on the About page', async ({ page }) => {
  // Replace with the actual URL or path to your About page
  await page.goto('http://localhost:3000/about');

  // Replace with the actual text you are checking for
  const specificText = "Our cafe is a vibrant hub of unity";

  // Check if the text is present
  await expect(page.locator(`text=${specificText}`)).toBeVisible();
});

