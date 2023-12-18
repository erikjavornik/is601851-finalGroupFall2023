const { test, expect } = require('@playwright/test');

test('Check for about text 1 on the About page', async ({ page }) => {
  // Replace with the actual URL or path to your About page
  await page.goto('http://localhost:3000/about');

  // Replace with the actual text you are checking for
  const specificText = "Our cafe is a vibrant hub of unity";

  // Check if the text is present
  await expect(page.locator(`text=${specificText}`)).toBeVisible();
});

test('Check for about text 2 on the About page', async ({ page }) => {
    // Replace with the actual URL or path to your About page
    await page.goto('http://localhost:3000/about');
  
    // Replace with the actual text you are checking for
    const specificText = "Adjacent to lively farmers' markets, our cafe becomes a creative playground where customers craft unique drinks with fresh, local fruits and vegetables. ";
  
    // Check if the text is present
    await expect(page.locator(`text=${specificText}`)).toBeVisible();
});

test('Check for about text 3 on the About page', async ({ page }) => {
    // Replace with the actual URL or path to your About page
    await page.goto('http://localhost:3000/about');
  
    // Replace with the actual text you are checking for
    const specificText = "Our cafe is a true community gem, designed to be an enduring part of the neighborhood, thanks to owners who prioritize a lasting, welcoming space over profits.";
  
    // Check if the text is present
    await expect(page.locator(`text=${specificText}`)).toBeVisible();
  });