"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointments = exports.Users = void 0;
const IAppointments_1 = require("../interfaces/IAppointments");
exports.Users = [
    {
        id: 1,
        name: "Ana Sabrina Casconi",
        email: "sabriicasconii@gmail.com",
        birthDate: "14/01/2002",
        nDni: 43546321,
        credentialID: 1
    },
    {
        id: 2,
        name: "Jose Nuñez",
        email: "josen@gmail.com",
        birthDate: "02/07/1997",
        nDni: 40561248,
        credentialID: 2
    },
    {
        id: 3,
        name: "Pablo Blanco",
        email: "blpab@gmail.com",
        birthDate: "10/11/2000",
        nDni: 41562348,
        credentialID: 3
    },
];
exports.appointments = [
    {
        id: 1,
        date: "01/10/2024",
        time: "10:20",
        userID: 2,
        status: IAppointments_1.Status.ACTIVE,
    }, {
        id: 2,
        date: "12/11/2021",
        time: "12:40",
        userID: 3,
        status: IAppointments_1.Status.ACTIVE,
    }, {
        id: 3,
        date: "01/09/2024",
        time: "15:15",
        userID: 1,
        status: IAppointments_1.Status.ACTIVE
    },
];
