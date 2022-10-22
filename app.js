const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const session = require('express-session')


const sess = {
  secret: "key",
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); 
  sess.cookie.secure = true; 
}

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));

const conntection = async function (err) {
  try {
    if (err) {
      console.log(err);
    }
    await mongoose.connect(
      "mongodb+srv://Akbarshox:a121312u@cluster0.1cfxxcc.mongodb.net/shop"
    );
    console.log("Mongo DB connected");
  } catch (error) {
    console.error(error);
  }
};

conntection();

//Routes
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const userRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server worked ${port}`);
});
