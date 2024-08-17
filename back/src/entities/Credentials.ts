import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Credential {
    @PrimaryGeneratedColumn("increment")
    id : number

    @Column()
    username : string

    @Column()
    password: string

    @Column()
    login: boolean

}

