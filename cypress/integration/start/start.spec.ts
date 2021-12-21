describe("Test suite", ()=>{
    it("Test Case", ()=>{
        // cy.viewport(800, 600);
        cy.visit("https://ej2.syncfusion.com/showcase/typescript/webmail");
        cy.get('title').debug();
        cy.pause();
    })
})