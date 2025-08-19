import { IUser } from "@/models/UserModels";
import { UserModel } from "@/models/UserModels";
import bcrypt from "bcrypt";

async function createUser({username, password, rules}: IUser){
    const hashPassword = bcrypt.hash(password, 12);

    const newUser: IUser = {
        username,
        password: await hashPassword,
        rules
    };

    await UserModel.create(newUser);


    return newUser;
}

export {
    createUser
}