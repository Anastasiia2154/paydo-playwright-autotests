import {test} from "../fixtures/uiFixture";
import {CreateAccountPage} from "@pages/createAccountPage";

test.describe('Paydo account tests', () => {

    test('Check elements on "Create a personal account" page', async ({landingPage, page}) => {

        await test.step('1. Navigate to Paydo main page', async () => {
            await landingPage.shouldSeeMainPage("Online Payment Solutions in One Platform");
        });

        await test.step('2. Check elements on "Create a personal account" page', async () => {
            const createAccountPage: CreateAccountPage = await landingPage.openCreateAccountPage();
            await createAccountPage.shouldSeeCreateAccountForm("Create a personal account");
            await createAccountPage.shouldSeeTooltip("Our sales and other teams may contact you by this email, please make sure you are checking it from time to time.");
            await createAccountPage.shouldSeeSlider(["Individual IBANs", "Issuing physical and virtual cards", "Pay with PayDo checkout"]);
        });
    });
});