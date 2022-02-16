import "@playwright/test" ;

declare module '@playwright/test' {
  
    // namespace customNamespace {
  
    //   export interface AnotherCustomType {
    //     customField1: string;
    //     customField2: boolean;
    //   }
    // }
  
    // NOTE: extending existing interface
    export interface Locator {
      should(assertionName: string): void;
    }
  }