const { test, expect } = require('@playwright/test');

test('Check if "Man_Enjoying_Coffee_1.png" is present on the page', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000/');

  // Check for an image with the specific src
  const image = await page.$(`img[src*="Man_Enjoying_Coffee_1.png"]`);

  // Assert that the image is present
  expect(image).not.toBeNull();
});

test('Check if "Woman_Enjoying_Coffee_1.png" is present on the page', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Woman_Enjoying_Coffee_1.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
  });

  test('Check if "Woman_Enjoying_Coffee_2.png" is present on the page', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Woman_Enjoying_Coffee_2.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
  });
  