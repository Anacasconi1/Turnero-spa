import { Router } from "express";
import { getAllUsersController, getOneUserController } from "../controllers/getUsers";
import { loginUserController, logoutUserController, registerUserController } from "../controllers/regLogUsers";
import { validationUser } from "../middlewares/validFields";
import { credAlreadyExisting } from "../middlewares/CredExisting";

export const userRouter: Router = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getOneUserController);
userRouter.post("/register", validationUser, credAlreadyExisting, registerUserController);
userRouter.post("/login", loginUserController);
userRouter.post("/logout/:id", logoutUserController);
