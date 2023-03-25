// @ts-nocheck

import { NextFunction, Response } from "express"
import { AppError } from "../errors"
import jwt from "jsonwebtoken"

export const verifyLoginMiddleware = async (req: any, resp: Response, next: NextFunction) => {

    let token = req.headers.authorization
    token = token.split(' ')[1]

    if(!token){
        throw new AppError("Invalid Token", 401)
    }


    jwt.verify(token, process.env.SECRET_KEY, (error: Error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 404)
        }

    })
    return next()
}