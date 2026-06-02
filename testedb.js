const connection = require('./database/connection');

async function testar() {

    const [rows] = await connection.query('SELECT 1');

    console.log(rows);

}

testar();