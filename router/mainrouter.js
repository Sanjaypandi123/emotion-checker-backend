const express = require("express")
const router = express.Router()

const { createPatient, getUser,getAllPatients,jointoDocter  } = require("../controller/patientsController.js")
const { login } = require("../controller/loginController.js")
const { createEmotions,getpatientEmotionsbyDate ,getpatientEmotions} = require("../controller/emotionsController.js")  // ✅ ADD THIS


router.post("/patient", createPatient)
router.get("/patient/:userId", getUser)

router.get("/patients/:docterid", getAllPatients)

router.post("/login", login)

router.post("/emotions", createEmotions)  

// router.get("/emotions/:emotionDate",getpatientEmotionsbyDate)
router.get("/emotions/:patientID",getpatientEmotions)

router.put("/patient/join/:userid",jointoDocter)

module.exports = router