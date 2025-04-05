import {
    addFeedback,
    editFeedback
} from "../controllers/feedback.controller.js"

import express, { Router } from "express"

const router=Router();

router.post("/add-feedback/:id/:type",addFeedback);

router.post("./edit-feed/:id",editFeedback)

export default router;