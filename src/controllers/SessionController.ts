import { getUserByUsername } from "@/services/UserServices";
import e, { Request, Response } from "express";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import authConfig from "@/config/auth";

// Add methods for handling session-related requests
async function createSession(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password.",
    });
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid username or password.",
    });
  }
  const { privateKey } = authConfig;

  const payload = {
    role: user.role,
  };

  const token = jwt.sign(payload, privateKey, {
    expiresIn: "1h",
    algorithm: "RS256" as jwt.Algorithm,
    subject: user.username,
  });

  // Logic for creating a session
  res.status(200).json({
    message: "Login successfully.",
    token,
    status: 200,
  });
}

async function getSession(req: Request, res: Response) {
  // Logic for retrieving a session
  res.send("Session details!");
}

async function deleteSession(req: Request, res: Response) {
  // Logic for deleting a session
  res.send("Session deleted!");
}

export { createSession, getSession, deleteSession };
