import { CrawlerRequestResponse } from 'crawler';
import { startScraping } from '../puppeteer/index';
import { PuppeteerConfig } from '../types/puppeteerTypes';
import sampleConfigData from '../configs/sampleConfig.json';

const puppeteerConfig: PuppeteerConfig = JSON.parse(JSON.stringify(sampleConfigData));

export const scraperAgent = async (error: Error | null, res: CrawlerRequestResponse, done: () => void): Promise<void> => {
    if (error) {
        console.error("Error encountered while crawling:", error);
        done();
        return;
    }

    const url = res.options.uri;

    if (!url) {
        console.warn("No URI found for the current request");
        done();
        return;
    }

    const updatedConfig: PuppeteerConfig = {
        ...puppeteerConfig,
        actions: puppeteerConfig.actions.map(action => 
            action.type === 'navigate' ? { ...action, url: url } : action
        )
    };
    
    try {
        await startScraping(updatedConfig);
    } catch (puppeteerError) {
        console.error("Error processing page with Puppeteer:", puppeteerError);
    }

    done();
}
