import {AppDataSource} from "../../data-source"
import { Users } from "../../entities/user.entitiy"
import { AppError } from "../../errors"

export const deleteUserService = async (userId: string):Promise<void> => {
    const usersRepository = AppDataSource.getRepository(Users)
    
    const userToBeDeleted = await usersRepository.findOne({where: {
        id: userId
    },
})
    
    if(!userToBeDeleted){
        throw new AppError("This user not exist", 404)
    }
    

    await usersRepository.remove(userToBeDeleted)

    await usersRepository.save({...userToBeDeleted})
  
    return
}