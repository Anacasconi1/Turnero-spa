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
exports.createNewAppointService = exports.cancellerAppointsService = exports.returnAppointByIDService = exports.getAllAppointmentsServices = void 0;
const data_source_1 = require("../config/data.source");
const Appointments_1 = require("../entities/Appointments");
const userLogged_1 = require("../middlewares/userLogged");
const getAllAppointmentsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield data_source_1.AppointmentModel.find({
        relations: {
            user: true,
        },
    });
    return app;
});
exports.getAllAppointmentsServices = getAllAppointmentsServices;
const returnAppointByIDService = (userAppoint, id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointA = [];
    yield userAppoint.forEach((appoint) => {
        if (appoint.id == id) {
            appointA.push(appoint);
        }
    });
    return appointA[0];
});
exports.returnAppointByIDService = returnAppointByIDService;
const cancellerAppointsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield data_source_1.AppointmentModel.findOneBy({ id });
    if (app) {
        app.status = Appointments_1.Status.CANCELLED;
        data_source_1.AppointmentModel.save(app);
        return app;
    }
    else {
        throw "Turno no encontrado";
    }
});
exports.cancellerAppointsService = cancellerAppointsService;
const createNewAppointService = (newApp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userLogged_1.isUserLoggedForNewAppoint)(newApp);
    }
    catch (error) {
        throw error;
    }
});
exports.createNewAppointService = createNewAppointService;
