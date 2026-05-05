const mongoose = require("mongoose")


let dbconnect=async()=>{
    // mongoose.connect("mongodb://127.0.0.1:27017/emotion-Checker")
 await mongoose.connect("mongodb+srv://sanjayelanchikani_db_user:sanjayelanchi0508@cluster0.5vfwlvj.mongodb.net/emotion-Checker")

}


dbconnect().then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log("Mongo Error ❌", err.message))