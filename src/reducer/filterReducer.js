export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "PRODUCT_SEARCH":
      const { title, userValue } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [title]: userValue,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let copyArr = [...all_products];
      const { text } = state.filters;

      copyArr = copyArr.filter((item) => {
        return item.title.toLowerCase().includes(text);
      });

      return {
        ...state,
        filter_products: copyArr,
      };

    default:
      return state;
  }
};
