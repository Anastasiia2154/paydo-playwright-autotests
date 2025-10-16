import {expect, Locator} from "@playwright/test";
import {BasePage} from "@pages/basePage";


export class CreateAccountPage extends BasePage {

    readonly backButton: Locator = this.page.getByRole("link", {name: "Back to Homepage"});
    readonly emailField: Locator = this.page.getByRole("textbox", {name: "Enter email"});
    readonly passwordField: Locator = this.page.getByRole("textbox", {name: "Enter password"});
    readonly createAccountButton: Locator = this.page.getByRole("button", {name: "Create an account"});
    readonly switchButton: Locator = this.page.getByRole("link", {name: "Switch to create Business account"});
    readonly tooltip: Locator = this.page.locator("ngp-tooltip-content");
    readonly fieldsRequirements: Locator = this.page.locator("ngp-field-requirements-item.ngp-field-requirements-item");
    readonly filedLabels: Locator = this.page.locator("[datatestrole='label']");
    readonly logo: Locator = this.page.getByRole("img", {name: "Paydo logo"});


    async shouldSeeCreateAccountForm(pageTitle: string): Promise<void> {
        const hideIcons = this.page.locator("div.mat-form-field-suffix");
        const requirements = ["Min.8 characters", "Lowercase letter", "Uppercase letter", "At least 1 number"];
        await this.shouldSeeTitle(pageTitle);
        await expect(this.logInButton).toBeVisible();
        await expect(this.backButton).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.passwordField).toHaveCount(2);
        await expect(this.createAccountButton).toBeVisible();
        await expect(this.switchButton).toBeVisible();
        await expect(hideIcons).toHaveCount(2);
        await expect(this.fieldsRequirements).toContainText(requirements);
        await expect(this.filedLabels).toContainText(["Email", "Password", "Confirm password"]);
        await expect(this.page.locator("auth-footer")).toContainText("By creating an account you confirm that you read and accept our Terms of Use");
    }

    async shouldSeeTooltip(tooltipText: string): Promise<void> {
        await this.page.locator("ngp-tooltip").click();
        await expect(this.tooltip).toContainText(tooltipText);
    }


    async shouldSeeSlider(expectedTitles: string[]): Promise<void> {
        await expect(this.logo).toBeVisible();
        const titles = this.page.locator('ngp-gallery-slider-item-title');
        const sliders = this.page.locator('div.swiper-pagination span.swiper-pagination__bullet');
        const count = await sliders.count();

        for (let i = 0; i < count; i++) {
            const slider = sliders.nth(i);
            await slider.click();
            //wait for animation changes
            await this.page.waitForTimeout(300);
            await expect(slider).toHaveClass(/swiper-pagination__bullet--active/, {timeout: 3000});
            const title = titles.nth(i);
            await expect(title).toBeVisible({timeout: 3000});
            await expect(title).toContainText(expectedTitles[i]);
        }
    }
}