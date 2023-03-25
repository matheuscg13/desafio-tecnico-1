import { Request, Response } from "express";
import { AppError } from "../../errors";
import { getAllUsersService } from "../../services/users/getAllUsers.service";


export const getAllUsersController = async (req: Request, resp: Response) => {
    const data = await getAllUsersService()
    resp.status(200).json(data)
}