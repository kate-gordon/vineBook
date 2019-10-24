const express = require('express'),
  bcrypt = require("bcryptjs"),
  router = express.Router();

  const UserModel = require("../models/userModel");

router.get('/login', async (req, res, next) => {
  res.render("template", {
    locals: {
      title: "Login",
    },
    partials: {
      partial: "partial-buyer"
    }
  });
});

router.get("/logout", (req, res, next) => {
  req.session.destroy();
  req.sendStatus(200).redirect("/");
});

router.get("/signup", async (req, res, next) => {
  res.render("template", {
    locals: {
      title: "Sign-Up"
    },
    partials: {
      partial: "partial-buyer"
    }
  });
});

module.exports = router;
