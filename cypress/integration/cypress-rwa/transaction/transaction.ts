import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import transactionPage from "../../../pages/cypress-rwa/transaction/transaction.page";
import custom from "../../../support/custom";
import env from "../../../support/env";

let transactionId = "transactionId";
let transactionAlias = "transaction";
let notificationsAlias = "notifications";
let transactionRes: NetworkResponse.TransactionResponse;

Before(() => {
    custom.Command.isMobile();
    cy.restoreLocalStorage();
    Cypress.Cookies.preserveOnce("connect.sid");
});

After(() => {
    cy.saveLocalStorage();
});

Given("User is on the login page", () => {
    cy.visit(env.cypressRWA.url.toString());
});
Given("User is on the home page",() => {
    homePage.header.should("be.visible");
});
Given(`User creates new transaction to user`,() => {
    homePage.newTransactionBtn.click();
    transactionPage.contact.userlistSearchInpt.type("Roberto.Gulgowski5", {force:true});
    transactionPage.contact.usersList.eq(0).click();
});
When("It fill amount of money and adds note on transaction page",() => {
    custom.Command.pause();
    transactionPage.payment.amountInput.type("1");
    transactionPage.payment.noteInput.type("test transaction note");        
    cy.intercept("POST","/transactions").as(transactionAlias);
});
When("It clicks on a request button",() => {
    transactionPage.payment.requestBtn.click();

    cy.wait(`@${transactionAlias}`).should(({ request, response }) => {
        transactionRes = response.body;
        expect(request.method).to.equal('POST');
        expect(response.statusCode).to.equal(200);
        cy.wrap(transactionRes.transaction.id).as(transactionId);
      });
    cy.get(`@${transactionAlias}`)
    .its('response.body').then(response => {
        cy.log(response);
    });
    transactionPage.complete.requestedTransactionContainer.invoke("text")
    .then(text => {
        cy.log(`The text of transaction is ${text}`);
    })
    .should("equal","Requested $1.00 for test transaction note");
});
When("It logs as Adolfo.Skiles80",() => {
    loginPage.login();
});

Then("User see request in notifications",() => {
    homePage.logout();
    cy.intercept("GET",`/${notificationsAlias}`).as(notificationsAlias);
    custom.Command.login({username:"Adrien33", password:"s3cret"});
    homePage.header.should("be.visible");
    homePage.notificationIcon.click();

    cy.wait(`@${notificationsAlias}`).should(({ request, response }) => {
        let notificationsRes = response.body;
        expect(request.method).to.equal('GET');
        expect(response.statusCode).to.equal(200);
        cy.log(notificationsRes);
        cy.get(`@${transactionId}`).then(id => {
            expect(notificationsRes.results.shift().transactionId).equal(id);
        });
    });
});
Then("It sees the home page",() => {
    homePage.header.should("be.visible");
});