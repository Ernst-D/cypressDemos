/// <reference types="cypress" />

declare namespace Custom {
    namespace Commands {
        type UserCredentials = {
            username: string,
            password: string
        };        
        
        type Pause = () => Cypress.Chainable<any> | void;
        type Login = (credentials: UserCredentials) => void;

    }   
}

declare namespace Env {
    type Webmail = {
        url: URL
    }
    type CypressRWA = {
        url: URL
    }
}