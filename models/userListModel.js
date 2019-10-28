const db = require("./conn");

class UserList {
    constructor(id, first_name) {
        this.id = id;
        this.first_name = first_name;
    }
    static async myList(id) { 
        try {
            const response = await db.any( 
                `SELECT * FROM user_wine
                INNER JOIN wines
                ON user_wine.wine_id = wines.id
                WHERE user_id = ${id};
                `)
            return response;  
        } catch(err) {
            return err.message;
        }
    }
       
    static async getUserInfo() {
        try {
            const response = await db.any(
                `SELECT * FROM users
                WHERE role = 'buyer';`);

            return response;

        } catch(err) {
            return err.message;
        }
    }
}



module.exports = UserList;