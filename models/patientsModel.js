const mongoose=require("mongoose")

const patientsSchema=new mongoose.Schema({
    patientName:{
        type:String,
        required:[true,"Patient name cannot be empty"]
    },
    email:{
        type:String,
        required:[true,"Email cannot be empty"]
    },
    mobile:{
        type:String,
        required:[true,"Number cannot be empty"]
    },
    password:{
        type:String,
        required:[true,"password cannot be empty"]
    },
    role:{
        type:String,
        required:[true,"role cannot be empty"]
    },
    docterID:{
        type:mongoose.Schema.ObjectId,
        ref:"Patients"
    }
   
    


},{timestamps:true})

module.exports=mongoose.model("Patients",patientsSchema)