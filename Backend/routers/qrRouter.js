const express = require("express")
const router = express.Router();
const middleware = require("../middlewares/jwtmiddleware")
let controller = require("../controllers/qrCodeController")
router.use(middleware.verifyToken)

router.post("/", controller.redeemQrCode)

module.exports = router