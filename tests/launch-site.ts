import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Launch the site
  await page.goto('https://www.elsevier.com');

  console.log('Site launched successfully');

  // Close the browser
  await browser.close();
})();