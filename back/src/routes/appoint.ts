import { Router } from "express";
import { getAllAppointmentsController, getOneAppointmentController } from "../controllers/getAppoint";
import { addAppointmentsController, cancelAppointmentsController } from "../controllers/appointAddCancell";

export const appointRouter: Router = Router();

appointRouter.get("/", getAllAppointmentsController);
appointRouter.get("/:id", getOneAppointmentController);
appointRouter.post("/schedule", addAppointmentsController);
appointRouter.put("/cancel/:id", cancelAppointmentsController);
