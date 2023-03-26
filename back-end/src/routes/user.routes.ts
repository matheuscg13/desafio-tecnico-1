import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { getProfileController } from "../controllers/users/getProfileController";
import { getAllUsersController } from "../controllers/users/getUsers.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { verifyLoginMiddleware } from "../middlewares/verifyLogin.middleware";
import { verifyPermissionsMiddleware } from "../middlewares/verifyPermission.middleware";
import { createUserRequestSchema, updateUserRequestSchema } from "../serializers/users.serializers";

export const userRoutes = Router()


userRoutes.get("",verifyLoginMiddleware, getAllUsersController)
userRoutes.delete("/:id", verifyPermissionsMiddleware, verifyPermissionsMiddleware, deleteUserController)
userRoutes.post("",validateDataMiddleware(createUserRequestSchema), createUserController)
userRoutes.patch("/:id", verifyPermissionsMiddleware, validateDataMiddleware(updateUserRequestSchema), updateUserController)
userRoutes.get("/profile", verifyLoginMiddleware, getProfileController)