import { Configuration } from 'crawlee';

export const crawleeConfig = new Configuration({
    // Set the 'persistStateIntervalMillis' option to 10 seconds
    persistStateIntervalMillis: 10_000,
});
