import {AppDataSource} from "../../data-source";
import { Users } from "../../entities/user.entitiy";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users.interfaces";
import { createUserResponseSchema } from "../../serializers/users.serializers";


export const updateUserService = async (userData: IUserUpdate, userId: string) => {
    const usersRepository = AppDataSource.getRepository(Users)

    const userToBeUpdated = await usersRepository.findOne({
        where: {
            id: userId
        },
        withDeleted: true
    })

    if(!userToBeUpdated){
        throw new AppError("User not Found", 404)
    }

    const userUpdated = usersRepository.create({
        ...userToBeUpdated,
        ...userData
    })

    await usersRepository.save(userUpdated)

    const findUserToBeReturned = await usersRepository.findOneBy({
        id: userId
    })

    const userToBeReturned = await createUserResponseSchema.validate(findUserToBeReturned, {
        stripUnknown: true
    })

    return userToBeReturned
}