import { crawler } from './crawlee/index';

const initialUrls = [
    'https://github.com/topics/javascript',
    // Add more initial URLs as needed
];

initialUrls.forEach((url) => {
    crawler.run([url]);
});
