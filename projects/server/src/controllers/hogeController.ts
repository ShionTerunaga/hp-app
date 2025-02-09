import * as Express from "express";

export const hogeController = (
    req: Express.Request,
    res: Express.Response
): void => {
    res.render("./hoge.ejs");
};
