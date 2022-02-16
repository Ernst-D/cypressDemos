import BasePage from "../../base.page";
import completePage from "./complete.page";
import contactPage from "./contact.page";
import paymentPage from "./payment.page";

class TransactionPage extends BasePage {
    get payment(){
        return new paymentPage(this.page);
    }

    get contact(){
        return new contactPage(this.page);
    }

    get complete(){
        return completePage;
    }
}
export default TransactionPage;