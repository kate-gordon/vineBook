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

    async addUserWine(id) {
        const addWine = (`INSERT INTO user_wine
            (user_id, wine_id) 
            VALUES ($1, $2) 
            RETURNING id`, [this.user_id, this.wine_id]);

        try {
            const response = await db.any(addWine);
            console.log("response is ", response);

            return response;

        }catch(err) {
            return err.message;
        }
    }
};

module.exports = WineList; 