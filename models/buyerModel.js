const db = require("./conn");
bcrypt = require("bcryptjs");

class User {
    constructor (first_name, last_name, email_address, password, company) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.password = password;
        this.company = company;
    }

    async login() {
        try {
            const response = await db.one(
                `SELECT first_name, last_name, password, company 
                    FROM buyers 
                    WHERE email_address = $1`, 
            [this.email_address]);
            console.log
        } catch(err) {
            return err.message;
        }
    }

    async save() {
        try {
            const response = await db.one(`INSERT INTO buyers (first_name, last_name, email_address, password, company) VALUES ($1, $2, $3, $4, $5) RETURNING id;`, [this.first_name, this.last_name, this.last_name, this.email_address, this.password, this.company]);
        return response;
        }catch(err) {
            return err.message;
        }
    }
}

module.exports = User;