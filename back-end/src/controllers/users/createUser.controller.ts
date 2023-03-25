
import { Request, Response } from "express"
import { IUserRequest } from "../../interfaces/users.interfaces"
import { createUserService } from "../../services/users/createUser.service"


export const createUserController = async (req: Request, resp: Response) => {
    const userData: IUserRequest = req.body
    const data = await createUserService(userData)
    return resp.status(201).json(data)
}
