import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },  

    phone:{
      type:String,
      require:true,
    },

    password:{
      type:String,
      require:true
    },
    // need to add the ids
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
      },
    ],

    // rating ----->

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