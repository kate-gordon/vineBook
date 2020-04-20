const express = require("express"),
  router = express.Router();

const userListModel = require("../models/userListModel");

router.get("/", async (req, res, next) => {
  const userInfo = await userListModel.getUserInfo();

  res.render("template", {
    locals: {
      title: "Account List",
      userData: userInfo,
      is_logged_in: req.session.is_logged_in,
      id: req.session.user_id,
      first_name: req.session.first_name,
      role: req.session.role,
    },
    partials: {
      partial: "partial-rep",
    },
  });
});

router.get("/:user_id", async (req, res, next) => {
  const { user_id } = req.params;

  const userListData = await userListModel.myList(user_id);
  const accountInfo = await userListModel.getAccountInfo(user_id);

  const invData = userListData.filter((list) => list.list_type === "Have");
  const needData = userListData.filter((list) => list.list_type === "Need");

  res.status(200).render("template", {
    locals: {
      title: "",
      Data: userListData,
      haveData: invData,
      needData: needData,
      userData: accountInfo,
      is_logged_in: req.session.is_logged_in,
      id: req.session.user_id,
      first_name: req.session.first_name,
      role: req.session.role,
    },
    partials: {
      partial: "partial-single-userList",
    },
  });
});

module.exports = router;
