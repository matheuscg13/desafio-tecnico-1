import { hashSync } from "bcryptjs";
import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn,Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Contacts } from "./contact.entity";

@Entity("users")
class Users {
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

    @Column()
    password: string

    @OneToMany(() => Contacts, (contacts) => contacts.user)
    listContacts: Contacts[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10) 
    }
}

export { Users };