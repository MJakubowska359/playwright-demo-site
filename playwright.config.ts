import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://demo.automationtesting.in',
    actionTimeout: 0,
    trace: 'retain-on-failure',
    video: 'off',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});
