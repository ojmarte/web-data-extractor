import * as fs from 'fs';
import { PuppeteerConfig } from '../types/puppeteerTypes';

export const readJSONFile = async (filePath: string): Promise<PuppeteerConfig> => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const obj = JSON.parse(data) as PuppeteerConfig;
        return obj;
    } catch (error) {
        console.error('Error:', error);
        throw error;  // Rethrow the error after logging it
    }
}
