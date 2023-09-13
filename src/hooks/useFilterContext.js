import { useContext } from "react";

import { FilterContext } from "../context/FilterContext";

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    return "You must call FilterContextProvider inside a root";
  }
  return context;
};
