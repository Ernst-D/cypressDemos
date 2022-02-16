import { Page } from "@playwright/test";
import custom from "../../support/custom";

export default {
    async login(page: Page){
        await custom.Command.login({username:"Adolfo.Skiles80", password:"s3cret"}, page);
    }
};