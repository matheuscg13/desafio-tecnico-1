export interface IUserRequest {
    name: string
    email: string
    password: string
    number: string
}

export interface IUser {
    id: string
    name: string
    email: string
    number: string
    registerDate: Date

}


export interface IUserLogin {
    email: string
    password: string
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}