/// <reference types="cypress" />

export function Pause(): Custom.Commands.Pause {
    return Cypress.env('DEBUG') == 1 
    ? cy.pause() 
    : cy.log("SET ENV VARIABLE CYPRESS_DEBUG=1 TO MAKE THIS COMMAND WORK");
}