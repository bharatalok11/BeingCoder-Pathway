import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



// Routes
import userRouter from "./routers/user.routers.js";
import appointmentRouter from "./routers/appointment.router.js"

app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment",appointmentRouter)


// Default route

export { app };
