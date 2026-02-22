const express = require("express")
const router = express.Router();
const middleware = require("../middlewares/jwtmiddleware")
let controller = require("../controllers/moneyController")
router.use(middleware.verifyToken)

router.get("/",controller.getMoney)

module.exports = router