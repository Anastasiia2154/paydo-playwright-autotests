import {test} from "../fixtures/uiFixture";

test.describe('Paydo LogIn tests', () => {

    test('Negative login test', async ({landingPage, page}) => {

        await test.step('1. Navigate to Paydo main page', async () => {
            await landingPage.shouldSeeMainPage("Online Payment Solutions in One Platform");
        });

        await test.step('2. Check elements on "Create a personal account" page', async () => {
            const welcomePage = await landingPage.openLogInPage();
            await welcomePage.shouldSeeWelcomeBackPage("Welcome back");
            await welcomePage.fillLogInForm({email: "test@gmail.com", password: "12345"});
            await welcomePage.shouldSeeErrorMessage("The email address or password you entered is incorrect");
        });
    });
});