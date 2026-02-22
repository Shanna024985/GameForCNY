const express = require("express")
const router = express.Router();
const controller = require("../controllers/loginController")
const middleware = require("../middlewares/jwtmiddleware")

router.post("/login",controller.checkWhetherUserIsInside,middleware.generateToken, middleware.sendToken)

module.exports = router