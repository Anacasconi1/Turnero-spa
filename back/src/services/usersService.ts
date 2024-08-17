import { CredentialModel, UserModel } from "../config/data.source";
import UserDto from "../dto/Userdto";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";
import { credentialService } from "./cedentialService";

export const allUsersRetornerService = async () => {
    const users: User[] = await UserModel.find({
        relations: {
            credentialID: true,
            appointments: true
        },
    });
    return users;
};

export const returnUserByIDService = async (id: number) => {
    const finder = await UserModel.findOne({ where: {id}, relations: {
        appointments: true
    } });
    return finder;
};

export const createNewUserService = async (user: UserDto) => {
    const usercred = {
        username: user.username,
        password: user.password,
    };
    const idCrend: Credential = await credentialService(usercred);
    const userObj = {
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        nDni: user.nDni,
        credentialID: idCrend
    };
    
    const newUser = await UserModel.create(userObj);
    
    const response = UserModel.save(newUser);
    return response;
};
