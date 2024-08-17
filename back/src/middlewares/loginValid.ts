import { CredentialModel, UserModel } from "../config/data.source";
import { Credential } from "../entities/Credentials";

//ya se que no es un middleware pero no sabia donde guardar la validacion
export const loginIsValid = async (username: string, password: string)=>{
    const cred = await CredentialModel.findOneBy({username})
    if(cred){
        if(cred.password === password){
            cred.login = true
            await CredentialModel.save(cred)
            return await getByUserByCredential(cred)
        }
    }
    else{
        throw Error ("Usuario o contraseña incorrectos")
    }
}

const getByUserByCredential = async(cred: Credential)=>{
    const user = await UserModel.findOneBy({credentialID: cred})
    return user
}