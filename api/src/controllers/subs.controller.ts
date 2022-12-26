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

    public static async addPost(req: Request, res: Response): Promise<Response> {
        try {
            const sub = await SubsService.get(req.params.cid);
            await PostService.store(req.params.cid + '.' + req.body.title, req.body);
            await SubsService.addPost(req.params.cid, req.params.cid + '.' + req.body.title);
            return res.status(201).json({ message: "success" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}