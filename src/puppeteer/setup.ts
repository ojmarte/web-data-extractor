import { LaunchOptions } from 'puppeteer';

export const defaultPuppeteerConfig: LaunchOptions = {
    headless: true,
    defaultViewport: {
        width: 1280,
        height: 800,
    },
    // ... any other configurations like timeout, args, etc.
};
