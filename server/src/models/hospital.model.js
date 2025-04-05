import mongoose from "mongoose";

const hosipital=new mongoose.Schema({

        name:{
            type:String,
            required:true
        } ,

        doctors:[{
            
            type:Object.modle.type,
            required:true
            
        }]


})