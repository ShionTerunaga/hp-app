import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";

// TODO: DBは配列で仮実装。本番ではMongoDBやPostgreSQLを使用
const users: { email: string; password: string }[] = [];
const SECRET_KEY = "harry_potter";

// 新規登録
export const register = async (req: Request, res: Response): Promise<Response> => {
  await body("email").isEmail().withMessage("Invalid email").run(req);
  await body("password").isLength({ min: 6 }).withMessage("Password too short").run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  return res.status(201).json({ message: "User registered successfully" });
};

// ログイン
export const login = async (req: Request, res: Response): Promise<Response> => {
  await body("email").isEmail().run(req);
  await body("password").notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

  res.cookie("token", token, { httpOnly: true });

  return res.json({ message: "Login successful" });
};

