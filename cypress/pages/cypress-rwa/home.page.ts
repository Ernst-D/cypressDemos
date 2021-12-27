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
}
export default new LoginPage();
