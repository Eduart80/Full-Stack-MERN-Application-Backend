const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')


router.post('/api/users/register', userController.createUser)
router.post('/api/users/login', userController.loginUser)
router.get('/api/users/logout', userController.logOutUser)

module.exports = router