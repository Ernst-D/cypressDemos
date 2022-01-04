/// <reference types="cypress-xpath" />
/// <reference types="cypress-localstorage-commands" />
/// <reference types="@testing-library/cypress" />

import homePage from "../../pages/cypress-rwa/home.page";
import loginPage from "../../pages/cypress-rwa/login.page";
import custom from "../../support/custom";
import env from "../../support/env";


describe("testing-library-cypress test suite",() => {

    let cyAlias = (aliasName: string): string => "@"+aliasName;
    let loginAlias = "login";
    /**
     * TODO: need to come up with SharedStore,
     * to save some specific values across specs
     */
    let userEmail = "";
    let userId = "";

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

        it("log in and see username on home page",() => {
            cy.intercept("/login").as(loginAlias);
            cy.visit(env.cypressRWA.url.toString());
            loginPage.login();
            homePage.header.should("be.visible");
            cy.get(cyAlias(loginAlias))
            .its("response.body").then(response => {
                userEmail = response.user.email;
                userId = response.user.id;
                cy.log(userId);
                cy.log(userEmail);
                custom.Command.pause();
            });
        });
        it("check elements with testing-library on MyAccoun page",() => {
            cy.intercept("PATCH",`/users/${userId}`).as("userPatch");

            cy.findByTestId('sidenav-toggle').click();
            cy.findByText(/My Account/i).should("be.visible").click();

            cy.findByTestId("user-settings-firstName-input")
            .invoke("val")
            .then(val => {
                cy.log(<string>val);
                cy.findByTestId("user-settings-firstName-input")
                .clear()
                .type(<string>val);
            });

            cy.findByPlaceholderText('Last Name').invoke("val")
            .then(val => {
                cy.log(<string>val);
                cy.findByPlaceholderText('Last Name')
                .clear()
                .type(<string>val);
            });

            cy.findAllByDisplayValue(userEmail)
            .clear().type(userEmail);

            cy.findByText("Save",{exact:true}).click();

            cy.wait('@userPatch').should(({ request, response }) => {
                expect(request.url).to.include(`/users/${userId}`);
                expect(request.method).to.equal("PATCH");
                expect(response.statusCode).to.be.equal(204);
            });
        });
    }); 
});