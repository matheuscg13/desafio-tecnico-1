import { Request, Response} from "express";
import { IUserLogin } from "../../interfaces/users.interfaces";
import { loginService } from "../../services/users/login.service";

export const loginController = async (req:Request, resp:Response) => {
    const userData: IUserLogin = req.body
    const data = await loginService(userData)
    resp.status(200).json(data)
}