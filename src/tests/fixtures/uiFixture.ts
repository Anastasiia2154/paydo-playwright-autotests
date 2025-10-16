import {test as base} from '@playwright/test';
import {LandingPage} from "@pages/landingPage"

type Fixtures = {
    landingPage: LandingPage;
};

export const test = base.extend<Fixtures>({
    landingPage: async ({page}, use) => {
        await page.goto("/");
        const landing = new LandingPage(page);
        await use(landing);
    },
});