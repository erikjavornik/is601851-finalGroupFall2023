const { test, expect } = require('@playwright/test');

test('Check if "Unity2_1.png" is displayed on the page', async ({ page }) => {
  // Replace with the URL of the page where the image should be displayed
  await page.goto('http://localhost:3000/about');

  // Check for an image with the specific src
  const image = await page.$(`img[src*="Unity2_1.png"]`);

  // Assert that the image is present
  expect(image).not.toBeNull();
});

test('Check if "Creative_1.png" is displayed on the page', async ({ page }) => {
    // Replace with the URL of the page where the image should be displayed
    await page.goto('http://localhost:3000/about');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Creative_1.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
});

  test('Check if "Mountain_1.png" is displayed on the page', async ({ page }) => {
    // Replace with the URL of the page where the image should be displayed
    await page.goto('http://localhost:3000/about');
  
    // Check for an image with the specific src
    const image = await page.$(`img[src*="Mountain_1.png"]`);
  
    // Assert that the image is present
    expect(image).not.toBeNull();
});