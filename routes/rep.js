const express = require('express'),
  router = express.Router();

const userListModel = require("../models/userListModel");
const userModel = require("../models/userModel");


router.get("/", async (req, res, next) => {
    const userInfo = await userListModel.getUserInfo();

    res.render("template", {
        locals: {
            title: "Buyer List",
            userData: userInfo,
            is_logged_in: req.session.is_logged_in,
            id: req.session.user_id,
        },
        partials: {
            partial: "partial-rep"
        }
    });
});

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
        partial: "partial-single-userList"
      }
    });
  });


module.exports = router;
