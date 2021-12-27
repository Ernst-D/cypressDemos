/// <reference types="cypress-xpath" />
/// <reference types="cypress-localstorage-commands" />


import custom from "../../support/custom";
import env from "../../support/env";

let transactionId: string = "transactionId";

describe("Transaction test suite",()=>{
    let cyAlias = (aliasName: string): string => "@"+aliasName;
    
    describe("User creates transaction",()=>{ 

        before(() => {
            cy.clearLocalStorageSnapshot();
            cy.reload();
        });
        afterEach(() => {
            cy.saveLocalStorage();
        });
        beforeEach(()=>{
            cy.restoreLocalStorage();
            Cypress.Cookies.preserveOnce("connect.sid");
        })

        it("user logs in and sees its username on home page",()=>{
            cy.visit(env.cypressRWA.url.toString());
            custom.Command.login({username:"Adolfo.Skiles80", password:"s3cret"});
            cy.get('.MuiListSubheader-root').should("be.visible");
        })
        it("user creates request transaction",()=>{
            cy.get('.MuiListSubheader-root').should("be.visible");
            cy.get('[data-test="nav-top-new-transaction"]').click();
            cy.get('[data-test="user-list-search-input"]').type("Adrien33");
            cy.get('[data-test="users-list"] li').eq(0).click();
            cy.get('#amount').type("1");
            cy.get('#transaction-create-description-input')
            .type("test transaction note");
            
            let transactionAlias = "transaction";

            cy.intercept("POST","/transactions").as(transactionAlias);
            cy.get('[data-test="transaction-create-submit-request"]').click();
            cy.wait(cyAlias(transactionAlias)).should(({ request, response }) => {
                let transactionRes: NetworkResponse.TransactionResponse = response.body;
                expect(request.method).to.equal('POST')
                expect(response.statusCode).to.equal(200);
                cy.wrap(transactionRes.transaction.id).as(transactionId);
              })
            cy.get(cyAlias(transactionAlias))
            .its('response.body').then(response=>{
                cy.log(response);
            })
            
            cy.get('[data-test="main"] [class="MuiGrid-root MuiGrid-item"]')
            .eq(3)
            .invoke("text")
            .then(text=>{
                cy.log(`The text of transaction is ${text}`);
            })
            .should("equal","Requested $1.00 for test transaction note")
            
        })

        it("another user logs in",()=>{
            let notificationsAlias: string = "notifications";

            // cy.visit(env.cypressRWA.url.toString());            
            cy.get('[data-test="sidenav-signout"]').click();
            cy.intercept("GET",`/${notificationsAlias}`).as(notificationsAlias);
            custom.Command.login({username:"Adrien33", password:"s3cret"});
            cy.get('.MuiListSubheader-root').should("be.visible");
            cy.get('[data-test="nav-top-notifications-link"]').click();
            cy.wait(cyAlias(notificationsAlias)).should(({ request, response }) => {
                let notificationsRes = response.body;
                expect(request.method).to.equal('GET');
                expect(response.statusCode).to.equal(200);
                cy.log(notificationsRes);
                cy.get(cyAlias(transactionId)).then(id=>{
                    expect(notificationsRes.results.shift().transactionId).equal(id)
                })
            })
        }) 
    }) 
})