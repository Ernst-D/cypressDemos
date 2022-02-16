import { Page } from "@playwright/test";

export default {
    /**
     * 
     * @param {Page} page 
     * @returns 
     */
    input(page){
        return page.locator("[name='q']");
    }
};