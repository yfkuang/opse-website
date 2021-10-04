require('dotenv').config();
const
    mysql = require('serverless-mysql')({
        config: {
            host     : process.env.DB_HOST,
            port     : process.env.DB_PORT,
            user     : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_NAME
        }
    });

exports.query = async (query) => {
    let res = await mysql.query(query);
    await mysql.end();
    return res;
}