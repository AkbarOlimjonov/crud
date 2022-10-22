const Product = require("../model/product");

module.exports.allProducts = async function (req,res){
    const products = await Product.find();
    res.send(products)
}

module.exports.addProduct = async function (req,res){
    const { name , price , img } = req.body;

    const product = new Product({
        name,
        price,
        img,
    })

    await product.save();
    res.send('Product Added');
}