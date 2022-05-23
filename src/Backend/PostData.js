const express = require('express')
const postData = express.Router()
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



postData.get('/postData', (req, res)=>{

    let sql = 
    "INSERT INTO tbl_produto (PK_produto, nome, marca, categoria, data_validade, peso, obs) VALUES ('1', 'caderno','caderno','escolar','xxx','10g', 'nennhuma')";

        db.query(sql, (err, result) =>{
        if (err)console.log("erro")
            
        else{
            res.send(result)
        }})
}
)

module.exports = postData;