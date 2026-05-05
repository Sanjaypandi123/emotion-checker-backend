const mongoose = require("mongoose")

const patientemotionsSchema = new mongoose.Schema({
    patientName: {
        type:String
    },
    patientID:{
        type:mongoose.Schema.ObjectId,
        ref:"Patients"
    },
    emotion: {
        type:String
    },
    percentage: {
        type:Number
    },
    session: {
        type:String
    },
    date: {
        type:String
    },
    time: {
        type:String
    },
}, {
    timestamps: true
})

// 👇 ADD THIS
patientemotionsSchema.index({
    patientName: 1,
    date: 1,
    session: 1
}, {
    unique: true
});

module.exports = mongoose.model("patientemotions", patientemotionsSchema)