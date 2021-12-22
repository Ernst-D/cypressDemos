import webmailPage from "../../pages/webmail/webmail.page";
import env from "../../support/env";

const webmail = webmailPage;

describe("Inbox test suite",()=>{
    before("User navigates to inbox", ()=>{
        cy.visit(env.webmail.url.toString());
        
    })
    it("can see its profile name on Inbox",()=>{
        let inbox = cy.get(webmail.inboxName).invoke("text");
        inbox.then(inboxName=>{
            let profile = cy.get(webmail.profileName).invoke("text");
            profile.then(profileName=>{
                expect(inboxName).to.be.equal(profileName.trim());
            })
        })
    })
    it("can see content of message",()=>{
        let messageContent = (index: number): string => `message-${index}-content`;
        let num = 3;
        for (let index = 0; index < num; index++) {
            cy.get(webmail.messageComponent).eq(index).click({force:true});
            cy.get(webmail.messageContent).should("be.visible");
            cy.get(webmail.messageContent).screenshot(messageContent(index), { overwrite: true});
        }
    })
})