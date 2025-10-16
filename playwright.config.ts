import {defineConfig, devices} from '@playwright/test';
import path from "path";
import dotenv from "dotenv";

dotenv.config({path: path.resolve(__dirname, '.env')});

export default defineConfig({
    expect: {
        timeout: 20_000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['list'],
        ['html', {outputFolder: 'playwright-report', open: 'never'}],
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://paydo.com/',
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'paydo-ui-tests',
            testDir: 'src/tests/ui',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'api-tests',
            testDir: 'src/tests/api',
            use: {
                baseURL: process.env.API_URL,
            },
        }
    ],
});
