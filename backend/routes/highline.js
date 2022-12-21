const express = require('express')
const axios = require('axios')
const highlineRouter = express.Router()
const { getHighline } = require("../controllers/highlineController")
//GET highline
//http://localhost/api/highline
//http://localhost:3000/highline
highlineRouter.get("/", getHighline)

module.exports = highlineRouter