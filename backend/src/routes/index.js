const router = require("express").Router()
const controller = require("../controllers")

router.get("/check-in", controller.checkIn)

module.exports = router