export type Action = {
    type: 'navigate' | 'click' | 'type' | 'scrollToBottom' | 
          'extractAttribute' | 'wait' | 'selectDropdown' | 
          'screenshot' | 'pdf' | 'hover' | 'setCheckbox' | 
          'extractText' | 'extractTextList' | 'extractInputValue' | 'extractInnerHTML';
    selector?: string;
    url?: string;
    text?: string;
    attribute?: string;
    duration?: number;
    value?: string;
    path?: string;
    checked?: boolean;
};
  
export interface PuppeteerConfig {
    startUrl: string;
    actions: Action[];
}