import express from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { register, login } from "../controllers/authController";

export const authRouter = express.Router();

authRouter.post("/register", asyncHandler(register));
authRouter.post("/login", asyncHandler(login));
