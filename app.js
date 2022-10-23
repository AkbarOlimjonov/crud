const express = require("express");
const app = express();
const exhbs = require('express-handlebars');
require("dotenv").config();
const port = process.env.PORT || 5000;
const session = require('express-session');
const path = require('path');
const {auth} = require('./middleware/auth')


//Routes
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const userRouter = require("./routes/auth");

app.use(express.urlencoded({ extended: true }));

require('./helper/database')(process.env.MONGO_URI)

app.use(session({
  secret: process.env.SECTER_KEY,
  resave: false,
  saveUninitialized: false
}));


const hbs = exhbs.create({
  layoutsDir: 'views/layouts',
  layout: 'layout',
  extname: 'hbs',
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
  }
})



app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');


app.use("/user", userRouter);

app.use(auth)

app.use("/", indexRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server worked ${port}`);
});
