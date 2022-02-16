import env from "../../support/env";
import BasePage from "../base.page";

class HomePage extends BasePage {
    get header(){
        return this.cy.get('.MuiListSubheader-root');
    }

    get newTransactionBtn(){
        return this.cy.get('[data-test="nav-top-new-transaction"]');
    }

    get logoutBtn(){
        return this.cy.get('[data-test="sidenav-signout"]');
    }

    get notificationIcon(){
        return this.cy.get('[data-test="nav-top-notifications-link"]');
    }

    async logout(){
    //     if(Cypress.env(env.flags.mobile)){
    //         this.cy.get('[data-test="sidenav-toggle"]').click();
    //         this.cy.get('[data-test="sidenav-signout"]').click();
    //     }
    //     else{
    //         this.logoutBtn.click();
    //     }
        await this.logoutBtn.click();
    }
}
export default HomePage;
