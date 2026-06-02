const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database : 'controle_pedidos'
});
module.exports = connection;