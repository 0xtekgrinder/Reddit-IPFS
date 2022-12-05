import express from "express";
import SubsController from "../controllers/subs.controller.js";
import { subCidMiddleware, subMiddleware, subPostMiddleware } from "../middlewares/subs.middleware.js";
const router = express.Router();

router.post("/sub",
    [
        subMiddleware,
        SubsController.create
    ]
);

router.get("/subs",
    [
        SubsController.list
    ]
);

router.get("/sub/:cid",
    [
        subCidMiddleware,
        SubsController.get
    ]
);

router.post("/sub/:cid/post",
    [
        subPostMiddleware,
        SubsController.addPost
    ]
);


export default router;