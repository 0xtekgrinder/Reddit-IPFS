import express from "express";
import CommentController from "../controllers/comment.controller.js";
import { commentMiddleware } from "../middlewares/comment.middleware.js";
const router = express.Router();

router.get("/comment/:cid",
    [
        commentMiddleware,
        CommentController.get
    ]
);

export default router;