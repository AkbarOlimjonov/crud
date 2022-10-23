module.exports.auth = (req, res, next) => {
    const user = req.session.isUser
  
    if(!user){
      return res.redirect('/user/login')
    }
  
    next()
}