import Crawler from 'crawler';
import { crawlerConfig } from './setup';

const crawler = new Crawler(crawlerConfig);

export const startCrawling = (initialUrl: string): void => {
    crawler.queue(initialUrl);
}
