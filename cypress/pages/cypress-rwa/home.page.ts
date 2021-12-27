class LoginPage {
    get header(){
        return cy.get('.MuiListSubheader-root');
    }

    get newTransactionBtn(){
        return cy.get('[data-test="nav-top-new-transaction"]');
    }
}
export default new LoginPage();
