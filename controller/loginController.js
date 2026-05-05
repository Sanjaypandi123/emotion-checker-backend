
const patientModel = require("../models/patientsModel.js")

exports.login=async(req,res)=>{
    try{

        const{email,password,role} = req.body

        const user = await patientModel.findOne({email,role})

        if(!user){
            return res.status(404).send({
                status:false,
                message:"user not found"
            })
        }

        if(user.password !== password){
            return res.status(400).send({
                status:false,
                message:"Invalid password"
            })
        }

        return res.status(200).send({
            status:true,
            message:"Login Successfull",
            response:user
        })

    }
    catch(err){
        return res.status(500).send({
            status: false,
            message: "Exception occurred",
            error: err.message
        })
    }
}