import { Page } from "@playwright/test";
import { cy, cypress } from "../../pw_migration";
import env from "../env";

/**
 * Custom wrapper around `cy(page).pause()` command.
 * Works only with env variable cypress_DEBUG=1
 */
export const pause: Custom.Commands.Pause = () => {
    // return cypress().env('DEBUG') == 1 
    // ? cy(page).pause() 
    // : cy(page).log("SET ENV VARIABLE cypress_DEBUG=1 TO MAKE THIS COMMAND WORK");
};

export const login = async (creds: { username: string; password: string; }, page: Page): Promise<void> => {
    /**
     * TODO: move selectors to pages module
     */

    await cy(page).get('#username').type(creds.username);
    await cy(page).get('#password').type(creds.password);
    await cy(page).get('[data-test="signin-submit"]').click();
    // if(cypress().env(env.flags.mobile) == "1"){
    //     cy(page).get('[data-test="sidenav-toggle"]').should("be.visible").click();
    // }
    // cy(page).get('[data-test="sidenav-username"]').invoke("text").then(username => {
    //     expect(username.replace("@","")).equal(creds.username);
    // });
    // if(cypress().env(env.flags.mobile) == "1"){
    //     cy(page).get('[data-test="sidenav-home"]').click();
    // }
};

export const isMobile = () => {
    // if(cypress().env(env.flags.mobile) == "1"){
    //     cypress().env(env.flags.device) ? cy(page).viewport(cypress().env(env.flags.device)) : cy(page).viewport("iphone-x");
    // }
};