const express = require('express'),
bcrypt = require("bcryptjs");
 router = express.Router();

const UserModel = require("../models/userModel");

  router.get('/', async (req, res, next) => {
    res.render("template", {
      locals: {
        title: "Login",
        id: req.session.user_id,
        is_logged_in: req.session.is_logged_in,
        first_name: req.session.first_name,
        role: req.session.role
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
  
  router.get("/signup", async (req, res, next) => {
    res.render("template", {
      locals: {
        title: "Sign-Up",
        id: req.session.user_id,
        is_logged_in: req.session.is_logged_in,
        first_name: req.session.first_name
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
  
  // User Logs In 

  router.post("/", async (req, res, next) => {
    const { email, password, role } = req.body;
  
    const buyer = new UserModel(null, null, email, password, null, role);
    const response = await buyer.login();
  
    if (!! response.isValid) {
      const { id, first_name, last_name, role } = response;
      req.session.is_logged_in = true;
      req.session.first_name = first_name;
      req.session.last_name = last_name;
      req.session.role = role;
      req.session.user_id = id;
  
    if(role == "buyer") {
      res.status(200).redirect("/buyerList/user_id")
    }

    if(role == "rep") {
      res.status(200).redirect("/rep")
    }

    else{
      res.sendStatus(401);
    }
  }
  });

  router.get('/', async (req, res, next) => {
    const userListData = await wineListModel.myList();
    res.render("template", {
      locals: {
        title: "User Wine List",
        listData: userListData,
        id: req.session.user_id,
        is_logged_in: req.session.is_logged_in,
        role: req.session.role
      },
      partials: {
        partial: "partial-buyer"
      }
    });
  });

module.exports = router;