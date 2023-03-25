import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { iContact, iContactResponse} from '../interfaces/contacts.interfaces'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/users.interfaces'
import { createUserResponseSchema } from './users.serializers'

export const contactsSchema:SchemaOf<iContact> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    registerDate: yup.date().required(),
    userId: yup.string().required()
})


export const contactsResponseSchema:SchemaOf<iContactResponse> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    registerDate: yup.date().required(),
    user: createUserResponseSchema
})

export const listContactsSchema = yup.array(contactsResponseSchema)