import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    DoctorId: {
      type: String,
      required: true,
      unique: true,
    },

    timing:{    

        type:DateA(),

        required:true
    },

    status:{
        type:String,
        enum:["completed","pending"]
    }

  },
  { timestamps: true }
);


const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;