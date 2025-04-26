import { test } from '@playwright/test';

test('Launch Elsevier site', async ({ page }) => {
  // Launch the site
  await page.goto('https://www.elsevier.com');

  console.log('Site launched successfully');
});