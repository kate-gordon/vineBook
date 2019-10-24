const db = require("./conn");


class WineList {
    constructor (user_id, wine_id) {
        this.user_id = user_id;
        this.wine_id = wine_id;
    }
    async userList() {
        try {
        const response = await db.any ( 
            `SELECT * FROM user_wine
                INNER JOIN wines
                    ON user_wine.wine_id = wines.id
                INNER JOIN users
                    ON user_wine.user_id = users.id`);
        
        console.log("response ", response);
            return response;
        } catch(err) {
            return err.message;
        }
    }
};

module.exports = WineList;