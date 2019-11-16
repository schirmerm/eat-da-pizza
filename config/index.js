module.exports = require('mysql2')
.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pizza_db'
})