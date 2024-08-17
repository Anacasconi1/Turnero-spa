//aca va a estar el listado de los appointments en general y por particular

import { Request, Response } from "express"
import { getAllAppointmentsServices, returnAppointByIDService } from "../services/appointmentServices";
import { AppointmentModel } from "../config/data.source";

export const getAllAppointmentsController = async(req: Request, res: Response)=> {
    try {
        const response = await getAllAppointmentsServices()
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({
            message: "No se pudo obtener todos los appointments",
            error : error
        })
    }
}

export const getOneAppointmentController = async (req: Request, res: Response)=> {
    try {
    const paramID = await req.params.id;
    const appointments = await AppointmentModel.find()
    const response = await returnAppointByIDService(appointments, parseInt(paramID));
    res.status(200).json();
    } catch (error) {
        res.status(404).json({
            message: "No se pudo obtener el appointment requerido",
            error : error
        })
    }
}
