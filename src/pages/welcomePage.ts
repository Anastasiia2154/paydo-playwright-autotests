import {expect, Locator} from "@playwright/test";
import {BasePage} from "@pages/basePage";
import {UserData} from "@utils/testData";


export class WelcomePage extends BasePage {

    readonly errorMessage: Locator = this.page.locator("ngp-info-block-content");
    readonly logInButton: Locator = this.page.getByRole("button", {name: "Log In"});


    async shouldSeeWelcomeBackPage(pageTitle: string): Promise<void> {
        await this.shouldSeeTitle(pageTitle);
        await expect(this.emailField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.logInButton).toBeVisible();
    }

    async fillLogInForm(data: UserData): Promise<void> {
        await this.emailField.fill(data.email);
        await this.passwordField.fill(data.password);
        await this.logInButton.click();
    }

    async shouldSeeErrorMessage(message: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(message);
    }
}