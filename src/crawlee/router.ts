import { createPuppeteerRouter } from 'crawlee';
import { performPageActions } from '../puppeteer/pageActions';
import { PuppeteerConfig } from '../types/puppeteerTypes';
import { readJSONFile } from '../utils/readJSONFile';

export const router = createPuppeteerRouter();

router.use(async ({ page }) => {
    // This is for middlewares - functions that will be
    // executed on all routes, irrespective of label.
    const title = await page.title()
    console.log(title);
})

router.addHandler('repository', async ({ page }) => {
    // const jsonString: PuppeteerConfig = await readJSONFile('../configs/sampleConfig.json');
    // performPageActions(page, jsonString);
    // This handler will execute for all requests
    // with the 'repository' label.
});

router.addDefaultHandler(async ({ page }) => {
    // This handler will execute for requests
    // that don't have a label.
    // const jsonString: PuppeteerConfig = await readJSONFile('../configs/sampleConfig.json');
    // performPageActions(page, jsonString);
});