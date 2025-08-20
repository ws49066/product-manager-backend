import { IProduct } from "@/models/ProductModels";
import { createProduct, getAllProducts, getProductById } from "@/services/ProductServices";
import { Request, Response } from "express";
import mongoose from "mongoose";

interface IRequestWithUser extends Request {
    user: {
        username: string;
        role: string;
    };
}

async function addProduct(req:Request, res:Response){
    const {username, role} = req.user as IRequestWithUser['user'];

    const { name, price, description } = req.body as IProduct;

    const product: IProduct = {
        name,
        price,
        description,
        createdBy: username,
        role, // Assuming createdBy is the username of the user adding the product
        createdAt: new Date(), // Set current date as createdAt
        updatedAt: new Date()  // Set current date as updatedAt
    }

    try {
        const productCreate = await createProduct(product);
        return res.status(201).json({
            message: "Product added successfully",
            data: productCreate,
            status: 201
        })
    } catch (error: unknown) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        }
        return res.status(500).json({
            message: 'An unexpected error occurred',
            error: (error as Error).message || 'Unknown error',
            status: 500
        });
        
    }
}

async function getProduct(req: Request, res: Response) {
    const {id} = req.query;

    console.log("Product ID:", id);

    try {
        const products = await getProductById(id);
        return res.status(200).json({
            message: "Products retrieved successfully",
            data: products,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred while retrieving products',
            error: (error as Error).message || 'Unknown error',
            status: 500
        });
    }
}

async function getAll(req: Request, res: Response) {
    try {
        const products = await getAllProducts();
        return res.status(200).json({
            message: "All products retrieved successfully",
            data: products,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred while retrieving all products',
            error: (error as Error).message || 'Unknown error',
            status: 500
        });
    }
}

export { addProduct, getProduct, getAll };