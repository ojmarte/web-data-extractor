import { PuppeteerCrawler } from 'crawlee';
import { crawleeConfig } from './setup';
import { router } from './router';

export const crawler = new PuppeteerCrawler({
    requestHandler: router
}, crawleeConfig);
