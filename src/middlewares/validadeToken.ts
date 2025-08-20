import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import authConfig from "@/config/auth";

interface ITokenPayload {
    role: string;
    sub: string
}


function validadeToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers?.authorization
    const {publicKey} = authConfig;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    try {
        const {sub:username, role } = jwt.verify(token, publicKey) as ITokenPayload;
        req.user = {
            username,
            role
        }

    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
    
    return next();
}

export {
    validadeToken
}