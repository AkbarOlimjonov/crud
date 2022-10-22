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

  res.send(user);
  req.session.user = false;
};

module.exports.Login = async function (req, res) {
  try {
    const { password, phone } = req.body;

    const user = await User.findOne({ phone });

    const hashEncode = await bcrypt.compare(password, user.password);

    console.log(hashEncode);

    if (hashEncode) {
      return res.send("Logined");
    }

    res.send("Password or Username is incorrect");
  } catch (error) {
    res.send(error)
  }
};
