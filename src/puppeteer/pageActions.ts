import { Browser } from 'puppeteer';
import { PuppeteerConfig } from '../types/puppeteerTypes';
import {
    navigateTo,
    clickElement,
    typeIntoElement,
    scrollToBottom,
    extractAttribute,
    wait,
    selectDropdownValue,
    captureScreenshot,
    capturePDF,
    hoverOverElement,
    setCheckbox,
    extractText,
    extractTextList,
    extractInputValue,
    extractInnerHTML
} from './coreActions';

export const performPageActions = async (browser: Browser, config: PuppeteerConfig): Promise<void> => {
  const page = await browser.newPage();
  
  for (const action of config.actions) {
    switch (action.type) {
        case 'navigate':
            if (action.url) {
                await navigateTo(page, action.url);
            }
            break;

        case 'click':
            if (action.selector) {
                await clickElement(page, action.selector);
            }
            break;

        case 'type':
            if (action.selector && action.text) {
                await typeIntoElement(page, action.selector, action.text);
            }
            break;

        case 'scrollToBottom':
            await scrollToBottom(page);
            break;

        case 'extractAttribute':
            if (action.selector && action.attribute) {
                const attributeValue = await extractAttribute(page, action.selector, action.attribute);
                // Do something with attributeValue, perhaps save it to a variable, log it, etc.
                console.log(attributeValue);
            }
            break;

        case 'wait':
            if (action.duration) {
                await wait(page, action.duration);
            }
            break;

        case 'selectDropdown':
            if (action.selector && action.value) {
                await selectDropdownValue(page, action.selector, action.value);
            }
            break;

        case 'screenshot':
            if (action.path) {
                await captureScreenshot(page, action.path);
            }
            break;

        case 'pdf':
            if (action.path) {
                await capturePDF(page, action.path);
            }
            break;

        case 'hover':
            if (action.selector) {
                await hoverOverElement(page, action.selector);
            }
            break;

        case 'setCheckbox':
            if (action.selector && typeof action.checked !== 'undefined') {
                await setCheckbox(page, action.selector, action.checked);
            }
            break;

        case 'extractText':
            if (action.selector) {
                const text = await extractText(page, action.selector);
                // You can store or log the extracted text as needed
                console.log(text);
            }
            break;

        case 'extractTextList':
            if (action.selector) {
                const texts = await extractTextList(page, action.selector);
                // You can store or log the extracted texts as needed
                console.log(texts);
            }
            break;

        case 'extractInputValue':
            if (action.selector) {
                const inputValue = await extractInputValue(page, action.selector);
                // You can store or log the extracted input value as needed
                console.log(inputValue);
            }
            break;

        case 'extractInnerHTML':
            if (action.selector) {
                const innerHTML = await extractInnerHTML(page, action.selector);
                // You can store or log the extracted inner HTML as needed
                console.log(innerHTML);
            }
            break;

      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
  }

  await page.close();
};
