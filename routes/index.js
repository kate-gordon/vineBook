const express = require('express'),
bcrypt = require("bcryptjs");
 router = express.Router();

const UserModel = require("../models/userModel");

  router.get('/', async (req, res, next) => {
    res.render("template", {
      locals: {
        title: "Login",
      },
      partials: {
        partial: "partial-login"
      }
    });
  });

  router.get('/logout', async (req, res, next) => {
    req.session.destroy();
    res.status(200).redirect('/');
  })
  
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
        partial: "partial-signup"
      }
    });
  });

  
  router.post("/signup", async (req, res, next) => {
    const { first_name, last_name, email, company, role } = req.body;
  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const buyer = new UserModel(first_name, last_name, email, hash, company, role);
  
    const addBuyer = await buyer.save();
  
    if (addBuyer) { 
      res.status(200).redirect("/");
    } else {
      res.status(500);
    }
  });
  
  router.post("/", async (req, res, next) => {
    const { email, password } = req.body;
  
    const buyer = new UserModel(null, null, email, password, null, null);
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