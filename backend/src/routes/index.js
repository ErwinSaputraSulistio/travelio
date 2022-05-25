const router = require("express").Router()
const controller = require("../controllers")

router.post("/create", controller.register)
router.post("/check", controller.login)

module.exports = router