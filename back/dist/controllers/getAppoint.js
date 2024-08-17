"use strict";
//aca va a estar el listado de los appointments en general y por particular
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
exports.getOneAppointmentController = exports.getAllAppointmentsController = void 0;
const appointmentServices_1 = require("../services/appointmentServices");
const data_source_1 = require("../config/data.source");
const getAllAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, appointmentServices_1.getAllAppointmentsServices)();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo obtener todos los appointments",
            error: error
        });
    }
});
exports.getAllAppointmentsController = getAllAppointmentsController;
const getOneAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramID = yield req.params.id;
        const appointments = yield data_source_1.AppointmentModel.find();
        const response = yield (0, appointmentServices_1.returnAppointByIDService)(appointments, parseInt(paramID));
        res.status(200).json();
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo obtener el appointment requerido",
            error: error
        });
    }
});
exports.getOneAppointmentController = getOneAppointmentController;
