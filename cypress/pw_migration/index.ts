import { Page } from "@playwright/test";
import Cy from "./cy.migration";
import Cypress from "./cypress.migration";

const _cy = (page: Page) => {
    return new Cy(page);
};
const _cypress = () => {
    return new Cypress();
};

export const cy = _cy;
export const cypress = _cypress;