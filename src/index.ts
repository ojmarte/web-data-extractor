import { crawler } from './crawlee/index';

const initialUrls = [
    'https://example.com/page1',
    'https://example.com/page2',
    // Add more initial URLs as needed
];

initialUrls.forEach((url) => {
    crawler.run([url]);
});
