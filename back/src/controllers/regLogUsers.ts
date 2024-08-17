//aca van a estar los el registro y el login

import { Request, Response } from "express";
import { createNewUserService } from "../services/usersService";
import UserDto from "../dto/Userdto";
import { User } from "../entities/User";
import {
    credentialExistingService,
    logOutUser,
} from "../services/cedentialService";
import { senderMail } from "../services/mailService";

export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user: UserDto = req.body;
        const result: User = await createNewUserService(user);
        await senderMail(user)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({
            message: "No se pudo registrar al usuario",
            error: error,
        });
    }
};

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await credentialExistingService(username, password);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: "Usuario o contraseña incorrectos",
            error,
        });
    }
};

export const logoutUserController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await logOutUser(Number(id));
        res.status(200).json({ message: "Usuario deslogueado correctamente." });
    } catch (error) {
		res.status(400).json(error)
	}
};
