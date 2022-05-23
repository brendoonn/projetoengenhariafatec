const express = require('express')
const app = express()
const rotas = require('./rotas')
const cors = require('cors')

const getData = require('./GetData')
const postData = require('./PostData')
const upData = require('./UpdateData')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/', getData)
app.use('/', postData)
app.use('/', upData)


app.listen(3005, () =>{
    console.log("rodando na port 3005");
}); 