import React, {useState} from 'react'
import { GridColDef , GridKeyValue} from "@mui/x-data-grid"
import axios from "axios";
import { response } from "express"
import { Json } from 'sequelize/types/utils';


  


   export async function getProdutos() {
    
            try {
                const data = await axios.get('http://localhost:3005/getData')    
                console.log(data.data);   
                return data.data;
            
            } 
            catch (error) {
            }
}

      
const columnsProduct: GridColDef[] = [

    { field: 'PK_produto' , headerName: 'ID', width: 50},
    { field: 'nome', headerName: 'nome', flex: 35, cellClassName:'nome'},
    { field: 'marca', headerName: 'marca', flex: 15, cellClassName: 'marca'},
    { field: 'categoria', headerName: 'categoria ', flex: 15, cellClassName: 'categoria' },
    { field: 'data_validade_lote', headerName: 'data_validade_lote', flex: 15, cellClassName: 'data_validade_lote'},
    { field: 'peso', headerName: 'peso', flex: 15, cellClassName: 'peso'},
    { field: 'obs', headerName: 'obs', flex: 15, cellClassName:'obs' },

]


const produt = getProdutos();
const rowsProduct = produt;
/*
    [{"PK_produto":1,"nome":"caderno","marca":"caderno","categoria":"escolar","data_validade_lote":"0000-00-00","peso":10,"obs":"nennhuma"},
     {"PK_produto":2,"nome":"caderno","marca":"caderno","categoria":"escolar","data_validade_lote":"2000-10-01T03:00:00.000Z","peso":10,"obs":"nennhuma"}
    ]
*/
export { columnsProduct, rowsProduct}