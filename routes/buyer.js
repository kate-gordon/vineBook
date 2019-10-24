const express = require('express'),
  bcrypt = require("bcryptjs"),
  router = express.Router();

  const UserModel = require("../models/userModel");

router.post("/signup", async (req, res, next) => {
  const { first_name, last_name, email_address } = req.body;
})

module.exports = router;
