import { PuppeteerNodeLaunchOptions } from 'puppeteer';

export const defaultPuppeteerConfig: PuppeteerNodeLaunchOptions = {
    // Specify browser product, either 'chrome' or 'firefox'
    product: 'chrome',

    // Whether to run the browser in headless mode
    headless: true,

    // Path to a browser executable to run instead of the bundled one
    // executablePath: '/path/to/your/chrome',

    // Sets a default viewport for pages
    defaultViewport: {
        width: 1280,
        height: 720,
    },

    // Additional arguments to pass to the browser instance
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
    ],

    // Whether to pipe browser process stdout and stderr into process.stdout and process.stderr
    dumpio: false,

    // Slows down Puppeteer operations by the specified amount of milliseconds
    // Useful for debugging
    // slowMo: 50,

    // Maximum time in milliseconds to wait for the browser instance to start
    timeout: 30000,

    // Connect over a pipe instead of WebSocket
    pipe: false,

    // Additional experimental options
    // More details might be present in deeper documentation or actual codebase
    waitForInitialPage: true,
};
