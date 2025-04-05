import { Router } from "express";

import {

    BookAppointMent,
    cancelAppointment
} from "../controllers/appointment.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router =Router();
router.post("/book-appointment/:doctorId", verifyJWT, BookAppointMent)


router.post("./cancel-appointment/:id",verifyJWT,cancelAppointment)



export default router
