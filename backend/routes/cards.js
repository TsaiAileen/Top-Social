const express = require('express')
const axios = require('axios')
const cardsRouter = express.Router()
const { getCard, postCard, deleteCard } = require("../controllers/cardsController")

//GET cards by user id
//http://localhost/api/cards?id=1

cardsRouter.get('/', getCard)
//POST a card to specific user
//http://localhost/api/cards
cardsRouter.post('/', postCard)

//DELETE card by card id
//http://localhost/api/cards/:card_id
cardsRouter.delete('/:card_id', deleteCard)


module.exports = cardsRouter