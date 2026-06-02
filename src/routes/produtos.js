const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','view','index.html'));
});
router.get('/produtos',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','produtos','produtos.html'));
});
router.post('/produtos',(req,res)=>{
    console.log(req.body);
    const {ped_name,ped_total_price,ped_status,ped_create_at,ped_updated_at,ped_deleted_at} = req.body;
    res.send(
        `Nome pedido: ${ped_name},
        total pedido:${ped_total_price},Pedido status: ${ped_status}`);
})
module.exports = router;