export type Action = {
    type: 'navigate' | 'click' | 'type' | 'scrollToBottom' | 
          'extractAttribute' | 'wait' | 'selectDropdown' | 
          'screenshot' | 'pdf' | 'hover' | 'setCheckbox' | 
          'extractText' | 'extractTextList' | 'extractInputValue' | 'extractInnerHTML' | 'extractElement';
    selector?: string;
    url?: string;
    text?: string;
    attribute?: string;
    duration?: number;
    value?: string;
    path?: string;
    checked?: boolean;
    name?: string;
    iterateInside?: boolean;
    config?: PuppeteerConfig;
    childSelector?: string;
};
  
export interface PuppeteerConfig {
    startUrl?: string;
    actions: Action[];
}
