import { APIRequestContext, expect } from '@playwright/test';
import { UserCreateRequestData } from '@utils/testData';

export class BaseApi {
    protected request: APIRequestContext;
    protected baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async getRequest(path: string, params?: Record<string, any>) {
        const response = await this.request.get(`${this.baseURL}${path}`, { params });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        return response;
    }

    async postRequest(path: string, data: UserCreateRequestData) {
        const response = await this.request.post(`${this.baseURL}${path}`, { data });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        return response;
    }

    async putRequest(path: string, data: UserCreateRequestData) {
        const response = await this.request.put(`${this.baseURL}${path}`, { data });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        return response;
    }

    async deleteRequest(path: string, id: string) {
        const response = await this.request.delete(`${this.baseURL}${path}/${id}`);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        return response;
    }
}
