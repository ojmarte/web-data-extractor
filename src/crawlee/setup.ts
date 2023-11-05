import { Configuration } from 'crawlee';

export const crawleeConfig = new Configuration({
    // Set the 'persistStateIntervalMillis' option to 10 seconds
    // persistStateIntervalMillis: 10_000,
    // defaultBrowserPath: '/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    headless: false
});

// "config": {
//     "actions": [
//       {
//         "type": "click",
//         "selector": "a[data-gtm-id]",
//         "duration": 6000
//       }
//     ]
//   }