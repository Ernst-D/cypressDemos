/// <reference types="cypress" />
import chalk from "chalk";

export function pause(): Cypress.Chainable<undefined> | void {
    return Cypress.env('DEBUG') == 1 
    ? cy.pause() 
    : console.log(chalk.yellow("SET ENV VARIABLE CYPRESS_DEBUG=1 TO MAKE THIS COMMAND WORK"));
}