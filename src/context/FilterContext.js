import { createContext, useEffect, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

import { useProductContext } from "../hooks/useProductContext";

const initialState = {
  isLoading: false,
  isError: false,
  all_products:[],
  filter_products: [],
  filters: {
    text: "",
  },
};


export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);


  // =============search_products==============//
  const handleSearchProducts = (e) => {
    let title = e.target.title;
    let userValue = e.target.value;

  return  dispatch({ type: "PRODUCT_SEARCH", payload: { title, userValue } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS"});
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);




  return (
    <FilterContext.Provider value={{ ...state, handleSearchProducts }}>
      {children}
    </FilterContext.Provider>
  );
};
