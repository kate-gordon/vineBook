const express = require('express'),
 router = express.Router();

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

module.exports = router;