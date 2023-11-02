import { createPuppeteerRouter, Dataset } from 'crawlee';
import { performPageActions } from '../puppeteer/pageActions';
import { PuppeteerConfig } from '../types/puppeteerTypes';
import config from '../configs/sampleConfig.json';

export const router = createPuppeteerRouter();

router.use(async ({ page }) => {
    // This is for middlewares - functions that will be
    // executed on all routes, irrespective of label.
    // const title = await page.title()
    // console.log(title);
})

// router.addHandler('Games', async ({ page }) => {
//     const jsonString: PuppeteerConfig = await readJSONFile('../configs/sampleConfig.json');
//     performPageActions(page, jsonString);
//     // This handler will execute for all requests
//     // with the 'repository' label.
// });

router.addDefaultHandler(async ({ page, log }) => {
    // This handler will execute for requests
    const data: Array<any> = [];
    await performPageActions(page, config as PuppeteerConfig, log, data);
    
    // console.log(data);
    await Dataset.pushData(data);
});