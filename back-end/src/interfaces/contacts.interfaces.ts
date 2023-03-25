import { IUser } from "./users.interfaces"

export interface iContact {
    id: string
    name: string
    email: string
    registerDate: Date
    userId: string
}

export interface iContactResponse {
    id: string
    name: string
    email: string
    registerDate: Date
    user: IUser
}

export interface IContactUpdate {
    name?: string
    email?: string
    password?: string
}