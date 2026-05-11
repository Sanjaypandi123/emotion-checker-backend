const express = require("express");
const router = express.Router();

const { 
  createPatient, 
  getUser,
  getAllPatients,
  jointoDocter  
} = require("../controller/patientsController.js");

const { login } = require("../controller/loginController.js");

const { 
  createEmotions,
  getpatientEmotions,
  
} = require("../controller/emotionsController.js");

const {getTodayEmotion,
  getLast7DaysEmotion,
  getLast30DaysEmotion
}=require("../controller/filterController.js")


/* ================= PATIENT ROUTES ================= */

router.post("/patient", createPatient);
router.get("/patient/:userId", getUser);
router.get("/patients/:docterid", getAllPatients);
router.put("/patient/join/:userid", jointoDocter);


/* ================= LOGIN ================= */

router.post("/login", login);


/* ================= EMOTION ROUTES ================= */

router.post("/emotions", createEmotions);

// 🔥 IMPORTANT: Specific routes must come BEFORE dynamic route

router.get("/emotions/today/:patientid", getTodayEmotion);
router.get("/emotions/last7days/:patientid", getLast7DaysEmotion);
router.get("/emotions/last30days/:patientid", getLast30DaysEmotion);

// 👇 Keep this LAST
router.get("/emotions/:patientID", getpatientEmotions);


module.exports = router;