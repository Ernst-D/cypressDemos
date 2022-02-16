import BasePage from "../../base.page";

class ContactPage extends BasePage {
    get userlistSearchInpt(){
        return this.cy.get('[data-test="user-list-search-input"]');
    }

    get usersList(){
        return this.cy.get('[data-test="users-list"] li');
    }
}
export default ContactPage;