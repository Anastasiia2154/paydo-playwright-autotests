import {test as base} from '@playwright/test';
import {UserApi} from "@api/userApi";

type Fixtures = {
    userApi: UserApi;
};

export const test = base.extend<Fixtures>({
    userApi: async ({request}, use) => {
        const api = new UserApi(request, process.env.API_URL ?? 'https://test-api.com');
        await use(api);
    },
});

export {expect} from '@playwright/test';