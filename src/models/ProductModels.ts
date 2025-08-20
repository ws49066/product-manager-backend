import { model, Schema } from 'mongoose';

interface IProduct {
    name: string;
    price: number;
    description: string;
    role?: string; // Optional, can be used to specify the role of the user creating the product
    createdBy: string; // Assuming this is a user ID or username
    createdAt?: Date; // Optional, defaults to current date
    updatedAt?: Date; // Optional, defaults to current date
}


const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    createdBy: { type: String, required: true }, // Optional field for the user who created the product
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const ProductModel = model<IProduct>('Products', ProductSchema);

export { IProduct , ProductModel};