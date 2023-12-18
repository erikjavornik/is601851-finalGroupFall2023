const { test, expect } = require('@playwright/test');

test('Check if "Classic_Cappuccino.png" is present on the page', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000/');

  // Check for an image with the specific src
  const image = await page.$(`img[src*="Classic_Cappuccino.png"]`);

  // Assert that the image is present
  expect(image).not.toBeNull();
});

test('Check if "Creative_Cup.png" is present on the page', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Creative_Cup.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
  });

  test('Check if "Chai_Latte.png" is present on the page', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Chai_Latte.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
  });