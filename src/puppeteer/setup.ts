import { LaunchOptions } from 'puppeteer';

export const defaultPuppeteerConfig: LaunchOptions = {
    product: 'chrome',
    waitForInitialPage: true,
    timeout: 30000,
    pipe: false,
    headless: 'new',
    defaultViewport: {
        width: 1280,
        height: 800,
    },
    // ... any other configurations like timeout, args, etc.
};
