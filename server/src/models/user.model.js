import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    phone: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    appointmentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment", // change this to the actual model name you will reference
      },
    ],

    role: {
      type: String,
      enum: ["doctor", "patient"],
      default: "patient",
    },

    profilePicture: {
      type: String,
    },

    bio: {
      type: String,
      default: "No bio provided",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
