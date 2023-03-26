// @ts-nocheck

import { Request, Response } from "express";
import { getProfileService } from "../../services/users/profile.service";


export const getProfileController = async (req: Request, resp: Response) => {
    const data = await getProfileService(req.loggedUser.id)
    return resp.status(200).json(data)
}