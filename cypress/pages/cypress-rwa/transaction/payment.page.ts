import BasePage from "../../base.page";

class PaymentPage extends BasePage {
    get amountInput(){
        return this.cy.get('#amount');
    }

    get noteInput(){
        return this.cy.get('#transaction-create-description-input');
    }

    get requestBtn(){
        return this.cy.get('[data-test="transaction-create-submit-request"]');
    }
}
export default PaymentPage;