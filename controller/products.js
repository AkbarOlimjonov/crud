const Product = require("../model/product");

module.exports.allProducts = async function (req,res){
    const products = await Product.find();
    res.render('products',{title:'Products',products})
}

module.exports.addProduct = async function (req,res){
    const { desc, name , price , img } = req.body;

    const product = new Product({
        name,
        price,
        img,
        desc
    })

    await product.save();
    res.send('Product Added');
}