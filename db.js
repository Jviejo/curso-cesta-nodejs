const mysql = require("mysql8")

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    database: 'northwind'
});

function q(sql, parameters) {
    return new Promise((resolver, reject) => {
        pool.query(sql, parameters, function (error, results, fields) {
            if (error) reject(error);
    
            return resolver([results, fields]);
        });
    });
}

module.exports = {
    q
}

