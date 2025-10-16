import {test, expect} from '../fixtures/apiFixture';
import {UserCreateRequestData, UserResponseData} from '@utils/testData';

test.describe('User API tests', () => {

    test('POST and GET /user test', async ({userApi}) => {
        const userData: UserCreateRequestData = {
            username: 'TestUserName',
            age: 18,
            user_type: true,
        };

        const newUser: UserResponseData = await userApi.createUser(userData);
        expect(newUser.user_id).toBeDefined();
        expect(newUser.username).toBe(userData.username);

        const createdUser: UserResponseData = await userApi.getUser(newUser.user_id);
        expect(createdUser.user_id).toBe(newUser.user_id);
        expect(createdUser.username).toBe(userData.username);
        expect(createdUser.age).toBeGreaterThanOrEqual(1);
        expect(createdUser.age).toBeLessThanOrEqual(100);
    });

});