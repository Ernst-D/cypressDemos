import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import transactionPage from "../../../pages/cypress-rwa/transaction/transaction.page";
import custom from "../../../support/custom";
import env from "../../../support/env";

let cyAlias = (aliasName: string): string => "@"+aliasName;
let transactionId = "transactionId";
let transactionAlias = "transaction";
let transactionRes: NetworkResponse.TransactionResponse;

Before(() => {
    custom.Command.isMobile();
});

Given("User is on the login page", () => {
    cy.visit(env.cypressRWA.url.toString());
});
When("It logs as Adolfo.Skiles80",() => {
    loginPage.login();
});
Then("It sees the home page",() => {
    homePage.header.should("be.visible");
});
Then("User perform some actions",() => {
    homePage.newTransactionBtn.click();
    transactionPage.contact.userlistSearchInpt.type("Adrien33", {force:true});
    transactionPage.contact.usersList.eq(0).click();
    custom.Command.pause();
    transactionPage.payment.amountInput.type("1");
    transactionPage.payment.noteInput.type("test transaction note");

    cy.intercept("POST","/transactions").as(transactionAlias);

    transactionPage.payment.requestBtn.click();

    cy.wait(cyAlias(transactionAlias)).should(({ request, response }) => {
        transactionRes = response.body;
        expect(request.method).to.equal('POST');
        expect(response.statusCode).to.equal(200);
        cy.wrap(transactionRes.transaction.id).as(transactionId);
      });
    cy.get(cyAlias(transactionAlias))
    .its('response.body').then(response => {
        cy.log(response);
    });
    
    transactionPage.complete.requestedTransactionContainer.invoke("text")
    .then(text => {
        cy.log(`The text of transaction is ${text}`);
    })
    .should("equal","Requested $1.00 for test transaction note");
});