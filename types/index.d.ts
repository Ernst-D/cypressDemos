/// <reference types="cypress" />

declare namespace Custom {
    namespace Commands {
        type Pause = Cypress.Chainable<undefined> | void;
    }   
}

declare namespace Env {
    type Webmail = {
        url: URL
    }
}