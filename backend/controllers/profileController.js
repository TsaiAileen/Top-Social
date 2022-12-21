const axios = require("axios")

const getProfile = async (req, res) => {
  try {
    const url = "http://localhost:3000/profile"
    const profile = await axios.get(url)
    console.log("profile", profile.data)
    res.status(200).json({
      msg: "get profile succeed",
      data: profile.data,
    })
  } catch (error) {
    res.status(500).send("Server Error")
  }
}

module.exports = { getProfile }