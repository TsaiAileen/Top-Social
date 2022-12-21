const express = require('express')
const axios = require('axios')
const messageRouter = express.Router()
const { getMessage } = require("../controllers/messageController")

//GET message
//http://localhost/api/message
messageRouter.get("/", getMessage)

module.exports = messageRouter