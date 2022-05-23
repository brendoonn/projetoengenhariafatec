import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdicionarProduto from "../components/AdicionarProd";
import EditarProduto from "../components/EditarProd";
import ModalExcluir from "../components/ModalExcluir";
import { NavMenu } from "../components/NavMenu";
import { getProdutos} from "../initial-state/dataProducts";
import { useEffect, useState } from "react";
import TableCustom from "../components/TableCustom";
import { columnsProduct, rowsProduct } from '../initial-state/dataProducts'
import { rowSales } from "../initial-state/dataSales";



export function Products() {
const [listaProdutos, setListaPridutos] = useState(new Array());

  useEffect(() => {

  const fecthData = async () => {
    try {
      const getprodutos = await getProdutos();
      setListaPridutos(getprodutos);
      
    } catch (error) { }
  };
  fecthData();
}, []);


  return (
    <div>
      <NavMenu />
      <div className="container">
        <div className="title-insert border-product">
          <p>Produtos</p>
        </div>
        <div className="row">
           <TableCustom 
            row={rowsProduct}
            column={columnsProduct}
            design={'product'}
          /> 
        </div>
      </div>
    </div>
  )
}
