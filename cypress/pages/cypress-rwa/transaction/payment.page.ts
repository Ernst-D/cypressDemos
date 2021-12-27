class PaymentPage {
    get amountInput(){
        return cy.get('#amount');
    }

    get noteInput(){
        return cy.get('#transaction-create-description-input');
    }

    get requestBtn(){
        return cy.get('[data-test="transaction-create-submit-request"]');
    }
}
export default new PaymentPage();