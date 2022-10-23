const Product = require("../model/product");

module.exports.homePage = async function (req, res) {
    const products = await Product.find();
    res.render('index', { title: 'Home Page', products, })
}