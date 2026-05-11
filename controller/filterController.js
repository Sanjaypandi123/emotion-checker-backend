const PatientEmotion = require("../models/emotionModel"); 
// Make sure file name is correct

/* ================= TODAY ================= */

exports.getTodayEmotion = async (req, res) => {
  try {
    const { patientid } = req.params;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const data = await PatientEmotion.find({
      patientID: patientid,
      createdAt: { $gte: today, $lt: tomorrow },
    }).sort({ createdAt: 1 });

    return res.status(200).json({
      status: true,
      response: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

/* ================= LAST 7 DAYS ================= */

exports.getLast7DaysEmotion = async (req, res) => {
  try {
    const { patientid } = req.params;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const data = await PatientEmotion.find({
      patientID: patientid,
      createdAt: { $gte: sevenDaysAgo },
    }).sort({ createdAt: 1 });

    return res.status(200).json({
      status: true,
      response: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

/* ================= LAST 30 DAYS ================= */

exports.getLast30DaysEmotion = async (req, res) => {
  try {
    const { patientid } = req.params;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const data = await PatientEmotion.find({
      patientID: patientid,
      createdAt: { $gte: thirtyDaysAgo },
    }).sort({ createdAt: 1 });

    return res.status(200).json({
      status: true,
      response: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};