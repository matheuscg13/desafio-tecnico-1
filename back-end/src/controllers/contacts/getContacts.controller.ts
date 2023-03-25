import { Request, Response } from "express";
import { AppError } from "../../errors";
import { getAllContactsService } from "../../services/contacts/getAllContacts.service";
import { getAllUsersService } from "../../services/users/getAllUsers.service";


export const getAllUContactsController = async (req: Request, resp: Response) => {
    const data = await getAllContactsService()
    resp.status(200).json(data)
}