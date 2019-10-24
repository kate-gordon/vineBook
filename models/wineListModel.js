const db = require("./conn");

class WineList {
    constructor(user_id, wine_id) {
        this.user_id = user_id;
        this.wine_id = wine_id;
    }
    async userList() { 
        try {
            const response = await db.any ( 
                `SELECT *
                FROM user_wine 
                INNER JOIN wines 
                ON wines.id = user_wine.wine_id 
                INNER JOIN users 
                ON users.id = user_wine.user_id; 
                `)
            console.log("response", response)
            return response;  
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = WineList;