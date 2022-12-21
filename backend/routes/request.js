const express = require('express')
const axios = require('axios')
const requestRouter = express.Router()
const { getRequest } = require("../controllers/requestController")

//GET request
//http://localhost/api/request
//http://localhost:3000/request
requestRouter.get("/", getRequest)

module.exports = requestRouter