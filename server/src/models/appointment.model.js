import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming both user and doctor are stored in User model
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    timing: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["completed", "pending"],
      default: "",
    }
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

Appointment.find().populate('userId').populate('doctorId');


export default Appointment;
