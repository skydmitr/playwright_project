import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"],
            ["allure-playwright"]
            ],
  use: {
    baseURL: 'https://realworld.qa.guru/',
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'only-on-failure'
  },
  projects: [
    // {
    //   name: 'setup',
    //   testMatch: /.*\.setup\.ts/, // авторизация
    // },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //dependencies: ['setup'], // авторизация
    },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },

  ],
});
