import { Router } from "express";
import { 
     login, 
   // logout, 
    register, 

} from "../controllers/user.controller.js";
// import {upload} from "../middlewares/multer.middleware.js"
// import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    register
    )

 router.route("/login").post(login)

// //secured routes
// router.route("/logout").post(verifyJWT,  logoutUser)

// router.route("/update-account").patch(verifyJWT, updateAccountDetails)

export default router