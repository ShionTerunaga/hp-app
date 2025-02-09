import * as Express from "express";

export default function noImpl(
    req: Express.Request,
    res: Express.Response
): void {
    res.status(501).json({ message: "Not Implemented." });
}
