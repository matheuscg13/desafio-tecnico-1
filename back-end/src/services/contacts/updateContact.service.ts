import {AppDataSource} from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { Users } from "../../entities/user.entitiy";
import { AppError } from "../../errors";
import { IContactUpdate } from "../../interfaces/contacts.interfaces";
import { IUserUpdate } from "../../interfaces/users.interfaces";
import { createUserResponseSchema } from "../../serializers/users.serializers";


export const updateContactService = async (contactData: IContactUpdate, contactId: string) => {
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const contactToBeUpdated = await contactsRepository.findOne({
        where: {
            id: contactId
        }
    })

    if(!contactToBeUpdated){
        throw new AppError("Contact not Found", 404)
    }

    const contactUpdate = contactsRepository.create({
        ...contactToBeUpdated,
        ...contactData
    })

    await contactsRepository.save(contactUpdate)

    const findContactToBeReturned = await contactsRepository.findOneBy({
        id: contactId
    })



    return findContactToBeReturned
}