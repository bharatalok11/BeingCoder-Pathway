import mongoose from "mongoose";

const hosipitalScheama=new mongoose.Schema({

        name:{
            type:String,
            required:true
        } ,

        doctors:[{
            
            type:Object.modle.type,
            required:true
            
        }],

        patient:[
            {         
                    type:Object.modle.type,
                
        }]


})


const Hostpital=mongoose.model("Hospital",hosipitalScheama)
export default Hostpital;