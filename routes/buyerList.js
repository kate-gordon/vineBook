const express = require('express'),
  router = express.Router();

  const userListModel = require("../models/userListModel");

  /// Route to My User List

  router.get('/:user_id', async (req, res, next) => {
    const { user_id } = req.params;

    const userListData = await userListModel.myList(user_id);

    const invData = userListData.filter(list => list.list_type === "Have"); 
    const needData = userListData.filter(list => list.list_type === "Need");


    
    res.status(200).render("template", {
      locals: {
        title: "My Wine List",
        haveData: invData, 
        needData: needData, 
        is_logged_in: req.session.is_logged_in,
        id: req.session.user_id,
        first_name: req.session.first_name
      },
      partials: {
        partial: "partial-buyerList"
      }
    });
  });

  

  module.exports = router;

  
