import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext=()=>{

  const context = useContext(CartContext)

  if (!context) {
    return "You must call CartContextProvider inside a root";
  }
  return context;
}