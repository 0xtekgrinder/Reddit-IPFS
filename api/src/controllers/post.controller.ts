import CommentService from "../services/comment.service.js";
import PostService from "../services/post.service.js";
import { Request, Response } from "express";

export default class PostController {
    public static async comment(req: Request, res: Response): Promise<Response> {
        try {
            await PostService.get(req.params.cid);
            const cid = await CommentService.store(req.body);
            await PostService.addComment(req.params.cid, cid);
            return res.status(201);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async get(req: Request, res: Response): Promise<Response> {
        try {
            const sub = await PostService.get(req.params.cid);
            return res.json(sub);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}