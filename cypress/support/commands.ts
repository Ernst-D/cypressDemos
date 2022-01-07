// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands";
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import '@testing-library/cypress/add-commands';
import 'cypress-iframe';


addMatchImageSnapshotCommand();

//#region Extension methods

/**
 * TODO: Adapat snapshotElement to copy only the specific to element HTML 
 * (right now it copies outerHTML, so when you have in header all).
 * _______
 * UPD: you don't need to do any tricks, 
 * since this command works not so well with cy.xpath.
 * Use cy.get and proper selectors.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Cypress.Commands.add('percySnapshotElement', { prevSubject: true }, (subject, name, options) => {
    cy.percySnapshot(name, {
      domTransformation: (documentClone) => scope(documentClone, subject.selector),
      ...options,
    });
  });
  
  function scope(documentClone: Document, selector: string): Document {
    const element = documentClone.querySelector(selector);
    documentClone.querySelector('body').innerHTML = element.outerHTML;
  
    return documentClone;
}

//#endregion