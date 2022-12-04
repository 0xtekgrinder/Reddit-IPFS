import { Request, Response, NextFunction } from "express";
import verifyArguments from "./verifyArguments.js";

export function postMiddleware(req: Request, res: Response, next: NextFunction) {
    let valid = verifyArguments([
        req.params.cid,
    ])

    if (!valid) {
        return res.status(400).json({
            error: "Missing arguments"
        });
    }
    next();
}

export function postCommentMiddleware(req: Request, res: Response, next: NextFunction) {
    let valid = verifyArguments([
        req.params.pid,
        req.body.content,
    ])

    if (!valid) {
        return res.status(400).json({
            error: "Missing arguments"
        });
    }
    next();
}