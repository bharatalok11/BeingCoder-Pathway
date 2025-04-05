import { Router } from "express";
import { 
    login,  
    logout,  
    register,  
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.post("/logout", verifyJWT, logout);

// Future secured routes
// router.patch("/update-account", verifyJWT, updateAccountDetails);
// router.post("/updatephoto", upload.single("file"), verifyJWT, updatePhoto);

export default router;
