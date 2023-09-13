import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  product: {},
  product_loading: false,
  product_error: false,
 
};

export const ProductContext = createContext();

const API = "https://fakestoreapi.com/products";
// -------------------------------------------------------------//
export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //======== get all products==========//
  const getAllProducts = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "IS_ERROR" });
    }
  };

  //========== get single product============//
  const getSingleProduct = async (url) => {
    dispatch({ type: "IS_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);

      const product = await res.data;
      dispatch({ type: "GET_A_PRODUCT", payload: product });
    } catch (error) {
      dispatch({ type: "IS_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getAllProducts(API);
  }, []);
  return (
    <ProductContext.Provider
      value={{ ...state, getSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
