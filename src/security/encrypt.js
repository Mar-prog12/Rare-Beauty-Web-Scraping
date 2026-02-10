import crypto from "crypto";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// gjej root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ngarko .env nga ROOT
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

const key = process.env.ENCRYPTION_KEY;
if (!key) {
  throw new Error("ENCRYPTION_KEY is missing from .env");
}

const keyBuffer = Buffer.from(key, "utf8");
const iv = Buffer.alloc(16, 0);

export function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
