import * as Express from "express";

export const hogeController = (
    req: Express.Request,
    res: Express.Response
): void => {
    const data = {
        title: "hogeController!!",
        contents: "hoge sandesu."
    };
    res.render("./hoge.ejs", data);
};
