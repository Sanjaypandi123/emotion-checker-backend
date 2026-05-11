const patientModel = require("../models/patientsModel.js")

// CREATE PATIENT
exports.createPatient = async (req, res) => {
    try {
        const patientData = req.body

        const existing = await patientModel.findOne({ email: patientData.email })

        if (existing) {
            return res.status(400).send({
                status: false,
                message: "User already exists"
            })
        }

        const register = await patientModel.create(patientData)

        return res.status(201).send({
            status: true,
            message: "Patient registered successfully",
            data: register
        })

    } catch (err) {
        return res.status(500).send({
            status: false,
            message: "Exception occurred",
            error: err.message
        })
    }
}


// GET USER
exports.getUser = async (req, res) => {
    try {
        const userId = req.params.userId

        const user = await patientModel.findById(userId)

        if (!user) {
            return res.status(404).send({
                status: false,
                message: "User not found"
            })
        }

        return res.status(200).send({
            status: true,
            message: "Patient data fetched",
            response: user
        })

    } catch (err) {
        return res.status(500).send({
            status: false,
            message: "Exception occurred",
            error: err.message
        })
    }
}


// GET ALL PATIENTS
exports.getAllPatients = async (req, res) => {
    try {
        const docterid=req.params.docterid
        const patients = await patientModel.find({docterID:docterid})
        

        return res.status(200).send({
            status: true,
            message: "All patients fetched successfully",
            response: patients
        })

    } catch (err) {
        return res.status(500).send({
            status: false,
            message: "Exception occurred",
            error: err.message
        })
    }
}


//update join docter
exports.jointoDocter = async (req, res) => {
    try {
        const userid = req.params.userid
        const { docterid } = req.body   // ✅ Extract properly

        if (!docterid) {
            return res.status(400).send({
                status: false,
                message: "Doctor ID is required"
            })
        }

        await patientModel.updateOne(
            { _id: userid },
            { $set: { docterID: docterid } }   // ✅ Save only ID
        )

        return res.status(200).send({
            status: true,
            message: "Successfully joined doctor"
        })

    } catch (err) {
        return res.status(500).send({
            status: false,
            message: "Exception occurred",
            error: err.message
        })
    }
}