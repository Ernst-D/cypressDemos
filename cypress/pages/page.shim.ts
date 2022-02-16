import { Page } from "@playwright/test";
import HomePage from "./cypress-rwa/home.page";

// const _homePage = (page:Page) => new HomePage(page);

// export const 
export default {
    homePage(page:Page){
        return new HomePage(page);
    },
    // contactPage(page:Page){
    //     return new 
    // }
};