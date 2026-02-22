const express = require("express")
require("dotenv").config();
let cors = require("cors")
let app = express();
app.use(cors({
    origin: ["https://google-drive-folder-creation.onrender.com","http://localhost:5173","http://localhost:5174"]
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let mainRoutes = require("./routers/mainRoutes")
app.use("/api",mainRoutes)

module.exports = app;