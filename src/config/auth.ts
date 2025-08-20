import fs from "fs"

const privateKey = fs.readFileSync(process.env.JWT_PRIVATE_KEY_PATH || "./keys/key.pem", "utf8");
const publicKey = fs.readFileSync(process.env.JWT_PUBLIC_KEY_PATH || "./keys/key.pub", "utf8");

const authConfig = {
    privateKey,
    publicKey,
}

export default authConfig;