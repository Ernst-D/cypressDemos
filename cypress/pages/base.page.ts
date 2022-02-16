import { Page } from "@playwright/test";
import Cy from "../pw_migration/cy.migration";

class BasePage {
    page: Page;
    
    constructor(page:Page){
        this.page = page;
    }

    get cy(){
        return new Cy(this.page);
    }
}
export default BasePage;