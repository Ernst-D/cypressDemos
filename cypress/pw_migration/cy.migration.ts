import { Page } from "@playwright/test";

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

    visit(mockUrl: string){
        return mockUrl;
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
}
export default Cy;