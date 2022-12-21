const express = require('express')
const axios = require('axios')
const profileRouter = express.Router()
const { getProfile } = require("../controllers/profileController")
//GET profile
//http://localhost/api/profile
//http://localhost:3000/profile
profileRouter.get("/", getProfile)

module.exports = profileRouter