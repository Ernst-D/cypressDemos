/// <reference types="cypress-grep" />
/// <reference types="cypress-iframe" />

describe("Cypress iframe and wait-until test suite",() => {
    describe("naviagte to login page",() => {
        before(() => {
            cy.visit("https://cloud.google.com/");
        });
        it("user navigates to the GCP",{tags: "@wait_until"},() => {         
            cy.findByLabelText("Search").click().type("Calculator{enter}");
            cy.waitUntil(() => {
                return cy.xpath('//article[@class="devsite-article"]//a[contains(@href,"/products/calculator")]')
                .eq(0).should("be.visible");
            })
            .click();
            cy.enter('#cloud-site iframe').then(firstFrame => {
                firstFrame().find('[id="maia-main"]').enter('[id="myFrame"]').then(frame => {
                    frame().find('[ng-model="listingCtrl.computeServer.quantity"]').type("2");
                });
            });
            
        });
    });
});