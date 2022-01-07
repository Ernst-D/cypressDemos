/// <reference types="cypress-grep" />

describe("Cypress iframe and wait-until test suite",() => {
    describe("naviagte to login page",() => {
        before(() => {
            cy.visit("https://cloud.google.com/");
        });
        it("user navigates to the GCP",{tags: "@wait_until"},() => {
            cy.findByLabelText("Search").click().type("Calculator{enter}");
            cy.waitUntil(()=>{
                return cy.get('[class="gsc-results gsc-webResult"]').should("be.visible");
            })
            .get(':nth-child(1) > .gs-webResult > .gsc-thumbnail-inside > div.gs-title > .gs-title')
            .click();
        });
    });
});