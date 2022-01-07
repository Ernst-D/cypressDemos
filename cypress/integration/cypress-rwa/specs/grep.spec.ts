/// <reference types="cypress-grep" />


import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import env from "../../../support/env";

describe("Cypress grep test suite",() => {
    describe("naviagte to login page",() => {
        before(() => {
            cy.visit(env.cypressRWA.url.toString());
        });
        it("user login",{tags: ["@RWA", "@test"]},() => {
            loginPage.login();
            homePage.header.should("be.visible");
            cy.xpath("//*[contains(@data-test,'transaction-receiver')]").eq(0).should("be.visible");
        });
    });
});