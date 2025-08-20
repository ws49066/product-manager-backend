import { IProduct, ProductModel } from "@/models/ProductModels";
import mongoose from "mongoose";

async function createProduct(productData: IProduct) {

    if(productData.role && productData.role !== 'admin') {
        throw new Error('Only admins can create products');
    }
    if (!productData.name || !productData.price || !productData.description) {
        throw new Error('Name, price, and description are required.');
    }
    if (typeof productData.price !== 'number' || productData.price <= 0) {
        throw new Error('Price must be a positive number.');
    }


    const newProduct: IProduct = {
        name: productData.name,
        description: productData.description,
        price: productData.price,
        createdBy: productData.createdBy
    };

    await ProductModel.create(newProduct);

    return newProduct;
}

async function getProductById(productId: string) {
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
        throw new Error('Invalid product ID');
    }

    const product = await ProductModel.findById(productId);
    
    if (!product) {
        throw new Error('Product not found');
    }

    return product;
}

async function getAllProducts() {
    const products = await ProductModel.find({});
    return products;
}

export {
    createProduct,
    getProductById,
    getAllProducts
}