const express = require('express'),
  router = express.Router();

const userListModel = require("../models/userListModel");


router.get('/:user_id'), async function(req, res, next) {
    const { user_id } = req.params; 
    const user = await userListModel.getById(user_id); 
    console.log("the user list of data is: ", user); 

    res.render("template", {
        locals: {
            title: "This is one user's list",
            listData: user,  
            isLoggedIn: req.session.is_logged_in, 
        }, 
        partials: {
            partial: "partial-single-userlist"
        }
    }); 
}; 



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
