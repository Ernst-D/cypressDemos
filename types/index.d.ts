/// <reference types="cypress" />

declare namespace Custom {
    namespace Commands {
        type UserCredentials = {
            username: string,
            password: string
        };        
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

declare namespace NetworkResponse {
    type Transaction = {
        "id":string,
        "uuid": string,
        "amount": number,
        "description": string,
        "receiverId": string,
        "senderId": string,
        "privacyLevel": string,
        "status": string,
        "requestStatus": string,
        "createdAt": string,
        "modifiedAt": string
    }
    type TransactionResponse = {
        "transaction": Transaction
    }
}