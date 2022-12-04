import { Request, Response, NextFunction } from "express";
import verifyArguments from "./verifyArguments.js";

export function subMiddleware(req: Request, res: Response, next: NextFunction) {
    let valid = verifyArguments([
        req.body.title,
        req.body.content,
    ])

    if (!valid) {
        return res.status(400).json({
            error: "Missing arguments"
        });
    }
    next();
}

export function subCidMiddleware(req: Request, res: Response, next: NextFunction) {
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

export function subPostMiddleware(req: Request, res: Response, next: NextFunction) {
    let valid = verifyArguments([
        req.params.cid,
        req.body.title,
        req.body.content,
    ])

    if (!valid) {
        return res.status(400).json({
            error: "Missing arguments"
        });
    }
    next();
}