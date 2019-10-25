const express = require('express'),
  router = express.Router();

  const userListModel = require("../models/userListModel");

  router.get('/', async (req, res, next) => {
    const userListData = await userListModel.myList();
    res.render("template", {
      locals: {
        title: "User Wine List",
        listData: userListData  
      },
      partials: {
        partial: "partial-buyer"
      }
    });
  });

  module.exports = router;

  
