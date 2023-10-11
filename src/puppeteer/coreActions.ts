import { Page } from 'puppeteer';

// Helper Method: Navigate to a URL
export const navigateTo = async (page: Page, url: string): Promise<void> => {
    await page.goto(url);
};

// Helper Method: Click on an element
export const clickElement = async (page: Page, selector: string): Promise<void> => {
    await page.waitForSelector(selector, { visible: true });
    await page.click(selector);
};

// Helper Method: Type into an element
export const typeIntoElement = async (page: Page, selector: string, text: string): Promise<void> => {
    await page.waitForSelector(selector, { visible: true });
    await page.type(selector, text);
};

// Helper Method: Scroll to the bottom of the page
export const scrollToBottom = async (page: Page): Promise<void> => {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
};

// Helper Method: Extract an element's attribute
export const extractAttribute = async (page: Page, selector: string, attribute: string): Promise<string | null> => {
    await page.waitForSelector(selector, { visible: true });
    return page.$eval(selector, (el, attr) => el.getAttribute(attr) || null, attribute);
};

// Helper Method: Wait for a specific amount of time (e.g., 3 seconds)
export const wait = async (page: Page, duration: number): Promise<void> => {
    await page.waitForTimeout(duration);
};

// Helper Method: Select a value from a dropdown
export const selectDropdownValue = async (page: Page, selector: string, value: string): Promise<void> => {
    await page.waitForSelector(selector, { visible: true });
    await page.select(selector, value);
};

// Helper Method: Capture a screenshot of the current page view
export const captureScreenshot = async (page: Page, path: string): Promise<void> => {
    await page.screenshot({ path: path });
};

// Helper Method: Capture the page as a PDF
export const capturePDF = async (page: Page, path: string): Promise<void> => {
    await page.pdf({ path: path, format: 'A4' });
};

// Helper Method: Hover the mouse pointer over a specific element
export const hoverOverElement = async (page: Page, selector: string): Promise<void> => {
    await page.waitForSelector(selector, { visible: true });
    const element = await page.$(selector);
    if (element) await element.hover();
};

// Helper Method: setCheckbox 
export const setCheckbox = async (page: Page, selector: string, checked: boolean): Promise<void> => {
    await page.waitForSelector(selector, { visible: true });
    const isChecked = await page.$eval(selector, (el: Element) => {
        const inputEl = el as HTMLInputElement; 
        return inputEl.checked;
    });
    if (isChecked !== checked) {
        await page.click(selector);
    }
};

// Helper Method: Extract Text from an Element
export const extractText = async (page: Page, selector: string): Promise<string | null> => {
    await page.waitForSelector(selector, { visible: true });
    return page.$eval(selector, el => el.textContent?.trim() || null);
};

// Helper Method: Extract Multiple Text Values from a List of Elements
export const extractTextList = async (page: Page, selector: string): Promise<string[]> => {
    await page.waitForSelector(selector, { visible: true });
    return page.$$eval(selector, elements => elements.map(el => (el.textContent || "").trim()));
};

// Helper Method: Extract Value from an Input Element
export const extractInputValue = async (page: Page, selector: string): Promise<string | null> => {
    await page.waitForSelector(selector, { visible: true });
    return page.$eval(selector, (el: Element) => {
        const inputEl = el as HTMLInputElement;
        return inputEl.value || null;
    });
};

// Helper Method: Extract HTML Content from an Element
export const extractInnerHTML = async (page: Page, selector: string): Promise<string | null> => {
    await page.waitForSelector(selector, { visible: true });
    return page.$eval(selector, el => el.innerHTML);
};
