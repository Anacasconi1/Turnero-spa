import { AppointmentModel } from "../config/data.source";
import AppointsDto from "../dto/Appointsdto";
import { Appointments, Status } from "../entities/Appointments";
import { isUserLoggedForNewAppoint } from "../middlewares/userLogged";

export const getAllAppointmentsServices = async() => {
    const app = await AppointmentModel.find({
        relations: {
            user: true,
        },
    });
    return app;
};

export const returnAppointByIDService = async (
    userAppoint: Appointments[],
    id: number
) => {
    const appointA: Appointments[] = [];
    await userAppoint.forEach((appoint) => {
        if (appoint.id == id) {
            appointA.push(appoint);
        }
    });
    return appointA[0];
};

export const cancellerAppointsService = async (id: number) => {
    const app = await AppointmentModel.findOneBy({ id });
    if (app) {
        app.status = Status.CANCELLED;
        AppointmentModel.save(app);
        return app;
    } else {
        throw "Turno no encontrado";
    }
};

export const createNewAppointService = async (newApp: AppointsDto) => {
    try {
        await isUserLoggedForNewAppoint(newApp); 
    } catch (error) {
        throw error
    }
};
