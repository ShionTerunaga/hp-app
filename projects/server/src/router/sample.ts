import { Router, Response } from "express";
import { appConfig } from "../shared/config";

export const sampleRouter = Router();

/**
 * Hello world出力のAPI
 */
sampleRouter.get(appConfig.router.sample.hello, (_, res: Response) => {
    res.send("Hello World!");
});
