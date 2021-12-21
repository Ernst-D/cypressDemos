import env from "../../support/env";

describe("Inbox test suite",()=>{
    before("User navigates to inbox", ()=>{
        cy.visit(env.webmail.url.toString());
        
    })
    it("can see its profile name on Inbox",()=>{
        let inbox = cy.get('[data-uid="7"] > :nth-child(2) > .e-list-text').invoke("text");
        inbox.then(inboxName=>{
            let profile = cy.get('#profile-div').invoke("text");
            profile.then(profileName=>{
                expect(inboxName).to.be.equal(profileName.trim());
            })
        })
    })
    it("can see content of message",()=>{
        let num = 3;
        for (let index = 0; index < num; index++) {
            cy.get('[class="e-content"] [class="e-list-item e-level-1"]').eq(index).click()
        }
        /**
         * Add action to take a screenshot of message content
         */
    })
})