const express = require ('express');
const router = express.Router()
const askMeController = require("../Controllers/AskMeController")

router.post('/askme', askMeController.askMe)

module.exports = router;