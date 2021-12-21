/// <reference types="cypress" />

declare namespace Custom {
    namespace Commands {
        type Pause = Cypress.Chainable<undefined> | void;
    }   
}
