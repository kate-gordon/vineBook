const express = require("express"),
    router = express.Router(),
    wineModel = require("../models/wineModel");

router.get("/", async (req, res, next) => {
    const wineList = await wineModel.getAllWineData();

    res.render("template", {
        locals: {
            title: "Wine List",
            wineData: wineList,
            id: req.session.user_id,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-masterList"
        }
    });
});

module.exports = router; 