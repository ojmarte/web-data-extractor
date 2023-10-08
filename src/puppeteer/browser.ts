import puppeteer, { Browser, LaunchOptions } from 'puppeteer';
import { defaultPuppeteerConfig } from './setup';

export const launchBrowser = async (config?: LaunchOptions): Promise<Browser> => {
    return await puppeteer.launch({ ...defaultPuppeteerConfig, ...config });
};

export const closeBrowser = async (browser: Browser) => {
    await browser.close();
};
