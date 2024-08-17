import { NextFunction, Response, Request } from "express";
import { CredentialModel } from "../config/data.source";
import UserDto from "../dto/Userdto";

export const credAlreadyExisting = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user: UserDto = await req.body;

        const credential = await CredentialModel.findOneBy({username: user.username})

        if (credential) {
            next("El usuario ya existe, intenta creando otro o ingresando si tienes acceso");
        } else {
            next();
        }
    } catch (error) {
        next("Ingrese campos validos");
        
    }
};
