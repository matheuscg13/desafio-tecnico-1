// @ts-nocheck

import { Request, Response } from "express"
import { iContact } from "../../interfaces/contacts.interfaces"
import { IUserRequest } from "../../interfaces/users.interfaces"
import { createContactService } from "../../services/contacts/createContact.service"
import { createUserService } from "../../services/users/createUser.service"


export const createContactController = async (req: Request, resp: Response) => {
    const ContactData: iContact = req.body
    const data = await createContactService(ContactData, req.loggedUser.id)
    return resp.status(201).json(data)
}