import "express-async-errors";
import express from "express"
import { handleError } from "./errors"
import { userRoutes } from "./routes/user.routes"
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)
app.use(handleError)
export default app;