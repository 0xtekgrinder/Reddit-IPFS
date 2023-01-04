import CommentService from "../services/comment.service.js";
import PostService from "../services/post.service.js";
import SubsService from "../services/subs.service.js";
import { Request, Response } from "express";

export default class PostController {
    public static async addComment(req: Request, res: Response): Promise<Response> {
        try {
            // Get the sub and the post
            const sub = await SubsService.get(req.params.subCid);
            const post = await PostService.get(req.params.postCid);

            // Create the new comment
            const name = await CommentService.store(req.body);

            // Add the comment to the comments list inside the post
            await PostService.addComment(post, name, sub.title + '.' + post.title);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async get(req: Request, res: Response): Promise<Response> {
        try {
            const sub = await PostService.get(req.params.cid);
            return res.status(200).json(sub);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}