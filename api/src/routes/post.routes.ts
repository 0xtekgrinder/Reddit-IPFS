import express from "express";
import PostController from "../controllers/post.controller.js";
import { postCommentMiddleware, postMiddleware } from "../middlewares/post.middleware.js";
const router = express.Router();

router.get("/post/:cid",
    [
        postMiddleware,
        PostController.get
    ]
);

router.post("/post/:cid/comment",
    [
        postCommentMiddleware,
        PostController.comment
    ]
);

export default router;