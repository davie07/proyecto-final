const { product } = require('../models/products.model');

async function getProducts(params, callback) {
    let condition = {};
    const productName = params.productName;
    
    if(productName) {
        condition = { $regex: new RegExp(productName), $options: "i" };
    }

    product.find(condition).then((response) => {
        return callback(null, response);
    }).catch((error) => {
        return callback(error);
    });
}

async function createProduct(params, callback) {
    if(!params.productName) {
        return callback({error: "Se requiere nombre del producto"}, null);
    }

    const productModel = new product(params);

    productModel.save().then((response) => {
        return callback(null, response);
    }).catch((error) => {
        return callback(error, null);
    });
}

module.exports = {
    getProducts,
    createProduct
}