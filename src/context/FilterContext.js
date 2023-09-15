import { createContext, useEffect, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

import { useProductContext } from "../hooks/useProductContext";

const initialState = {
  isLoading: false,
  isError: false,
  grid_view: true,
  all_products: [],
  filter_products: [],
  filters: {
    text: "",
    category: "All",
  },
};

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  // =============grid view===================//
  const handleGridView = () => {
    return dispatch({ type: "GRID_VIEW" });
  };
  // =============list view===================//
  const handleListView = () => {
    return dispatch({ type: "LIST_VIEW" });
  };

  // =============search_products==============//
  const handleSearchProducts = (e) => {
    let userValue = e.target.value;
    let title = e.target.title;
    return dispatch({ type: "PRODUCT_SEARCH", payload: { title, userValue } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, handleSearchProducts, handleGridView, handleListView }}
    >
      {children}
    </FilterContext.Provider>
  );
};
