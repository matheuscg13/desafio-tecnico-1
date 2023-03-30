// @ts-nocheck

import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { iContact, iContactResponse} from '../interfaces/contacts.interfaces'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/users.interfaces'
import { createUserRequestSchema, createUserResponseSchema } from './users.serializers'

export const contactsSchema:SchemaOf<iContact> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    registerDate: yup.date().required(),
    number: yup.string().required(),
    userId: yup.string()
})


export const contactsResponseSchema:SchemaOf<iContactResponse> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.string().required(),
    registerDate: yup.date().required(),
    user: createUserRequestSchema
})

export const updateContactRequestSchema:SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    number: yup.string(),
})

export const listContactsSchemaNoneUser = yup.array(contactsSchema)
export const listContactsSchema = yup.array(contactsResponseSchema)