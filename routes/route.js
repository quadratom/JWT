const express = require('express')
const router = express.Router()

const {
    login,
    dashboard
} = require('../controllers/jwt')

router.route('/login').post(login)
router.route('/dashboard').get(dashboard)






module.exports = router