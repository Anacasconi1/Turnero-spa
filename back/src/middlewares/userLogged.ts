import { AppointmentModel, UserModel } from "../config/data.source";
import AppointsDto from "../dto/Appointsdto";
import { Status } from "../entities/Appointments";

//ya se que no es un middleware pero no sabia donde guardar la validacion

export const isUserLoggedForNewAppoint = async (newApp: AppointsDto)=>{
    const app = {
        date: newApp.date,
        time: newApp.time,
        status: Status.ACTIVE,
    };
    const user = await UserModel.findOne({
        where: {
            id: newApp.user,
        },
        relations: {
            credentialID: true,
        },
    });
    
    if (user) {
        if (user.credentialID.login === true) {
            const appoint = await AppointmentModel.create(app);
            const response = await AppointmentModel.save(appoint);
            appoint.user = user;
            AppointmentModel.save(appoint);
            return response;
        }
    } else {
        throw Error("No se ha encontrado el Usuario");
    }

}
