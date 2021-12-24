/// <reference types="cypress" />

/**
 * Custom wrapper around `cy.pause()` command.
 * Works only with env variable CYPRESS_DEBUG=1
 */
export const pause: Custom.Commands.Pause = () => {
    return Cypress.env('DEBUG') == 1 
    ? cy.pause() 
    : cy.log("SET ENV VARIABLE CYPRESS_DEBUG=1 TO MAKE THIS COMMAND WORK");
}

export const login: Custom.Commands.Login = (creds) => {
    /**
     * TODO: move selectors to pages module
     */

    cy.get('#username').type(creds.username);
    cy.get('#password').type(creds.password);
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="sidenav-username"]').invoke("text").then(username=>{
        expect(username.replace("@","")).equal(creds.username);
    })
}