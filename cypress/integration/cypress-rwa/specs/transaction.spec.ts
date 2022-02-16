import { test, expect  } from "@playwright/test";
import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import transactionPage from "../../../pages/cypress-rwa/transaction/transaction.page";
import pageShim from "../../../pages/page.shim";
import { cy, cypress } from "../../../pw_migration";
import custom from "../../../support/custom";
import env from "../../../support/env";

let transactionId = "transactionId";

test.describe("Transaction test suite",() => {
    let cyAlias = (aliasName: string): string => "@"+aliasName;
    
    let transactionAlias = "transaction";
    let notificationsAlias = "notifications";

    test.describe("User creates transaction",() => { 
        // test.beforeAll(async ({page}) => {
        //     cy(page).clearLocalStorageSnapshot();
        //     cy(page).reload();
        // });
        test.afterEach(async ({page}) => {
            cy(page).saveLocalStorage();
        });
        test.beforeEach(async ({page}) => {
            custom.Command.isMobile();
            cy(page).restoreLocalStorage();
        });
        test("transaction spec",async ({page}) => {
            await test.step("user logs in and sees its username on home page",async () => {
                await cy(page).visit(env.cypressRWA.url.toString());
                await loginPage.login(page);
            });
            await test.step("user creates request transaction",async () => {
                await pageShim.homePage(page).newTransactionBtn.click();
                await pageShim.transactionPage(page).contact.userlistSearchInpt.type("Adrien33");
                await pageShim.transactionPage(page).contact.usersList.nth(1).click();
                await pageShim.transactionPage(page).payment.amountInput.type("1");
                await pageShim.transactionPage(page).payment.noteInput.type("test transaction note");
                await page.pause();
                cy(page).intercept("POST","/transactions").as(transactionAlias);
    
                await pageShim.transactionPage(page).payment.requestBtn.click();
    
                // cy(page).wait(cyAlias(transactionAlias)).should(({ request, response }) => {
                //     transactionRes = response.body;
                //     expect(request.method).toEqual('POST');
                //     expect(response.statusCode).toEqual(200);
                //     cy(page).wrap(transactionRes.transaction.id).as(transactionId);
                //   });
                // cy(page).get(cyAlias(transactionAlias))
                // .its('response.body').then(response => {
                //     cy(page).log(response);
                // });
                
                await pageShim.transactionPage(page).complete.requestedTransactionContainer.invoke("text")
                .then(text => {
                    cy(page).log(`The text of transaction is ${text}`);
                })
                .should("equal","Requested $1.00 for test transaction note");
    
                // pageShim.homePage(page).logout();
                cy(page).intercept("GET",`/${notificationsAlias}`).as(notificationsAlias);
    
                custom.Command.login({username:"Adrien33", password:"s3cret"}, page);
                // pageShim.homePage(page).header;
                // pageShim.homePage(page).notificationIcon.click();
    
                // cy(page).wait(cyAlias(notificationsAlias)).should(({ request, response }) => {
                //     let notificationsRes = response.body;
                //     expect(request.method).toEqual('GET');
                //     expect(response.statusCode).toEqual(200);
                //     cy(page).log(notificationsRes);
                //     cy(page).get(cyAlias(transactionId)).then(id => {
                //         expect(notificationsRes.results.shift().transactionId).equal(id);
                //     });
                // });
            });
        });
    }); 
});