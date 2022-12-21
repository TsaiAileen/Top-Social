const axios = require("axios")

const getCard = async (req, res) => {
  const { id } = req.query
  console.log('id', id);
  try{
    const url = `http://localhost:3000/cards?id=${id}`
    const cards = await axios.get(url)
    console.log('cards', cards.data);
    res.status(200).json({
      msg: 'get cards succeed',
      data: cards.data,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error')
  }
}

const postCard = async (req, res) => {
  console.log('body', req.body);
  try {
    const url = 'http://localhost:3000/cards'
    await axios.post(url, req.body, { 
      headers: {       //告訴它傳了什麼類型的數據
        'Content-Type':'application/json'  // 固定寫法
      }
    })
      res.status(200).json({
        msg:'Card is created',
    })
    } catch (error) {
      res.status(500).send('Server Error')
  }
}

const deleteCard = async (req, res) => {
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
}

module.exports = { getCard, postCard, deleteCard }