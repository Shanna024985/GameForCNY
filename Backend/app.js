const express = require("express")
require("dotenv").config();
let cors = require("cors")
const path = require('path');

let app = express();
app.use(cors({
    origin: ["https://google-drive-folder-creation.onrender.com","http://localhost:5173","http://localhost:5174"]
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
let pathForServingHtmlFile = path.join(__dirname,"../CNY_Scavenger_Hunt/dist")
console.log(pathForServingHtmlFile)
app.use("/",express.static(pathForServingHtmlFile))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,"../CNY_Scavenger_Hunt","dist","index.html"));
});
  
let mainRoutes = require("./routers/mainRoutes")
app.use("/api",mainRoutes)

module.exports = app;