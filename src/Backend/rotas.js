const express = require('express')
const router = express.Router()
const Connection= require('./Connection')
const mysql = require("mysql");


/*
const db = Connection.
*/
const db = mysql.createPool({
    host: "sistemagerenciamentopapelaria.crefkoeeiaye.sa-east-1.rds.amazonaws.com",
    user: "admin",
    password: "123456789",
    database: "sigpapelaria",
})



router.get('/pegardados', (req, res)=>{

        const sql = "SELECT * FROM tbl_endereco"
        db.query(sql, (err, result) =>{
        if (err)console.log(err)
            
        else{
            res.send(result)
        }})
}
)

module.exports = router