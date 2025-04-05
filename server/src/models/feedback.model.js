import mongoose from "mongoose";


const feedbackSchema=new mongoose.Schema({

        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

        type:{
            type:String,
            enum:["user","hostpital","doctor"]
        },

        feedback:{
            type:String,

        }


})

const FeedBack=mongoose.model("Feedback",feedbackSchema);

 export default FeedBack;