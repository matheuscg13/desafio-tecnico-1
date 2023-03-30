import {AppDataSource} from "../../data-source"
import { Users } from "../../entities/user.entitiy"
import { IUser } from "../../interfaces/users.interfaces"
import { listUsersSchema } from "../../serializers/users.serializers"

export const getAllUsersService = async () => {
    const usersRepository = AppDataSource.getRepository(Users)

    const listUsers = await usersRepository.find({
        relations: {
            listContacts: true
    }})

    const listUsersToBeReturned = await listUsersSchema.validate(listUsers, {
        stripUnknown: true
    })

    return listUsersToBeReturned
}