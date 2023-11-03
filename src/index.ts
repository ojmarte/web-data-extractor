import { crawler } from './crawlee/index';

const initialUrls = [
    'https://www.pinnacle.com/en/',
    // Add more initial URLs as needed
];

initialUrls.forEach((url) => {
    crawler.run([url]);
});
