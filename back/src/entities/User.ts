import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";
import { Appointments } from "./Appointments";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn("increment")
    id : number

    @Column()
    name : string

    @Column()
    email: string

    @Column()
    birthDate: string

    @Column()
    nDni: number

    @OneToOne(()=> Credential)
    @JoinColumn()
    credentialID: Credential

    @OneToMany(()=> Appointments, (appointment) => appointment.user)
    appointments : Appointments[]
}

