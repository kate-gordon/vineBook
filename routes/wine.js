const express = require("express"),
    router = express.Router(),
    WineModel = require("../models/wineModel");

router.get("/", async (req, res, next) => {
    const wineList = await WineModel.getAllWineData();

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