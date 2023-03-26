import {AppDataSource} from "../../data-source"
import { Users } from "../../entities/user.entitiy"
import { createUserResponseSchema } from "../../serializers/users.serializers"

export const getProfileService = async (userId: string) => {
    const usersRepository = AppDataSource.getRepository(Users)

    const user = await usersRepository.findOne({
        where: {
            id: userId
        }
    })

    const userToBeReturned = await createUserResponseSchema.validate(user, {
        stripUnknown: true
    })

    return userToBeReturned
}