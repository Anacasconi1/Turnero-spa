"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentsController = exports.addAppointmentsController = void 0;
const appointmentServices_1 = require("../services/appointmentServices");
const addAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = req.body;
        const response = yield (0, appointmentServices_1.createNewAppointService)(appointment);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo crear el appointment",
            error: error
        });
    }
});
exports.addAppointmentsController = addAppointmentsController;
const cancelAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield (0, appointmentServices_1.cancellerAppointsService)(parseInt(id));
        res.status(200).json({ message: "Appointment cancelado con exito", response });
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo cancelar el appointment",
            error: error
        });
    }
});
exports.cancelAppointmentsController = cancelAppointmentsController;
