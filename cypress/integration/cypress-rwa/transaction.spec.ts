/// <reference types="cypress-xpath" />
/// <reference types="cypress-localstorage-commands" />


import custom from "../../support/custom";
import env from "../../support/env"

describe("Transaction test suite",()=>{
    describe("User creates transaction",()=>{ 

        before(() => {
            cy.clearLocalStorageSnapshot();
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
            custom.Command.login({username:"Tavares_Barrows", password:"s3cret"});
            cy.get('.MuiListSubheader-root').should("be.visible");
        })
        it("user creates request transaction",()=>{
            cy.get('.MuiListSubheader-root').should("be.visible");
            cy.get('[data-test="nav-top-new-transaction"]').click();
            cy.get('[data-test="user-list-search-input"]').type("Giovanna74");
            cy.get('[data-test="users-list"] li').eq(0).click();
            cy.get('#amount').type("1");
            cy.get('#transaction-create-description-input')
            .type("test transaction note");
            cy.get('[data-test="transaction-create-submit-request"]').click();
            
            cy.get('[data-test="main"] [class="MuiGrid-root MuiGrid-item"]')
            .eq(3)
            .invoke("text")
            .then(text=>{
                cy.log(`The text of transaction is ${text}`);
            })
            .should("equal","Requested $1.00 for test transaction note")
            
        })
    }) 
    describe("Another user see request",()=>{
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
        it("another user logs in",()=>{
            cy.visit(env.cypressRWA.url.toString());
            custom.Command.login({username:"Katharina_Bernier", password:"s3cret"});
            cy.get('.MuiListSubheader-root').should("be.visible");
        }) 
    })
})