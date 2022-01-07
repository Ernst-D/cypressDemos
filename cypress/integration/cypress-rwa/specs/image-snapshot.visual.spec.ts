/// <reference types="cypress-image-snapshot" />

import homePage from "../../../pages/cypress-rwa/home.page";
import loginPage from "../../../pages/cypress-rwa/login.page";
import env from "../../../support/env";

describe("Visual testing plugins suite",() => {
    describe("Image snapshot plugin",() => {
        before(() => {
            cy.visit(env.cypressRWA.url.toString());
        });
        it("Login page. Image snapshot",() => {
            cy.matchImageSnapshot('login');
        });
        it("login action and dashboard snapshot",() => {
            loginPage.login();
            homePage.header.should("be.visible");
            cy.xpath("//*[contains(@data-test,'transaction-receiver')]").eq(0).should("be.visible");
            cy.matchImageSnapshot("User dashboard page");
        });
        it("side bar image snapshot",() => {
            cy.get('[data-test="sidenav"]').matchImageSnapshot("SideBar naviagtion");
        });
        it("header snapshot",() => {
            cy.get('.MuiToolbar-root').matchImageSnapshot("Naviagtion header");
        });
        it("main contaiiner snapshot",() => {
            cy.get('[class="makeStyles-root-1"]').children("header").matchImageSnapshot("main conatiner");
        });
    });
});