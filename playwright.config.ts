import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [
    // This will generate an HTML report in the 'playwright-report' folder
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
