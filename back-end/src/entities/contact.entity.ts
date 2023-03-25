import {Column, CreateDateColumn,Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Users } from "./user.entitiy";

@Entity("contacts")
class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    number: string

    @CreateDateColumn()
    registerDate: Date

    @ManyToOne(() => Users)
    user: Users;
}

export { Contacts };