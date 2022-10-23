const User = require("../model/user");
const bcrypt = require("bcrypt");


module.exports.Register = async function (req, res) {
  req.session.user = false;
  const { password, phone, name } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    phone,
    password: hash,
  });

  await user.save();

  res.redirect('/')
};

module.exports.Login = async function (req, res) {
  try {
    req.session.isUdmin = false;
    const { password, phone } = req.body;

    const user = await User.findOne({ phone });

    const hashEncode = await bcrypt.compare(password, user.password);


    if (!hashEncode) {
      return res.send("Password or Username is incorrect");
    }

    res.redirect('/');
    req.session.isUser = true;
    req.session.user = user
  } catch (error) {
    res.send(error)
  }
};
