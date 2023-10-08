import { CrawlerRequestResponse } from 'crawler';

export interface CrawlerConfig {
    maxConnections: number;
    rateLimit: number;
    userAgent: string;
    headers: Record<string, string>;
    proxy: string;
    retries: number;
    retryTimeout: number;
    timeout: number;
    callback: (error: Error | null, res: CrawlerRequestResponse, done: () => void) => void;
    queue: string[];
    encoding: null | string;
}