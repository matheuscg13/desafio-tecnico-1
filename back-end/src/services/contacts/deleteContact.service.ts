import {AppDataSource} from "../../data-source"
import { Contacts } from "../../entities/contact.entity"
import { AppError } from "../../errors"

export const deleteContactService = async (contactId: string):Promise<void> => {
    const contactsRepository = AppDataSource.getRepository(Contacts)
    
    const contactToBeDeleted = await contactsRepository.findOne({where: {
        id: contactId
    },
})
    
    if(!contactToBeDeleted){
        throw new AppError("This user not exist", 404)
    }
    

    await contactsRepository.remove(contactToBeDeleted)

    await contactsRepository.save({...contactToBeDeleted})
  
    return
}