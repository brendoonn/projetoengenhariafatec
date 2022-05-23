import axios from "axios";
import App from "../App";


export function Index(req, res){
    console.log("rodando index")


    const getUsuario = axios.get("localhost:3005/GetData").then(Response=>{
        console.error("erro");
        })

    try{
       console.log(getUsuario);
       // Response.getUsuarioJson
       console.log("GetData não encontrado")
        
    }
    catch{
        console.log("erroo")
    }


}