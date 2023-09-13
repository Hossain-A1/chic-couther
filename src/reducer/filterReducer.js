export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
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

      if (text) {
        copyArr = copyArr.filter((el) => {
          return el.title.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: copyArr,
      };

    default:
      return state;
  }
};
