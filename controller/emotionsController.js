const { response } = require("express");
const emotionsModel = require("../models/emotionModel.js")

exports.createEmotions = async (req, res) => {
    try {

        console.log("Incoming Data:", req.body)
        // const emotionsData = new emotionsModel(req.body);

        const finalEmotions = await emotionsModel.create(req.body)

        return res.status(201).send({
            status: true,
            message: "emotion captured successfully",
            data: finalEmotions
        })
    } catch (err) {

        console.log("Emotion Error:", err.message)

        return res.status(500).send({
            status: false,
            message: "emotion captured failed",
            error: err.message
        })
    }
}









exports.getpatientEmotionsbyDate=async(req,res)=>{
    try{
        
        const emotionDate=req.params.emotionDate
        
        const Emotions = await emotionsModel.find(emotionDate)

        if(!Emotions){
            return res.status(404).send({
                status:false,
                message:"Emotions not detected!!.."
            })
        }

        return res.status(200).send({
            status:true,
            message:"Emotions are fetched",
            response:Emotions
        })
        
    }
    catch(err){
        return res.status(500).send({
            status: false,
            message: "Emotions occurred failed",
            error: err.message
        })
    }



    
}
exports.getpatientEmotions = async (req, res) => {
    try {

        const patientID = req.params.patientID

        
        
        const patientEmotions = await emotionsModel.find({patientID:patientID})
        

        if (!patientEmotions) {
            return res.status(404).send({
                status: false,
                message: "patientEmotions not found"
            })
        }

        return res.status(200).send({
            status: true,
            message: "patientEmotions data fetched",
            response: patientEmotions
        })

    } catch (err) {
        
        return res.status(500).send({
            status: false,
            message: "patientEmotions occurred failed",
            error: err.message
        })
    }
}