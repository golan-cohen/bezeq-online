const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String , require : true},
  password: { type: String , require : true}
});



 const User = mongoose.model('User', userSchema);

router.post("/register",(req, res, next) =>  {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      username: req.body.username,
      password: hash
  });
  console.log(user);
  user.save()
    .then(result => {
      res.status(201).json({
        message: 'User created!',
        result: result
      });
  }).catch(err => {
    res.status(500).json({
      message: "Invalid authentication!"
    });
});
});
});

router.post("/login",  (req, res, next) => {
  let fetchedUser;
  console.log(req.body);
  User.findOne({ username: req.body.username })
  .then(user => {
    if(!user)
      return res.status(401).json({
        message: "Auth failed"});
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  })
  .then( result => {
    if(!result)
    return res.status(401).json({
      message: "Auth failed"});
  const token = jwt.sign(
    {username: fetchedUser.username, userId: fetchedUser._id},
    "secret_this_should_be_longer",
    {expiresIn: "30m"});
    res.status(200).json({
      token: token,
      expiresIn: 1800,
      index: req.body.currectIndex,
      username: fetchedUser.username,
      userId: fetchedUser._id
    });
  })
  .catch(err => {
    return res.status(401).json({
      message: "Invalid authentication credentials!"});
  });
});

module.exports = router;
