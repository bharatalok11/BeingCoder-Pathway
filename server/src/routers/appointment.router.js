import express, { Router } from "express"

import {
    BookAppointMent,
    cancelAppointment

} from "../controllers/appointment.controller"
import { verifyJWT } from "../middleware/auth.middleware.js";


const router=Router();

router.post("/book-appointment",verifyJWT,BookAppointMent)

router.post("/",verifyJWT,cancelAppointment)