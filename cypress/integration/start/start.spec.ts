import custom from "../../support/custom";

describe("Test suite", ()=>{
    it("Test Case", ()=>{
        cy.visit("https://ej2.syncfusion.com/showcase/typescript/webmail");
        custom.Command.pause();
    });
});