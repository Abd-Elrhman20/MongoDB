import { Router } from "express";
import { deleteUser, editUser, getAllUsers, getSpecificUser, login, register } from "./user.controllers.js";
import { ownerMiddleware } from "./user.middlewares.js";

const userRouter = Router()

// userRouter.use("/:id", ownerMiddleware)

userRouter.get('/', getAllUsers)
    .get('/:id', getSpecificUser).put('/:id', ownerMiddleware, editUser).delete('/:id', ownerMiddleware, deleteUser)
    .post('/login', login).post('/register', register)


export default userRouter