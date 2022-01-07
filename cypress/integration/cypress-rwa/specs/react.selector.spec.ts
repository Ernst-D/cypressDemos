/// <reference types="cypress-react-selector" />

import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import env from "../../../support/env";

describe("Cypress react selector test suite",() => {
    describe("navigate to login page",() => {
        before(() => {
            cy.visit(env.cypressRWA.url.toString());
            cy.waitForReact(1000); 
        });
        it("user login",{tags: ["@RWA", "@test", "@react_selector"]},() => {
            loginPage.login();
            homePage.header.should("be.visible");
            cy.react("ButtonBase",{props:{ "to":"/user/settings" }}).click();
            cy.waitForReact();
            cy.react('TextField', { props: { inputProps: { "data-test": "user-settings-firstName-input" } } }).clear();
           
        });
    });
});