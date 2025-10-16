import {expect, Locator} from "@playwright/test";
import {BasePage} from "@pages/basePage";
import {CreateAccountPage} from "@pages/createAccountPage";
import {WelcomePage} from "@pages/welcomePage";


export class LandingPage extends BasePage {

    readonly openAccountButton: Locator = this.page.locator("div.banner-section__actions").getByRole("link", {name: "Open account"});


    async shouldSeeMainPage(pageTitle: string): Promise<void> {
        await this.shouldSeeTitle(pageTitle);
        await expect(this.logInButton).toBeVisible();
        await expect(this.openAccountButton).toBeVisible();
    }

    async openCreateAccountPage(): Promise<CreateAccountPage> {
        await this.openAccountButton.click();
        return new CreateAccountPage(this.page);
    }

    async openLogInPage(): Promise<WelcomePage> {
        await this.logInButton.click();
        return new WelcomePage(this.page);
    }
}