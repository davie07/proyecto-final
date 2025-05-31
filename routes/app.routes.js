const express = require('express');
const productService = require('../services/product.service');
const router = express.Router();

router.get('/products', (req, res, next) => {

    let model = {
        productName: req.query.productName
    };

    productService.getProducts(model, (error, result) => {
        if(error) {
            return next(error);
        }

        return res.status(200).send({
            message: 'Success!!!',
            data: result
        });
    });
});

router.post('/add-products', (req, res, next) => {
    
    let params = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productImage: req.body.productImage
    };

    productService.createProduct(params, (error, result) => {
        if(error) {
            return next(error);
        }

        return res.status(200).send({
            message: 'Success!!!',
            data: result
        });
    });
});

module.exports = router;