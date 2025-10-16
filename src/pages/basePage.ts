import {expect, Locator, Page} from "@playwright/test";

export class BasePage {
    protected page: Page;
    readonly logInButton: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = this.page.getByRole("link", {name: "Log In"});
        this.emailField = this.page.getByRole("textbox", {name: "Enter email"});
        this.passwordField = this.page.getByRole("textbox", {name: "Enter password"});
    }

    async shouldSeeTitle(expectedTitle: string): Promise<void> {
        const title = this.page.getByRole('heading', {name: expectedTitle});
        await expect(title).toBeVisible();
    }

}