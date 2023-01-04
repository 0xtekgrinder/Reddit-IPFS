import PostService from "../services/post.service.js";
import SubsService from "../services/subs.service.js";
import { Request, Response } from "express";

export default class SubsController {
    public static async create(req: Request, res: Response): Promise<Response> {
        try {
            await SubsService.store(req.body.title, req.body);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async list(req: Request, res: Response): Promise<Response> {
        try {
            const subs = await SubsService.getSubs();
            return res.json(subs);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async get(req: Request, res: Response): Promise<Response> {
        try {
            const sub = await SubsService.get(req.params.cid);
            return res.json(sub);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async delete(req: Request, res: Response): Promise<Response> {
        try {
            await SubsService.delete(req.params.cid);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async update(req: Request, res: Response): Promise<Response> {
        try {
            await SubsService.update(req.body.title, req.body);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    public static async addPost(req: Request, res: Response): Promise<Response> {
        try {
            // Get the sub content
            const sub = await SubsService.get(req.params.cid);

            // Create the post
            const name = await PostService.store(sub.title + '.' + req.body.title, req.body);

            // Add the post to the posts list inside the sub
            await SubsService.addPost(sub, name);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}