import { model, Schema } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    role: string
}

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    role: { type: String, required: true , enum: ['user', 'admin'] }
})

const UserModel = model<IUser>('Users', UserSchema);


export { IUser , UserModel};