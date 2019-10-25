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
            partial: "partial-masterList"
        }
    });
});

router.post("/", async (req, res, next) => {
    const { user_id } = req.params;

    const { producer, region, country, varietals, year, type } = req.body;

    const addedWine = new WineList(producer, region, country, varietals, year, type);
    const response = await addedWine.addUserWine();

    if (response) {
        res.status(200).redirect("/");
    }
})

module.exports = router; 