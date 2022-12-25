import { Request, Response } from "express";
import CommentService from "../services/comment.service.js";

export default class CommentController {
    public static async get(req: Request, res: Response): Promise<Response> {
        try {
            const sub = await CommentService.get(req.params.cid);
            return res.status(200).json(sub);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}