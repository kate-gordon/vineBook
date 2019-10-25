const db = require('./conn.js');

class WineList {
    constructor(id, producer, region, country, varietals, year, type){
        this.id = id;
        this.producer = producer;
        this.region = region;
        this.country = country; 
        this.varietals = varietals; 
        this.year = year; 
        this.type = type; 
    }

    static async getAllWineData() {
        try {
            const response = await db.any(`SELECT * FROM wines`);  
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getWineById(id) {
        try{
            const response = await db.one(
                `SELECT * FROM wines WHERE id = ${id};`
            );
            console.log("ID is ", response);
            return response
        }catch(err){
            return err.message;
        }
    }

    static async addUserWine(userId, wine_id) {

        try {
            const response = await db.one(`INSERT INTO user_wine
            (user_id, wine_id) 
            VALUES ($1, $2)
            RETURNING id;`
            , [userId, wine_id]);
            
            console.log("response is ", response.id);

            return response;

        }catch(err) {
            return err.message;
        }
    }
};

module.exports = WineList; 