import { Page } from "@playwright/test";
import HomePage from "./cypress-rwa/home.page";
import TransactionPage from "./cypress-rwa/transaction/transaction.page";

// const _homePage = (page:Page) => new HomePage(page);

// export const 
export default {
    homePage(page:Page){
        return new HomePage(page);
    },
    transactionPage(page:Page){
        return new TransactionPage(page);
    }
    // contactPage(page:Page){
    //     return new 
    // }
};