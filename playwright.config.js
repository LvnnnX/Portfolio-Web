// Playwright configuration for visual regression tests
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'default',
      testDir: './tests',
    },
  ],
  // See https://playwright.dev/docs/test-configuration
  reporter: [['html', { open: 'never' }]],
};

module.exports = config;
