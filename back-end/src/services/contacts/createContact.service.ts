// @ts-nocheck
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { Users } from "../../entities/user.entitiy";
import { iContact } from "../../interfaces/contacts.interfaces";

export const createContactService = async (contactData: iContact, userId: string) => {
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const usersRepository = AppDataSource.getRepository(Users)
    
    const user = await usersRepository.findOneBy({
        id: userId
    })


    const contact = contactsRepository.create({
        ...contactData,
        user
    })

    return await contactsRepository.save(contact)




}