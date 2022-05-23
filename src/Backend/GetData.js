const express = require('express')
const getData = express.Router()
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



getData.get('/getData', (req, res)=>{
    
        const sql = "SELECT * FROM tbl_produto"
        db.query(sql, (err, result) =>{
        if (err)console.log("erro")
            
        else{
            console.log(result)
            res.send(result)
        }})
}
)

module.exports = getData;