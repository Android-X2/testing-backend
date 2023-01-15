//Set up dependencies
const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

//Connect to controllers file
const mainController = require('../controllers/main')


//Set up routers
router.get('/', mainController.test)
router.post('/register', mainController.register)
router.post('/login', mainController.login)

    //end points of free/auth
router.get('/free-endpoint', mainController.free)
router.get('/auth-endpoint', auth ,mainController.auth)

module.exports = router 