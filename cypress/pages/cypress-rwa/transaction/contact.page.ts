class ContactPage {
    get userlistSearchInpt(){
        return cy.get('[data-test="user-list-search-input"]');
    }

    get usersList(){
        return cy.get('[data-test="users-list"] li');
    }
}
export default new ContactPage();