import { IUser } from "@/models/UserModels";
import { UserModel } from "@/models/UserModels";
import bcrypt from "bcrypt";

async function createUser({username, password, role}: IUser){
    const hashPassword = bcrypt.hash(password, 12);

    const newUser: IUser = {
        username,
        password: await hashPassword,
        role
    };

    await UserModel.create(newUser);


    return newUser;
}

async function getUserByUsername(username: string) {
    const user = await UserModel.findOne({ username });
    return user;
}

export {
    createUser,
    getUserByUsername
}