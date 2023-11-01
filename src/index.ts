import { crawler } from './crawlee/index';

const initialUrls = [
    'https://www.pinnacle.com/es/',
    // Add more initial URLs as needed
];

initialUrls.forEach((url) => {
    crawler.run([url]);
});
