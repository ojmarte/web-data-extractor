import puppeteer, { Browser, PuppeteerNodeLaunchOptions } from 'puppeteer';
import { defaultPuppeteerConfig } from './setup';

export const launchBrowser = async (config?: PuppeteerNodeLaunchOptions): Promise<Browser> => {
    return await puppeteer.launch({ ...defaultPuppeteerConfig, ...config });
};

export const closeBrowser = async (browser: Browser): Promise<void> => {
    await browser.close();
};
