const express = require('express'),
  router = express.Router();

  const userListModel = require("../models/userListModel");
  const userModel = require("../models/userModel");


  /// Route to My User List

  router.get('/:user_id', async (req, res, next) => {
    const { user_id } = req.params;
    const buyer = await userModel.getById(user_id);
    

    const userListData = await userListModel.myList(user_id);
    
    res.status(200).render("template", {
      locals: {
        title: "My Wine List",
        Data: buyer, userListData,
        is_logged_in: req.session.is_logged_in,
        id: req.session.user_id
      },
      partials: {
        partial: "partial-buyerList"
      }
    });
  });

  

  module.exports = router;

  
