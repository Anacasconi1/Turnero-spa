//aca va a estar el agendado y cancelacion de los appointments
import { Request, Response } from "express"
import { createNewAppointService, cancellerAppointsService } from "../services/appointmentServices";

export const addAppointmentsController = async(req: Request, res: Response)=> {
    try {
        const appointment = req.body;
        const response = await createNewAppointService(appointment);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({
            message: "No se pudo crear el appointment",
            error : error
        })
    }
}

export const cancelAppointmentsController = async (req: Request, res: Response)=> {
    try {
        const id = req.params.id;
        const response = await cancellerAppointsService(parseInt(id))
        res.status(200).json({message : "Appointment cancelado con exito" , response});
    } catch (error) {
        res.status(404).json({
            message: "No se pudo cancelar el appointment",
            error : error
        })
    }
}
