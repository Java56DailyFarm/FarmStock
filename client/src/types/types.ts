export interface IUser {
	id: string;
	firstName?: string;
	lastName?: string;
	email: string;
	token: string;

}
export interface ILoginDto {
	email: string
	password: string
}
export interface IUserData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export interface IResponseUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	roles?: string[];
	createdAt?: string;
	updatedAt?: string;
	oauthProvider?: string | null;

}

export interface IResponseUserData {
	accessToken: string;
	user: IResponseUser;
}

export interface UpdateUserDto {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string;
	currentPassword?: string;
	newPassword?: string;
	confirmNewPassword?: string;

}