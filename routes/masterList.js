const express = require("express"),
    router = express.Router(),
    WineModel = require("../models/wineModel"),
    UserModel = require("../models/userModel");


router.get("/", async (req, res, next) => {
    const wineInfo = await WineModel.getAllWineData();

    res.render("template", {
        locals: {
            title: "Wine List",
            wineData: wineInfo,
            
        },
        partials: {
            partial: "partial-masterList"
        }
    });
});


router.post("/:wine_id", async (req, res, next) => {
    const { wine_id } = req.params;

    const userId = req.session.user_id;

    const response = await WineModel.addUserWine(userId, wine_id);
    console.log("response is", response);
    return response; 

})

module.exports = router; 