const connection = require('../database/connection');
const express = require ('express');

const app = express();

app.use(express.urlencoded({extended : true}));
console.log(app.use(express.json()));

function cadastrarProdutos(ped_name,ped_total_price,ped_status){
    connection.query(`INSERT INTO pedidos ped_name,ped_total_price,ped_status,ped_create_at,ped_updated_at,ped_deleted_at VALUES (${ped_name},${ped_total_price},${ped_status},${ped_create_at},${ped_updated_at},${ped_deleted_at})`);
}
