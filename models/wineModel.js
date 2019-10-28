const db = require('./conn.js');

class WineList {
    constructor(id, producer, region, country, varietals, year, list_type){
        this.id = id;
        this.producer = producer;
        this.region = region;
        this.country = country; 
        this.varietals = varietals; 
        this.year = year; 
        this.type = type; 
        this.list_type = list_type;
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
            
            return response
        }catch(err){
            return err.message;
        }
    }

    static async addUserWine(userId, wine_id, list_type) {

        try {
            const response = await db.one(`INSERT INTO user_wine
            (user_id, wine_id, list_type) 
            VALUES ($1, $2, $3)
            RETURNING id;`
            , [userId, wine_id, list_type]);
            

            console.log("response is ", response);


            return response;

        }catch(err) {
            return err.message;
        }
    }
};

module.exports = WineList; 