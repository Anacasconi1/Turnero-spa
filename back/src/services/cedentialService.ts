import { AppointmentModel, CredentialModel, UserModel } from "../config/data.source";
import CredentialsDto from "../dto/Credentialsdto";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";
import { loginIsValid } from "../middlewares/loginValid";


export const credentialService = async (credDto: CredentialsDto) => {
    const credential: Credential = await CredentialModel.create(credDto);
    credential.login = false
    await CredentialModel.save(credential);
    return credential;
};

export const credentialExistingService = async (
    username: string,
    password: string,
) => {
    try {
        return await loginIsValid(username, password);
    } catch (error) {
        throw error
    }
};

export const logOutUser = async(id: number)=>{
    try {
        const user:User|null  = await UserModel.findOne({where: {
            id: id
        }, relations: {
            credentialID: true
        } 
    })
    if (user){
        let loginProperty = user.credentialID;
            if (loginProperty && loginProperty.login == true){
                loginProperty.login = false
            }else {
                throw Error("No es posible desloguearse")
            }          
            CredentialModel.save(loginProperty);
        }
        else{
            
            throw Error("No se pudo desloguar al usuario");
            
        }
        
    } catch (error) {
        throw error
    }
    
}


