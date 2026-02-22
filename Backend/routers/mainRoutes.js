const express = require("express")
const router = express.Router();
const loginRouter = require("./loginRoute")
let moneyRouter = require("./moneyRoute")
let qrCodeRouter = require("./qrRouter")
let controller = require("../controllers/moneyController")
router.get("/",(req,res,next)=>{
    res.send("You are connected!")
})
router.use("/auth",loginRouter)
router.use("/money",moneyRouter)
router.use("/qrCode",qrCodeRouter)
router.get("/leaderboard",controller.leaderboard)
module.exports = router