import env from "../../support/env";

class LoginPage {
    get header(){
        return cy.get('.MuiListSubheader-root');
    }

    get newTransactionBtn(){
        return cy.get('[data-test="nav-top-new-transaction"]');
    }

    get logoutBtn(){
        return cy.get('[data-test="sidenav-signout"]');
    }

    get notificationIcon(){
        return cy.get('[data-test="nav-top-notifications-link"]');
    }

    logout(){
        if(Cypress.env(env.flags.mobile)){
            cy.get('[data-test="sidenav-toggle"]').click();
            cy.get('[data-test="sidenav-signout"]').click();
        }
        else{
            this.logoutBtn.click();
        }
    }
}
export default new LoginPage();
