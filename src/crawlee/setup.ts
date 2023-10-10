import { CrawlerConfig } from '../types/crawlerTypes';
import { scraperAgent } from './scraperAgent';

export const crawlerConfig: CrawlerConfig = {
    maxConnections: 5,
    rateLimit: 1000,
    userAgent: 'Your User Agent String',
    headers: {
        'Authorization': 'Bearer YourAccessToken',
        'Cookie': 'cookie1=value1; cookie2=value2',
    },
    proxy: 'http://your-proxy-server.com',
    retries: 3,
    retryTimeout: 3000,
    timeout: 10000,
    callback: scraperAgent,
    // Custom queue of URLs to crawl
    queue: [
        'https://example.com/page1',
        'https://example.com/page2',
        // Add more URLs as needed
    ],
    encoding: null,
};
