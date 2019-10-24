const express = require('express'),
  bcrypt = require("bcryptjs"),
  router = express.Router();

  const UserModel = require("../models/userModel");

router.post("/signup", async (req, res, next) => {
  const { first_name, last_name, email_address, company, role } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const buyer = new UserModel(first_name, last_name, email_address, hash, company, role);

  const addBuyer = await buyer.save();

  if (addBuyer) { 
    res.status(200).redirect("/");
  } else {
    res.status(500);
  }
});

router.post("/", async (req, res, next) => {
  const { email_address, password } =req.body;

  const buyer = new UserModel(null, null, email_address, password, null, null, null);

  const response = await buyer.login();

  if (!! response.isValid) {
    const { id, first_name, last_name } = response;
    req.session.is_logged_in = true;
    req.session.first_name = first_name;
    req.session.last_name = last_name;
    req.session.user_id = id;
    res.status(200).redirect("/");
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
