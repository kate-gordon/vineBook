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

    async getWineName() {
        try {
            const response = await db.any(`SELECT `)
        }catch(err) {
            return err.message;
        }
    }
}

module.exports = WineList; 