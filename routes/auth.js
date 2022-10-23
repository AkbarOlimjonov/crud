const express = require('express');
const router = express.Router();
const construct = require('../controller/auth')

router.get('/login',(req,res)=>{
    res.render('login',{
        title: 'Login',
        layout: 'layout'
    })
})

router.get('/register',(req,res)=>{
    res.render('register',{
        title: 'Login',
        layout: 'layout'
    })
})

router.post('/register/',construct.Register);
router.post('/login/',construct.Login);


module.exports = router;