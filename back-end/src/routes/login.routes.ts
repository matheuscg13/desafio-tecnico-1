import { Router } from "express";
import { loginController } from "../controllers/users/login.controller";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { loginSchema } from "../serializers/login.serializers";

export const loginRoutes = Router()

loginRoutes.use("", validateDataMiddleware(loginSchema), loginController)