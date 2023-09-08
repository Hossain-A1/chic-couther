import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import axios from "axios";

const initialState = {
  isLoading:false,
  products: {},
};

export const ProductContext = createContext();
const API = "https://fakestoreapi.com/products";
// -------------------------------------------------------------//
export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //======== get all products==========//
  const getAllProducts = async (url) => {
    try {
      const res = await axios.get(url);

      const products = await res.data;
      dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "PRODUCTS_ERROR" });
    }
  };

  useEffect(() => {
    getAllProducts(API);
  }, []);
  return (
    <ProductContext.Provider value={{ ...state ,getAllProducts}}>
      {children}
    </ProductContext.Provider>
  );
};
