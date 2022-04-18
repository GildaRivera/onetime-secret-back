const Secret = require("../models/models");
let ejs = require('ejs');

// Create and Save a user
exports.createSecret = (req, res) => {
  // Validate request
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      error: "Bad request",
    });
  }
  // Create a secret
  const secret = {
    secret: req.body.secret,
    count:req.body.count
  };
  // Save user in the database
  try {
    let data = Secret.addSecret(secret)
    return res
      .status(200)
      .send({ url: `${data.url}` });
  } catch (e) {
    return res.status(500).send({
      message: "Some error occurred while creating the Hash.",
    });
  }
};

// Find secret
exports.getSecret = (req, res) => {
  try {
    let data = Secret.getSecret(req.params.hash);
    if(!data){
      return res.render('notFound',{data:"The secret is no longer available"}) 
    }
    //return res.redirect(data.url);

    return res.render('index',{data:data})
  } catch (e) {
    // return res.status(500).send({
    //   message: "Some error occurred while redirecting",
    // });
    return res.render('index')
  }
};

// Find secrets
exports.getAllSecrets = (req, res) => {
    try {
      let data = Secret.getAll();
      return res.send(data);
    } catch (e) {
      return res.status(500).send({
        message: "Some error occurred while redirecting",
      });
    }
  };
