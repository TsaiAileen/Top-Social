const axios = require("axios")

const getMessage = async(req, res) => {
  try {
    const url = "http://localhost:3000/message"
    const message = await axios.get(url)
    res.status(200).json({
      msg: "get message succeed",
      data: {
        message: message.data,
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")
  }
}

module.exports = { getMessage }