/// <reference types="cypress-xpath" />

import custom from "../../support/custom";
import env from "../../support/env"

describe("Transaction test suite",()=>{
    it("user logs in and sees its username on home page",()=>{
        cy.visit(env.cypressRWA.url.toString());
        custom.Command.login({username:"Tavares_Barrows", password:"s3cret"})
        custom.Command.pause();
    })
})