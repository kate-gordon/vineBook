const express = require('express'),
  bcrypt = require("bcryptjs"),
  router = express.Router();

  const WineUserModel = require("../models/wineListModel");

  router.get("/", async (req, res, next) => {
    const wineUser = await WineUserModel.userList();

    res.render("template", {
        locals: {
            title: "Wine User",
            wineData: wineUser
        },
        partials: {
            partial: "partial-buyer"
        }
    });
});
  module.exports = router;

  
