import { DataSource } from "typeorm"
import { Appointments } from "../entities/Appointments"
import { Credential } from "../entities/Credentials"
import { User } from "../entities/User"
import { DATABASE, DBPORT, PASSWORD, DBUSERNAME } from "./envs"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: DBPORT,
    username: DBUSERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: false,
    entities: [Appointments, Credential, User],
    subscribers: [],
    migrations: [],
    // dropSchema : true
})


export const AppointmentModel = AppDataSource.getRepository(Appointments)
export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
