import { BaseApi } from '@api/baseApi';
import { UserCreateRequestData, UserResponseData } from '@utils/testData';

export class UserApi extends BaseApi {

    async getUser(userId: string): Promise<UserResponseData> {
        const response = await this.getRequest('/user', { user_id: userId });
        return await response.json();
    }

    async createUser(data: UserCreateRequestData): Promise<UserResponseData> {
        const response = await this.postRequest('/user', data);
        return await response.json();
    }
}