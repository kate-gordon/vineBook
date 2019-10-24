const express = require('express'),
  router = express.Router();

  const wineListModel = require("../models/wineListModel");

  router.get('/', async (req, res, next) => {
    const userListData= await wineListModel.userList();
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

  
