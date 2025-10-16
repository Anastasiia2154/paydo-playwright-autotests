export interface UserData {
    email: string,
    password: string;
    repeatedPassword?: string;
}

export interface UserCreateRequestData {
    username: string;
    age: number;
    user_type: boolean;
}

export interface UserResponseData {
    user_id: string;
    username: string;
    age: number;
    user_type: boolean;
}