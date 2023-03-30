import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/users.interfaces'
import { contactsSchema, listContactsSchemaNoneUser } from './contacts.serializers'


export const createUserRequestSchema:SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    number: yup.string().required(),
})

export const createUserResponseSchema:SchemaOf<IUser> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    registerDate: yup.date().required(),
    number: yup.string().required(),
    listContacts: listContactsSchemaNoneUser
})

export const listUsersSchema = yup.array(createUserResponseSchema)

export const updateUserRequestSchema:SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    number: yup.string(),
    password: yup.string()
})