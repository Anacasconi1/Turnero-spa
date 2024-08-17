import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity ()
export class Appointments {
    @PrimaryGeneratedColumn() 

    id: number

    @Column()
    date: string

    @Column()
    time: string
    
    @Column ()
    status: Status

    @ManyToOne (()=> User, (user)=> user.appointments)
    user : User
}

export enum Status {
    ACTIVE = "activo",
    CANCELLED = "cancelado"
}

