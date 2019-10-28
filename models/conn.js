const pgp = require('pg-promise') ({
    query: function(e) {
        
    }
});

const options = {
    host: "localhost",
    database: "winebuyer"
};

const db = pgp(options);

module.exports = db;