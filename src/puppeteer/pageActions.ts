import { Page, ElementHandle } from 'puppeteer';
import { PuppeteerConfig } from '../types/puppeteerTypes';
import * as core from './coreActions';

export type StringIndexedObject = {
    [key: string]: any;
};

export const performPageActions = async (page: Page | ElementHandle<Element>, config: PuppeteerConfig, log?: any, data?: Array<any>): Promise<void> => {
    const obj: StringIndexedObject = {};
  for (const action of config.actions) {
    switch (action.type) {
        case 'navigate':
            log.info(`${action.type}: ${action.selector}`)
            if (action.url && page instanceof Page) {
                await core.navigateTo(page, action.url);
            }
            break;

        case 'click':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && page instanceof Page) {
                await core.clickElement(page, action.selector);
            }
            break;

        case 'type':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && action.text && page instanceof Page) {
                await core.typeIntoElement(page, action.selector, action.text);
            }
            break;

        case 'scrollToBottom':
            log.info(`${action.type}: ${action.selector}`)
            if (page instanceof Page) await core.scrollToBottom(page);
            break;

        case 'extractAttribute':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && action.attribute && page instanceof Page) {
                const attributeValue = await core.extractAttribute(page, action.selector, action.attribute);
                obj[`${action.name}`] = attributeValue;
            }
            break;

        case 'wait':
            log.info(`${action.type}: ${action.duration}`)
            if (action.duration && page instanceof Page) {
                await core.wait(page, action.duration);
            }
            break;

        case 'selectDropdown':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && action.value && page instanceof Page) {
                await core.selectDropdownValue(page, action.selector, action.value);
            }
            break;

        case 'screenshot':
            log.info(`${action.type}: ${action.selector}`)
            if (action.path && page instanceof Page) {
                await core.captureScreenshot(page, action.path);
            }
            break;

        case 'pdf':
            log.info(`${action.type}: ${action.selector}`)
            if (action.path && page instanceof Page) {
                await core.capturePDF(page, action.path);
            }
            break;

        case 'hover':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && page instanceof Page) {
                await core.hoverOverElement(page, action.selector);

                if (action.childSelector) {
                    log.info(`${action.type}: ${action.childSelector}`)
                    await core.clickElement(page, action.childSelector);
                }
            }
            break;

        case 'setCheckbox':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && typeof action.checked !== 'undefined' && page instanceof Page) {
                await core.setCheckbox(page, action.selector, action.checked);
            }
            break;

        case 'extractText':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector) {
                const text = await core.extractText(page, action.selector);
                obj[`${action.name}`] = text;
            }
            break;

        case 'extractTextList':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && page instanceof Page) {
                const texts = await core.extractTextList(page, action.selector);
                // You can store or log the extracted texts as needed
                console.log(texts);
            }
            break;

        case 'extractInputValue':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && page instanceof Page) {
                const inputValue = await core.extractInputValue(page, action.selector);
                // You can store or log the extracted input value as needed
                console.log(inputValue);
            }
            break;

        case 'extractInnerHTML':
            log.info(`${action.type}: ${action.selector}`)
            if (action.selector && action.childSelector && page instanceof Page) {
                const childElements = await core.extractChildElements(page, action.selector, action.childSelector);

                if (childElements && action.iterateInside && action.config && data) {
                    for (const element of childElements) {            
                        await performPageActions(element, action.config as PuppeteerConfig, log, data);
                    }
                    console.log(data);
                }
            }
            
            break;

      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
  }

  if (Object.keys(obj).length > 0) data?.push(obj);
  
  if (page instanceof Page) await page.close();
};
