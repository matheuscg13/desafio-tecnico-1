import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contacts.interfaces";
import { updateContactService } from "../../services/contacts/updateContact.service";
import { updateUserService } from "../../services/users/updateUser.service";


export const updateContactController = async (req: Request, resp: Response) => {
    const contactData: IContactUpdate = req.body
    const data = await updateContactService(contactData, req.params.id)
    return resp.status(200).json(data)
}