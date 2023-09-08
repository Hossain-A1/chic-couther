import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";




export const useProductContext=()=>{
const context  = useContext(ProductContext)

if(!context){
  return "You must call ProductContextProvider inside a root"
}

return context

}