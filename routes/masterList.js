const express = require("express"),
    router = express.Router(),
    UserListModel = require("../models/userListModel");

router.get("/", async (req, res, next) => {
    const wineList = await UserListModel.getAllWineData();

    res.render("template", {
        locals: {
            title: "Wine List",
            wineData: wineList
        },
        partials: {
            partial: "partial-wine"
        }
    });
});

module.exports = router; 