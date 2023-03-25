import {AppDataSource} from "../../data-source"
import { Contacts } from "../../entities/contact.entity"

export const getAllContactsService = async () => {
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const listContacts = await contactsRepository.find()


    return listContacts

}