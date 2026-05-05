const express = require("express")
const app = express()
const port = 7000

const configss =require("./dbconfig/config.js")   // ✅ Just require it (no variable needed)

const mainrouter = require("./router/mainrouter.js")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/", mainrouter)

app.listen(port, () => {
    console.log(`server => http://localhost:${port}`);
})