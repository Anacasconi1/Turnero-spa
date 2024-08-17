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
exports.isUserLoggedForNewAppoint = void 0;
const data_source_1 = require("../config/data.source");
const Appointments_1 = require("../entities/Appointments");
//ya se que no es un middleware pero no sabia donde guardar la validacion
const isUserLoggedForNewAppoint = (newApp) => __awaiter(void 0, void 0, void 0, function* () {
    const app = {
        date: newApp.date,
        time: newApp.time,
        status: Appointments_1.Status.ACTIVE,
    };
    const user = yield data_source_1.UserModel.findOne({
        where: {
            id: newApp.userId,
        },
        relations: {
            credentialID: true,
        },
    });
    if (user) {
        if (user.credentialID.login === true) {
            const appoint = yield data_source_1.AppointmentModel.create(app);
            const response = yield data_source_1.AppointmentModel.save(appoint);
            appoint.user = user;
            data_source_1.AppointmentModel.save(appoint);
            return response;
        }
    }
    else {
        throw Error("No se ha encontrado el Usuario");
    }
});
exports.isUserLoggedForNewAppoint = isUserLoggedForNewAppoint;
