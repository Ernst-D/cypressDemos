/// <reference types="cypress-xpath" />
/// <reference types="cypress-localstorage-commands" />


import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import transactionPage from "../../../pages/cypress-rwa/transaction/transaction.page";
import custom from "../../../support/custom";
import env from "../../../support/env";

let transactionId = "transactionId";

describe("Transaction test suite",() => {
    let cyAlias = (aliasName: string): string => "@"+aliasName;
    
    let transactionAlias = "transaction";
    let transactionRes: NetworkResponse.TransactionResponse;
    let notificationsAlias = "notifications";

    describe("User creates transaction",() => { 
        before(() => {
            cy.clearLocalStorageSnapshot();
            cy.reload();
        });
        afterEach(() => {
            cy.saveLocalStorage();
        });
        beforeEach(() => {
            custom.Command.isMobile();
            cy.restoreLocalStorage();
            Cypress.Cookies.preserveOnce("connect.sid");
        });

        it("user logs in and sees its username on home page",() => {
            cy.visit(env.cypressRWA.url.toString());
            loginPage.login();
            homePage.header.should("be.visible");
        });
        it("user creates request transaction",() => {
            homePage.header.should("be.visible");
            homePage.newTransactionBtn.click();
            transactionPage.contact.userlistSearchInpt.type("Adrien33");
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

            homePage.logout();
            cy.intercept("GET",`/${notificationsAlias}`).as(notificationsAlias);

            custom.Command.login({username:"Adrien33", password:"s3cret"});
            homePage.header.should("be.visible");
            homePage.notificationIcon.click();

            cy.wait(cyAlias(notificationsAlias)).should(({ request, response }) => {
                let notificationsRes = response.body;
                expect(request.method).to.equal('GET');
                expect(response.statusCode).to.equal(200);
                cy.log(notificationsRes);
                cy.get(cyAlias(transactionId)).then(id => {
                    expect(notificationsRes.results.shift().transactionId).equal(id);
                });
            });
        });
    }); 
});