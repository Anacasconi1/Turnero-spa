"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModel = exports.UserModel = exports.AppointmentModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Appointments_1 = require("../entities/Appointments");
const Credentials_1 = require("../entities/Credentials");
const User_1 = require("../entities/User");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: envs_1.DBPORT,
    username: envs_1.USERNAME,
    password: envs_1.PASSWORD,
    database: envs_1.DATABASE,
    synchronize: true,
    logging: false,
    entities: [Appointments_1.Appointments, Credentials_1.Credential, User_1.User],
    subscribers: [],
    migrations: [],
    dropSchema: true
});
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointments_1.Appointments);
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(Credentials_1.Credential);
