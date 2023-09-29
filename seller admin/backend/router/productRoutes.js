const express = require('express')
const productControllers = require('../controllers/productControllers')
const router = express.Router()

router.post('/postproduct',productControllers.postProduct)

router.get('/fetchproducts',productControllers.fetchProducts)

router.delete('/delete/:id',productControllers.deleteProduct)

module.exports = router;