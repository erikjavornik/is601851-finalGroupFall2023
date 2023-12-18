const { test, expect } = require('@playwright/test');

test('Check for Kevin\'s testimonial with quotes on the homepage', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // A unique portion of the testimonial text
  const partialText = "I'm excited to share my daily ritual with you";
  const name = "Kevin";

  // Assert that the partial text is present and visible on the page
  await expect(page.locator(`text=${partialText}`)).toBeVisible({ timeout: 10000 });

  // Additionally, check if the text "Kevin" is also present
  await expect(page.locator(`text=${name}`)).toBeVisible({ timeout: 10000 });
});
