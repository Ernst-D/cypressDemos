import completePage from "./complete.page";
import contactPage from "./contact.page";
import paymentPage from "./payment.page";

class TransactionPage {
    get payment(){
        return paymentPage;
    }

    get contact(){
        return contactPage;
    }

    get complete(){
        return completePage;
    }
}
export default new TransactionPage();