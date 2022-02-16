/* eslint-disable no-console */
import { Page, Locator } from "@playwright/test";

class Cy {
    page: Page;
    
    constructor(page: Page){
        this.page = page;
    }

    clearLocalStorageSnapshot(){
        return "clearLocalStorageSnapshot";
    }

    reload(){
        return "reload";
    }

    saveLocalStorage(){
        return "saveLocalStorage";
    }

    restoreLocalStorage(){
        return "restoreLocalStorage";
    }

    async visit(url: string){
        await this.page.goto(url);
    }

    intercept(queryName: string, route: string): Cy {
        // eslint-disable-next-line no-console
        console.log({queryName,route});
        
        return this;
    }

    as(aliasName: string): Cy{
        // eslint-disable-next-line no-console
        console.log(aliasName);
        return this;
    }

    get(locatorString: string): Locator {
        return this.page.locator(locatorString);
    }

    log(stringToLog: string){
        console.log(stringToLog);
    }

    should(this: Locator ,assertionName: string){
        console.log(assertionName);
    }
}
export default Cy;