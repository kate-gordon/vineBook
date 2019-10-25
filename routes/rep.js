const  express = require("express"),
    router = express.Router();

const userModel = require("../models/userListModel");

router.get("/", async (req, res, next) => {
    const userInfo = await userModel.getUserInfo();

    res.render("template", {
        locals: {
            title: "Buyer List",
            userData: userInfo,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-rep"
        }
    });
});

module.exports = router;