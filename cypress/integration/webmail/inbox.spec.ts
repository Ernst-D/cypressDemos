/// <reference types="cypress-xpath" />

import webmailPage from "../../pages/webmail/webmail.page";
import env from "../../support/env";

const webmail = webmailPage;

describe("Inbox test suite",()=>{
    before("User navigates to inbox", ()=>{
        cy.visit(env.webmail.url.toString());
        
    });

    it("can see its profile name on Inbox",()=>{
        let inbox = cy.get(webmail.inboxName).invoke("text");
        inbox.then(inboxName=>{
            let profile = cy.get(webmail.profile.name).invoke("text");
            profile.then(profileName=>{
                expect(inboxName).to.be.equal(profileName.trim());
            });
        });
    });
    it("can see content of message",()=>{
        let messageContent = (index: number): string => `message-${index}-content`;
        let num = 3;
        for (let index = 0; index < num; index++) {
            cy.get(webmail.messageComponent).eq(index).click({force:true});
            cy.get(webmail.messageContent).should("be.visible");
            cy.get(webmail.messageContent).screenshot(messageContent(index), { overwrite: true});
        }
    });
    it("can create and send message",()=>{
        cy.get('#e-tbr-btn_0').click();
        cy.get('#btnTo').should("be.visible");
        cy.xpath('//button[@id="btnTo"]//parent::div').should("be.visible").click();
        cy.get('ul[id="autoTo_options"] [alt="employee"]').eq(1).should("be.visible").click();
        cy.xpath('//button[@id="btnCc"]//parent::div').should("be.visible").click();
        cy.get('ul[id="autoCc_options"] [alt="employee"]').eq(3).should("be.visible").click();
        cy.get('[id="txtSubject"]').type("Message subject");
        cy.readFile("./cypress/fixtures/webmail.message.txt","utf-8").then(text=>{
            cy.get('[id="mailContentMessage"]').type(text);
        });
    });
    it("can check profile sidebar",()=>{
        let { profile } = webmail;
        cy.get(profile.name).click();
        cy.get(profile.sidebar).should("be.visible").get(profile.links).children().then(elem=>{
            cy.wrap(elem).should("be.visible");
        });
    });    
});