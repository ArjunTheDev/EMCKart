const db = require("../models");
const User = db.user;
const firebase = require('firebase-admin');

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  // if (!req.body.uid) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  try {
  await firebase.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
    displayName: req.body.name
  })
  .then((userCredential) => {
    const user = new User({
      name: userCredential.displayName,
      email: userCredential.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
      uid: userCredential.uid
    });
    user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
  })
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  }
};

exports.fetchAll = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while fetching the User."
        });
    }

}