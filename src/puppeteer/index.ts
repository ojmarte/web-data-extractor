import { launchBrowser, closeBrowser } from './browser';
import { performPageActions } from './pageActions';
import { PuppeteerConfig } from '../types/puppeteerTypes';

export const startScraping = async (config: PuppeteerConfig): Promise<void> => {
    const browser = await launchBrowser();
    
    try {
        await performPageActions(browser, config);
    } catch (error) {
        console.error("Error during scraping:", error);
    } finally {
        await closeBrowser(browser);
    }
};
