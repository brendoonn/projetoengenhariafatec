const express = require('express')
const app = express()
const mysql = require("mysql");
const cors = require("cors");

function Repos(){

const db = mysql.createPool({
  //  host: MYSQL_HOST,
  //  user: MYSQL_USER,
  //  password: MYSQL_PASSWORD,
  //  database: MYSQL_DATABASE,
    host: "sistemagerenciamentopapelaria.crefkoeeiaye.sa-east-1.rds.amazonaws.com",
    user:"admin",
    password: "123456789",
    database: "sigpapelaria",
})

//mysql.use(cors())
//mysql.use(express.json())


}
module.exports = Repos()