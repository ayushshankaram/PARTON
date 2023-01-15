const {
    createPool
} = require('mysql');

const pool = createPool({
    host:"locahost"
    user: "root",
    password: "ayush2003",
    database: "test",
    connectionLimit: 10
})

module.exports=pool;