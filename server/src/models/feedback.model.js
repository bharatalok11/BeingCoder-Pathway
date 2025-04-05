import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    fromId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: {
      type: String,
      enum: ["user", "hospital", "doctor"], // Also fixed "hostpital" typo
    },

    toId: {
      type: mongoose.Schema.Types.ObjectId, // ✅ fixed this line
      ref: "User",
    },

    feedback: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FeedBack = mongoose.model("Feedback", feedbackSchema);

export default FeedBack;
