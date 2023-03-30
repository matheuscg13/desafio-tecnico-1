import { Router } from "express";
import { createContactController } from "../controllers/contacts/createContact.controller";
import { deleteContactController } from "../controllers/contacts/deleteContact.controller";
import { getAllUContactsController } from "../controllers/contacts/getContacts.controller";
import { updateContactController } from "../controllers/contacts/updatedContact.controller";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { verifyLoginMiddleware } from "../middlewares/verifyLogin.middleware";
import { verifyPermissionsMiddleware } from "../middlewares/verifyPermission.middleware";
import { updateContactRequestSchema } from "../serializers/contacts.serializers";
import { updateContactService } from "../services/contacts/updateContact.service";

export const contactsRoutes = Router()

contactsRoutes.get("", verifyLoginMiddleware, getAllUContactsController)
contactsRoutes.post("", verifyLoginMiddleware, createContactController)
contactsRoutes.delete("/:id", verifyLoginMiddleware, deleteContactController)
contactsRoutes.patch("/:id", validateDataMiddleware(updateContactRequestSchema), verifyLoginMiddleware, updateContactController)



