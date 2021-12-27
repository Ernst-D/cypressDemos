class CompletePage {
    get requestedTransactionContainer(){
        return cy.get('[data-test="main"] [class="MuiGrid-root MuiGrid-item"]')
        .eq(3);
    }
}
export default new CompletePage();