import { test, expect  } from "@playwright/test";
import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import transactionPage from "../../../pages/cypress-rwa/transaction/transaction.page";
import { cy, cypress } from "../../../pw_migration";
import custom from "../../../support/custom";
import env from "../../../support/env";

let transactionId = "transactionId";

test.describe("Transaction test suite",() => {
    let cyAlias = (aliasName: string): string => "@"+aliasName;
    
    let transactionAlias = "transaction";
    let transactionRes: NetworkResponse.TransactionResponse;
    let notificationsAlias = "notifications";

    test.describe("User creates transaction",() => { 
        test.beforeAll(({page}) => {
            cy(page).clearLocalStorageSnapshot();
            cy(page).reload();
        });
        test.afterEach(({page}) => {
            cy(page).saveLocalStorage();
        });
        test.beforeEach(({page}) => {
            custom.Command.isMobile();
            cy(page).restoreLocalStorage();
            cypress().Cookies.preserveOnce("connect.sid");
        });

        test("user logs in and sees its username on home page",({page}) => {
            cy(page).visit(env.cypressRWA.url.toString());
            loginPage.login();
            homePage.header.should("be.visible");
        });
        test("user creates request transaction",({page}) => {
            homePage.header.should("be.visible");
            homePage.newTransactionBtn.click();
            transactionPage.contact.userlistSearchInpt.type("Adrien33", {force:true});
            transactionPage.contact.usersList.eq(0).click();
            custom.Command.pause();
            transactionPage.payment.amountInput.type("1");
            transactionPage.payment.noteInput.type("test transaction note");
            
            cy(page).intercept("POST","/transactions").as(transactionAlias);

            transactionPage.payment.requestBtn.click();

            cy(page).wait(cyAlias(transactionAlias)).should(({ request, response }) => {
                transactionRes = response.body;
                expect(request.method).toEqual('POST');
                expect(response.statusCode).toEqual(200);
                cy(page).wrap(transactionRes.transaction.id).as(transactionId);
              });
            cy(page).get(cyAlias(transactionAlias))
            .its('response.body').then(response => {
                cy(page).log(response);
            });
            
            transactionPage.complete.requestedTransactionContainer.invoke("text")
            .then(text => {
                cy(page).log(`The text of transaction is ${text}`);
            })
            .should("equal","Requested $1.00 for test transaction note");

            homePage.logout();
            cy(page).intercept("GET",`/${notificationsAlias}`).as(notificationsAlias);

            custom.Command.login({username:"Adrien33", password:"s3cret"});
            homePage.header.should("be.visible");
            homePage.notificationIcon.click();

            cy(page).wait(cyAlias(notificationsAlias)).should(({ request, response }) => {
                let notificationsRes = response.body;
                expect(request.method).toEqual('GET');
                expect(response.statusCode).toEqual(200);
                cy(page).log(notificationsRes);
                cy(page).get(cyAlias(transactionId)).then(id => {
                    expect(notificationsRes.results.shift().transactionId).equal(id);
                });
            });
        });
    }); 
});