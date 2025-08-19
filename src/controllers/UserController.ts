import { Request, Response } from 'express';
import {createUser} from '@/services/UserServices';
import { IUser } from '@/models/UserModels';
import mongoose from 'mongoose';

class UserController{
    // Here you would typically handle user registration logic, such as saving the user to a database.
    async registerUser(req: Request, res: Response) {
        const User:IUser = req.body;

         try {
            await createUser(User)
            return res.status(200).json(
                {
                    message: 'User registered successfully',
                    status: 200
                }
            )

        } catch (error: unknown) {
            if(error instanceof mongoose.Error.ValidationError){
                return res.status(400).json(
                    {
                        message: error.message,
                        status: 400
                    }
                )
            }
            return res.status(500).json(
                {
                    message: 'Error registering user:',
                    error: (error as Error).message,
                    status: 500
                }
            )
            
        }

    }
}

export {
    UserController
}