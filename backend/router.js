const express = require('express')
const axios = require('axios')
const router = express.Router()

//GET profile
//http://localhost/api/profile
//http://localhost:3000/profile
router.get('/users', async (req, res) => {
  try {
  const url = 'http://localhost:3000/users'
  const users = await axios.get(url)
  console.log('users',users.data);
  res.status(200).json({
    msg: 'get users succeed',
    data: users.data
  })
} catch (error) {
  res.status(500).send('Server Error')
}
})

//GET cards by user id
//http://localhost/api/cards?id=1
//http://localhost:3000/cards?id=1
router.get('/cards', async (req, res) => {
  // const id = req.query.userId 其中一個寫法
  const {userId} = req.query
  console.log('userId', userId);
  try{
    const url = `http://localhost:3000/cards?userId=${userId}`
    const cards = await axios.get(url)
    console.log('cards', cards.data);
    res.status(200).json({
      msg: 'get cards succeed',
      data: cards.data
    })
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

//POST a card to specific user
//http://localhost/api/caeds
//http://localhost:3000/cards
router.post('/cards', async (req, res) => {
  console.log('body', req.body);
  try {
    const url = 'http://localhost:3000/cards'
    await axios.post(url, req.body, { 
      headers: {       //告訴它傳了什麼類型的數據
        'Content-Type':'application/json'  // 固定寫法
      }
    })
      res.status(200).json({
      msg:'Card is created'
    })
    } catch (error) {
      res.status(500).send('Server Error')
  }
})

//DELETE card by card id
//http://localhost/api/cards/:card_id
//http://localhost:3000/cards/3
router.delete('/cards/:card_id', async (req, res) => {
  try {
    const url = `http://localhost:3000/cards/${req.params.card_id}`
    const result = await axios.delete(url)
    console.log('result',result);
    res.status(200).json({
      msg:'Card is deleted'
    })
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

//GET highline
//http://localhost/api/highline
//http://localhost:3000/highline


//GET message
//http://localhost/api/message
//http://localhost:3000/message


//GET request
//http://localhost/api/request
//http://localhost:3000/request



module.exports = router
