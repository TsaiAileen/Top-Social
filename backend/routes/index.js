const { Router } = require("express")
const profileRouter = require("./profile")
const highlineRouter = require("./highline")
const messageRouter = require("./message")
const requestRouter = require("./request")
const cardsRouter = require("./cards")

const router = Router()
// /api/profile
router.use('/profile', profileRouter)
// /api/highline
router.use('/highline', highlineRouter)
// /api/message
router.use('/message', messageRouter)
// /api/request
router.use('/request', requestRouter)
// /api/cards
router.use('/cards', cardsRouter)

module.exports = router