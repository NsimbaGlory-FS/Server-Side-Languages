const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Products')



router.get('/', productCtrl.index)

module.exports = router