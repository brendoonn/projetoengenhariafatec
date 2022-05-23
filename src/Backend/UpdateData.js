const express = require('express')
const upData = express.Router()
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



upData.get('/upData', (req, res)=>{

        const sql = "UPDATE tbl_endereco SET cidade ='carapicuiba' WHERE cidade='teste2';"
        db.query(sql, (err, result) =>{
        if (err)console.log("erro")
            
        else{
            res.send(result)
        }})
}
)

module.exports = upData;