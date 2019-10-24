const db = require("./conn");
bcrypt = require("bcryptjs");

class User {
    constructor (first_name, last_name, email_address, password, company, role) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.password = password;
        this.company = company;
        this.role = role;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login() {
        try {
            const response = await db.one(
                `SELECT first_name, last_name, password, company, role 
                    FROM users 
                    WHERE email = $1`, 
            [this.email_address]);
            console.log("response is: ", response);

            const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, id, first_name, last_name };
            } else {
                return { isValid };
            }
            
        } catch(err) {
            return err.message;
        }
    }

    async save() {
        try {
            const response = await db.one(`INSERT INTO user (first_name, last_name, email, password, company, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`, [this.first_name, this.last_name, this.last_name, this.email_address, this.password, this.company]);
        return response;
        }catch(err) {
            return err.message;
        }
    }
}

module.exports = User;