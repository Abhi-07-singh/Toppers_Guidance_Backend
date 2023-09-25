const express = require ('express');
const router = express.Router()
const ToppersGetController = require("../Controllers/ToppersGetController")

router.get("/toppers", ToppersGetController.get_toppers)



module.exports = router;